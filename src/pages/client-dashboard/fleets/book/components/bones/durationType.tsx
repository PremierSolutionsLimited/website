import React from "react";
import { duration as DurationData } from "../data/age";
import { IDurationType } from "../data/types";
import { getFinalDateWithDurationTypeInput } from "../utils/switch";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  selected: IDurationType;
  setDurationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<IDurationType>>;
  duration: string;
  selectedDate: string;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function DurationTypeComponent({
  selected,
  setSelected,
  duration,
  selectedDate,
  setEndTime,
  setDurationTypeSelected,
}: Props) {
  return (
    <div className="bg-white flex flex-row rounded-md -space-y-px">
      {DurationData.map((setting, settingIdx) => (
        <div
          key={setting.name}
          onClick={() => {
            setDurationTypeSelected(setting?.name);
            setSelected(setting);
            if (selectedDate && duration) {
              getFinalDateWithDurationTypeInput(
                settingIdx,
                duration,
                selectedDate,
                setEndTime
              );
            }
          }}
          className={classNames(
            settingIdx === 0 ? "rounded-md" : "rounded-md",
            settingIdx === duration.length - 1 ? "rounded-md" : "rounded-md",
            setting === selected
              ? "bg-pink-50 border-pink-200 z-10"
              : "border-gray-200",
            "relative border p-4 flex mr-4 cursor-pointer focus:outline-none"
          )}
        >
          <div
            className={classNames(
              setting === selected
                ? "bg-pink-600 border-transparent"
                : "bg-white border-gray-300",

              "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
            )}
            aria-hidden="true"
          >
            <div className="rounded-full bg-white w-1.5 h-1.5" />
          </div>
          <div className="ml-2 flex flex-col">
            <div
              className={classNames(
                setting === selected ? "text-pink-900" : "text-gray-900",
                "block text-sm font-medium"
              )}
            >
              {setting.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
