import React, { useRef, Fragment } from "react";
import { useOutsideListener } from "../hooks";
import { BasicModalComponentProp } from "./types";
// import Transition from "../../molecules/transitions/modalTransition";
import { Dialog, Transition } from "@headlessui/react";

const Modal: React.FC<BasicModalComponentProp> = ({
  show,
  setShow,
  size,
  children,
  canClose,
  height,
}) => {
  const ref = useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow(false);
  });

  return (
    <Fragment>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={ref}
          open={show}
          onClose={setShow}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-20"
              enterTo="opacity-100 translate-x-0 sm:scale-100"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="opacity-100 translate-x-0 sm:scale-100"
              leaveTo="translate-x-20"
            >
              <div className="fixed z-20 inset-x-0   sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                <div
                  ref={ref}
                  style={{ width: `${size}vw`, height: `${height}vh` }}
                  className={
                    "bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all "
                  }
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  {children}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

Modal.defaultProps = {
  size: 35,
  canClose: true,
};

export default Modal;
