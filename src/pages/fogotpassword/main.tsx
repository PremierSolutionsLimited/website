import { Fragment } from "react";
import { ForgotPasswordComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import Modal from "../../components/modal/basic";
import ForgotPasswordSvg from "../../components/svgs/forgotpassword";

const MainComponent: React.FC<ForgotPasswordComponentProp> = ({
  setShow,
  show,
}) => {
  return (
    <Fragment>
      <Modal show={show} setShow={setShow}>
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
          <div className="col-span-2">
            <ForgotPasswordSvg className=" w-full h-48" />
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold">Forgot Your Password ?</h2>
          </div>
          <div className="col-span-2 ">
            <div className="text-center text-sm font-light pt-2">
              {" "}
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </div>
          </div>
          <div className="col-span-2 py-5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Eg. johndoe@something.com"
              required
              className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 border-t cursor-pointer bg-white shadow-none">
          <button
            onClick={() => setShow(false)}
            className={
              "border-r col-span-1 flex justify-center p-5 hover:bg-gray-100 "
            }
          >
            <span className={"text-lg font-light"}>Close</span>
          </button>

          <button
            onClick={() => setShow(false)}
            className={
              "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 "
            }
          >
            <span className={"text-lg font-light"}>Send Code</span>
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default MainComponent;
