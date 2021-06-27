import { Fragment } from "react";
import { ForgotPasswordComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import Modal from "../../components/modal/basic";

const MainComponent: React.FC<ForgotPasswordComponentProp> = ({
  setShow,
  show,
}) => {
  return (
    <Fragment>
      <Modal show={show} setShow={setShow}>
        <div
          className={
            "w-full border-b border-gray-200 flex flex-row justify-between px-5 pt-5 pb-3 items-center"
          }
        >
          <div>
            <button onClick={() => setShow(false)}>
              <XIcon className={"h-6 w-6 text-red-300"} />
            </button>
          </div>
        </div>

        <div className={"bg-gray-50 border-b grid grid-cols-2"}>hi</div>

        <div className="grid grid-cols-1 border-t cursor-pointer bg-gray-50">
          <button
            onClick={() => setShow(false)}
            className={"border-r flex justify-center p-5 hover:bg-gray-100 "}
          >
            <span className={"text-lg font-light"}>CLOSE</span>
          </button>
          {/* <button
              onClick={() => setShow(false)}
              className={
                "border-r flex justify-center p-5 bg-red-50 hover:bg-gray-100 "
              }
            >
              <span className={"text-lg font-light"}>REJECT</span>
            </button>
            <button
              onClick={() => setShow(false)}
              className={"border-r flex justify-center p-5 hover:bg-gray-100 "}
            >
              <span className={"text-lg font-light"}>ACCEPT</span>
            </button> */}
        </div>
      </Modal>
    </Fragment>
  );
};

export default MainComponent;
