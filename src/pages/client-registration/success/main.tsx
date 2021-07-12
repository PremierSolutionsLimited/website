import React, { Fragment } from "react";
import { SucessComponentProp } from "./types";
import { useMediaQuery } from "react-responsive";
import { CheckIcon } from "@heroicons/react/outline";
import { useAuthProvider } from "../../../services/context";
import { useHistory } from "react-router-dom";
import Modal from "../../../components/modal";

const MainComponent = ({ show, setShow }: SucessComponentProp) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const { push } = useHistory();
  const [{ signOut }] = useAuthProvider();

  const handleClearToken = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(false);
    signOut();
    return push("/client-login");
  };
  return (
    <Fragment>
      <Modal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 30}
        canClose={false}
      >
        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          {/* <button
            onClick={() => setShow(false)}
            type="button"
            className="text-red-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition ease-in-out duration-150"
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 transform transition-all max-w-sm sm:my-8 sm:align-middle sm:p-6">
          <div>
            <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-100">
              <CheckIcon
                className="h-8 w-8 text-green-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <div className="text-xl leading-6 font-medium text-gray-900">
                Account Created Successfully
              </div>
              <div className="mt-2">
                <p className="text-md text-gray-800 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  laborum corporis consequatur vero eius eveniet officiis sed
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={handleClearToken}
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm"
            >
              Sign In
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default MainComponent;
