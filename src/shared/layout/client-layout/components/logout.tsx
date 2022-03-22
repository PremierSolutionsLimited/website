import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { BasicModal } from "../../../../components/modal";
import { useAuthProvider } from "../../../../services/context";
import { useMediaQuery } from "react-responsive";
import LogoutSVG from "../../../../components/svgs/logout";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logout: React.FC<Props> = ({ show, setShow }) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });
  const [{ signOut }] = useAuthProvider();
  const { push } = useHistory();

  const onClick = () => {
    signOut();
    push("/client-login");
    setShow(false);
  };
  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 25}
      >
        <div className="px-6">
          <div className="inline-block align-bottom  px-4 pt-5 pb-0 text-left overflow-hidden shadow-none transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-full sm:p-6">
            <div>
              <div className="mx-auto flex items-center justify-center rounded-none ">
                <LogoutSVG className="h-24 w-24" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <div className="text-lg leading-6 font-medium text-gray-900">
                  Logout Request
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to log out?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gold-1 text-base font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:col-start-2 sm:text-sm"
                onClick={onClick}
              >
                Logout
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default Logout;
