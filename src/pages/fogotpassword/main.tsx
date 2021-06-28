import { Fragment, useState } from "react";
import { ForgotPasswordComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import { useMediaQuery } from "react-responsive";
import Modal from "../../components/modal/basic";
import SendCodeComponent from "./send-code";
import VerifyCodeComponent from "./verify";

const MainComponent: React.FC<ForgotPasswordComponentProp> = ({
  setShow,
  show,
}) => {
  const [tab, setTab] = useState<"SEND_CODE" | "VERIFY_CODE">("SEND_CODE");

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  return (
    <Fragment>
      <Modal show={show} setShow={setShow} size={isTabletOrMobile ? 100 : 30}>
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
              <SendCodeComponent />
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
                onClick={() => setTab("VERIFY_CODE")}
                className={
                  "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
                }
              >
                <span className={"text-lg font-light"}>Send Code</span>
              </button>
            </Fragment>
          )}
          {tab === "VERIFY_CODE" && (
            <Fragment>
              <button
                onClick={() => setShow(false)}
                className={
                  "border-r col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none "
                }
              >
                <span className={"text-lg font-light"}>Close</span>
              </button>

              <button
                className={
                  "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
                }
              >
                <span className={"text-lg font-light"}>Verify Code</span>
              </button>
            </Fragment>
          )}
        </div>
      </Modal>
    </Fragment>
  );
};

export default MainComponent;
