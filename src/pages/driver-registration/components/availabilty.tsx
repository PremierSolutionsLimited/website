import { Fragment } from "react";
import { Switch } from "@headlessui/react";
import { AvailabiltyComponentProp } from "./types";
import { CircleSpinner } from "react-spinners-kit";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AvailabiltyComponent: React.FC<AvailabiltyComponentProp> = ({
  setTab,
  mondayActive,
  setMondayActive,
  tuesdayActive,
  setTuesdayActive,
  wednesdayActive,
  setWednesdayActive,
  thursdayActive,
  setThursdayActive,
  fridayActive,
  setFridayActive,
  saturdayActive,
  setSaturdayActive,
  sundayActive,
  setSundayActive,
  loading,
  currentImageLoaderPrompt,
  handleSubmit,
  uploadingToFirebase,
}) => {
  return (
    <Fragment>
      <form className="divide-y divide-gray-200 lg:col-span-9">
        <div className="pt-0 divide-y divide-gray-200">
          <div className="px-4 sm:px-6">
            <ul className="mt-2 divide-y divide-gray-200">
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md font-medium text-gray-900"
                    passive
                  >
                    Monday
                  </Switch.Label>
                </div>
                <Switch
                  checked={mondayActive}
                  onChange={setMondayActive}
                  className={classNames(
                    mondayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      mondayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Tuesday
                  </Switch.Label>
                </div>
                <Switch
                  checked={tuesdayActive}
                  onChange={setTuesdayActive}
                  className={classNames(
                    tuesdayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      tuesdayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Wednesday
                  </Switch.Label>
                </div>
                <Switch
                  checked={wednesdayActive}
                  onChange={setWednesdayActive}
                  className={classNames(
                    wednesdayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      wednesdayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Thursday
                  </Switch.Label>
                </div>
                <Switch
                  checked={thursdayActive}
                  onChange={setThursdayActive}
                  className={classNames(
                    thursdayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      thursdayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Friday
                  </Switch.Label>
                </div>
                <Switch
                  checked={fridayActive}
                  onChange={setFridayActive}
                  className={classNames(
                    fridayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      fridayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Saturday
                  </Switch.Label>
                </div>
                <Switch
                  checked={saturdayActive}
                  onChange={setSaturdayActive}
                  className={classNames(
                    saturdayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      saturdayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
              <Switch.Group
                as="li"
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <Switch.Label
                    as="p"
                    className="text-md  font-medium text-gray-900"
                    passive
                  >
                    Sunday
                  </Switch.Label>
                </div>
                <Switch
                  checked={sundayActive}
                  onChange={setSundayActive}
                  className={classNames(
                    sundayActive ? "bg-green-500" : "bg-gray-200",
                    "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      sundayActive ? "translate-x-5" : "translate-x-0",
                      "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}
                  />
                </Switch>
              </Switch.Group>
            </ul>
          </div>
        </div>
        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("license")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={uploadingToFirebase || loading}
              className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              <div className="mr-2">
                {uploadingToFirebase || loading
                  ? "Completing Process"
                  : "Complete Process"}
              </div>

              <div>
                {" "}
                {uploadingToFirebase || loading ? (
                  <Fragment>
                    <div className="mt-1">
                      <CircleSpinner loading color="#fff" size={15} />
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Fragment>
                )}
              </div>
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default AvailabiltyComponent;
