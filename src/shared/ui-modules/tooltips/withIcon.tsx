import * as React from "react";
import { Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { ToolTipWithIconProp } from "./types";

export const TooltipWithIcon = ({ message }: ToolTipWithIconProp) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <React.Fragment>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <InformationCircleIcon className={"h-4 w-4 text-pink-400 ml-2"} />
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
        <div
          className={"absolute bg-black px-1 py-1 rounded-lg -top-2 -right-5"}
        >
          <span className={"text-white text-xs "}>{message || ""}</span>
        </div>
      </Transition>
    </React.Fragment>
  );
};
