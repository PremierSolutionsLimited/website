import { useCallback } from "react";
import { ageGroup1 } from "../data/age";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AgeGroupComponent1({ selected, setSelected }: any) {
  //remove from array
  const removeFromArray = useCallback(
    (module: any) =>
      setSelected(selected?.filter((single: any) => single !== module)),
    [selected, setSelected]
  );
  return (
    <div>
      <div className="bg-white rounded-md -space-y-px">
        {ageGroup1.map((setting, settingIdx) => {
          let isIn = selected.find((single: any) => single === setting);

          return (
            <div
              key={setting.name}
              onClick={() => {
                if (isIn) removeFromArray(setting);
                else setSelected([...selected, setting]);
              }}
              className={classNames(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === ageGroup1.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                isIn ? "bg-pink-50 border-pink-200 z-10" : "border-gray-200",
                "relative border p-4 flex cursor-pointer focus:outline-none"
              )}
            >
              <span
                className={classNames(
                  isIn
                    ? "bg-pink-600 border-transparent"
                    : "bg-white border-gray-300",
                  isIn ? "ring-2 ring-offset-2 ring-pink-500" : "",
                  "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                )}
                aria-hidden="true"
              >
                <span className="rounded-full bg-white w-1.5 h-1.5" />
              </span>
              <div className="ml-3 flex flex-col">
                <div
                  className={classNames(
                    isIn ? "text-pink-900" : "text-gray-900",
                    "block text-sm font-medium"
                  )}
                >
                  {setting.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
