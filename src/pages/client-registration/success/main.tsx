import React, { Fragment } from "react";
import { SucessComponentProp } from "./types";
import { useMediaQuery } from "react-responsive";
import { CheckIcon } from "@heroicons/react/outline";
import { useAuthProvider } from "../../../services/context";
import { useHistory } from "react-router-dom";
import { SuccessModal } from "../../../components/modal";

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
      <SuccessModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 30}
        canClose={false}
      >
        <div className="text-center">
          <div className="inline-block text-center align-bottom bg-white rounded-lg px-4 pt-5 pb-4 transform transition-all max-w-sm sm:my-8 sm:align-middle sm:p-6">
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
                    Sign in to begin your premiere chauffeur journey
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={handleClearToken}
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gold-1 text-base font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-2 sm:text-sm"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </SuccessModal>
    </Fragment>
  );
};

export default MainComponent;
