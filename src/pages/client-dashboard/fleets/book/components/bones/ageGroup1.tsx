import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const ageGroup = [
  { name: "Under 12 years Old", group: "GROUP1" },
  { name: "12-17 years old", group: "GROUP2" },
  { name: "18-24 years old", group: "GROUP3" },
  { name: "25-34 years old", group: "GROUP4" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AgeGroupComponent1() {
  const [selected, setSelected] = useState(ageGroup[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px">
        {ageGroup.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === ageGroup.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-indigo-900" : "text-gray-900",
                      "block text-sm font-medium"
                    )}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
