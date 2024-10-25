import { FC, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useOutsideListener } from "../hooks";
import { BasicModalComponentProp } from "./types";

const Basic: FC<BasicModalComponentProp> = ({
  children,
  setShow,
  show,
  size,
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
          className="fixed z-50 inset-0 overflow-y-auto"
          open={show}
          onClose={setShow}
          initialFocus={ref}
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

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="fixed z-30 inset-x-0   sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                <div
                  ref={ref}
                  style={{ width: `${size}vw`, height: `${height}vh` }}
                  className="inline-block align-bottom bg-white rounded-lg overflow-y-scroll text-left shadow-xl transform transition-all sm:my-8 sm:align-middle"
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

Basic.defaultProps = {
  size: 30,
  canClose: true,
};

export default Basic;
