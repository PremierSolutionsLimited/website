import { Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { SketchPicker } from "react-color";
import { useOutsideListener } from "../../../../../components/hooks";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const SketchPickerComponent = ({ show, setShow, color, setColor }: Props) => {
  const wrapperRef = useRef<any>(null);
  useOutsideListener(wrapperRef, () => setShow(false));

  return (
    <Fragment>
      <Transition
        show={show}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="opacity-0"
      >
        <div ref={wrapperRef} className={"absolute"}>
          <SketchPicker
            color={color}
            onChangeComplete={(color) => {
              setColor(color?.hex);
            }}
          />
        </div>
      </Transition>
    </Fragment>
  );
};

export default SketchPickerComponent;
