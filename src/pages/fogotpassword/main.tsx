import React, { Fragment, useState } from "react";
import { ForgotPasswordComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import { useMediaQuery } from "react-responsive";
import { SuccessModal } from "../../components/modal";
import { ApolloError, useMutation } from "@apollo/client";
import { SendCodeInput, SendCodeOutput } from "./types";
import { SEND_CLIENT_CODE } from "../../services/graphql/auth";
import SendCodeComponent from "./send-code";
import VerifyCodeComponent from "./verify";
import toast from "react-hot-toast";
import _ from "lodash";
import { CircleSpinner } from "react-spinners-kit";

const MainComponent: React.FC<ForgotPasswordComponentProp> = ({
  setShow,
  show,
}) => {
  const [tab, setTab] = useState<"SEND_CODE" | "VERIFY_CODE">("SEND_CODE");
  const [email, setEmail] = useState<string>("");

  let loading;
  const [invokeSendClientCode, { loading: sendingCode }] = useMutation<
    SendCodeOutput,
    SendCodeInput
  >(SEND_CLIENT_CODE);

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const handleSendClientCode = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    invokeSendClientCode({
      variables: {
        username: email,
        medium: "EMAIL",
      },
    })
      .then(() => {
        return setTab("VERIFY_CODE");
      })
      .catch((e: ApolloError) => {
        return toast.error(
          _.startCase(_.lowerCase(e?.graphQLErrors[0]?.message))
        );
      });
  };

  return (
    <Fragment>
      <SuccessModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 30}
      >
        <div
          className={
            "w-full border-b shadow-none border-gray-200 flex flex-row justify-between px-5 pt-5 pb-3 items-center"
          }
        >
          <div>
            <button onClick={() => setShow(false)}>
              <XIcon className={"h-6 w-6 text-red-300"} />
            </button>
          </div>
        </div>

        <div className={"bg-white px-20 grid grid-cols-2 shadow-none"}>
          {tab === "SEND_CODE" && (
            <Fragment>
              <SendCodeComponent email={email} setEmail={setEmail} />
            </Fragment>
          )}
          {tab === "VERIFY_CODE" && (
            <Fragment>
              <VerifyCodeComponent />
            </Fragment>
          )}
        </div>

        <div className="grid grid-cols-2 border-t cursor-pointer bg-white shadow-none">
          {tab === "SEND_CODE" && (
            <Fragment>
              <button
                onClick={() => setShow(false)}
                className={
                  "border-r col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
                }
              >
                <span className={"text-lg font-light"}>Close</span>
              </button>

              <button
                typeof={"button"}
                disabled={sendingCode}
                onClick={handleSendClientCode}
                className={
                  "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
                }
              >
                {sendingCode ? (
                  <Fragment>
                    <CircleSpinner loading color={"#d81b60"} size={18} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className={"text-lg font-light"}>Send Code</span>
                  </Fragment>
                )}
              </button>
            </Fragment>
          )}
          {tab === "VERIFY_CODE" && (
            <Fragment>
              <button
                onClick={() => setTab("SEND_CODE")}
                className={
                  "border-r col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none "
                }
              >
                <span className={"text-lg font-light"}>Back</span>
              </button>

              <button
                className={
                  "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
                }
              >
                {loading ? (
                  <Fragment>
                    <CircleSpinner loading color={"#d81b60"} size={18} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className={"text-lg font-light"}>Verify Code</span>
                  </Fragment>
                )}
              </button>
            </Fragment>
          )}
        </div>
      </SuccessModal>
    </Fragment>
  );
};

export default MainComponent;
