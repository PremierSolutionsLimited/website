/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const publishingOptions = [
  {
    title: "Sign up as Driver",
    description: " Lorem ipsum, dolor sit amet consectetur ",
    current: true,
  },
  {
    title: "Sign up as Client",
    description: " Lorem ipsum, dolor sit amet consectetur ",
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            Change published status
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex shadow-sm rounded-md divide-x divide-pink-900">
              <div className="relative z-0 inline-flex shadow-sm rounded-md ">
                <div className="relative inline-flex items-center bg-pink-800 py-3 pl-3 pr-4 border border-transparent rounded-l-full shadow-sm text-white">
                  {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                  <p className="ml-2.5 text-sm font-medium">{selected.title}</p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-pink-800 p-2 rounded-l-none rounded-r-full text-sm font-medium text-white hover:bg-pink-900 focus:outline-none focus:z-10  focus:ring-offset-gray-50 focus:ring-pink-800">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-pink-800" : "text-gray-900",
                        "cursor-default select-none relative p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.title}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-pink-800"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-indigo-200" : "text-gray-500",
                            "mt-2"
                          )}
                        >
                          {option.description}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
