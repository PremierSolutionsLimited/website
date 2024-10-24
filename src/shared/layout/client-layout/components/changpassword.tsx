import React, { Fragment, useState } from "react";
import {
  ChangePasswordComponentProp,
  ChangePasswordInputProp,
  ChangePasswordOutputProp,
} from "./types";
import { useMediaQuery } from "react-responsive";
import { BasicModal } from "../../../../components/modal";
import { XIcon } from "@heroicons/react/outline";
import { ApolloError, useMutation } from "@apollo/client";
import {
  CHANGE_PASSWORD,
  CURRENT_CLIENT,
} from "../../../../services/graphql/auth";
import { CircleSpinner } from "react-spinners-kit";
import toast from "react-hot-toast";
import _ from "lodash";

const MainComponent: React.FC<ChangePasswordComponentProp> = ({
  setShow,
  show,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const [oldPassword, setOldPasswrd] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [invokeChangePassword, { loading }] = useMutation<
    ChangePasswordOutputProp,
    ChangePasswordInputProp
  >(CHANGE_PASSWORD, {
    refetchQueries: [
      {
        query: CURRENT_CLIENT,
      },
    ],
  });

  const resetStates = () => {
    setOldPasswrd("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Your passwords do not match");
    }
    invokeChangePassword({
      variables: {
        oldPassword,
        newPassword: password,
      },
    })
      .then(() => {
        setShow(false);
        toast.success("Password has been updated successfully");
        resetStates();
      })
      .catch((e: ApolloError) => {
        toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)));
      });
  };

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 28}
      >
        <div
          className={
            "w-full border-b shadow-none border-gray-200 flex flex-row justify-between px-8 pt-5 pb-3 items-center"
          }
        >
          <span className={"font-medium text-xl"}>Change Your Password</span>

          <div>
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setShow(false)}
            >
              <XIcon className={"h-6 w-6 text-red-300"} />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 grid grid-cols-12 gap-3 px-8">
            <div className="col-span-12 sm:col-span-12 md:col-span-12">
              <label
                htmlFor="url"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                required
                value={oldPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOldPasswrd(e.target.value)
                }
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                placeholder=""
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12">
              <label
                htmlFor="url"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                placeholder=""
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12">
              <label
                htmlFor="url"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                placeholder=""
              />
            </div>
          </div>
          <div className="py-5 px-5 border-t border-gray-200 mt-5  flex justify-end">
            <span className="inline-flex rounded-none shadow-sm mr-2 ">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
            <span className="inline-flex rounded-none shadow-sm ">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                {loading ? (
                  <Fragment>
                    <CircleSpinner color="#fff" size={13} loading />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="mx-1">Save</span>
                  </Fragment>
                )}
              </button>
            </span>
          </div>
        </form>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
