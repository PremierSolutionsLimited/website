import React, { useRef, Fragment } from "react";
import { useOutsideListener } from "../../hooks";
import PropTypes from "prop-types";
import Transition from "../../transitions";

const Modal = ({ show, setShow, size, children, canClose, height }) => {
  const ref = useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow(false);
  });

  return (
    <Fragment>
      <Transition show={show}>
        <div className="fixed z-50 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <Transition
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="opacity-0"
          >
            <div className="fixed  inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black  opacity-75" />
            </div>
          </Transition>

          <Transition
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-1/4"
            enterTo="opacity-100 translate-x-0 sm:scale-100"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="opacity-100 translate-x-0 sm:scale-100"
            leaveTo="-translate-x-1/4"
          >
            <div className="fixed z-20 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
              <div
                ref={ref}
                style={{ width: `${size}vw`, height: `${height}vh` }}
                className="bg-white  rounded-md px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                {children}
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Fragment>
  );
};

Modal.defaultProps = {
  size: 35,
  canClose: false,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  size: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
  canClose: PropTypes.bool,
};

export default Modal;
