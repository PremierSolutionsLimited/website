import * as React from "react";
import { Transition } from "@headlessui/react";
import { ToolTipWithoutIconProp } from "./types";

export const TooltipWithoutIcon = ({
  message,
  children,
  messageClassName,
}: ToolTipWithoutIconProp) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <React.Fragment>
      <div className={"relative w-full"}>
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {children}
        </div>
        <Transition
          show={showTooltip}
          as={React.Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-y-2"
          enterTo="translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={messageClassName}>
            <span className={"text-white text-xs "}>{message || ""}</span>
          </div>
        </Transition>
      </div>
    </React.Fragment>
  );
};
