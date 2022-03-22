import React, { Fragment } from "react";
import { ExperienceComponentProp } from "./types";
import { DatePicker } from "antd";
import moment from "moment";
import { CircleSpinner } from "react-spinners-kit";

const ExperienceComponent: React.FC<ExperienceComponentProp> = ({
  setTab,
  hadAccidents,
  setHadAccidents,
  hasBeenArrested,
  setHasBeenArrested,
  previousEmployerName,
  setPreviousEmployerName,
  previousPositionHeld,
  setPreviousPositionHeld,
  previousPostionStartDate,
  setPreviousPositionStartDate,
  previousPositionEndDate,
  setPreviousPositionEndDate,
  reasonForLeavingPreviousWork,
  setReasonForLeavingPreviousWork,
  currentEmployerName,
  setCurrentEmployerName,
  currentPositionStartDate,
  setCurrentPostionStartDate,
  currentPositionEndDate,
  setCurrentPostionEndDate,
  currentPositionHeld,
  setCurrentPositionHeld,
  isEmployed,
  setIsEmployed,
  handleSubmit,
    loading,
    uploadingToFirebase
  // yearsOfDrivingExperience,
  // setYearsOfDrivingExperience,
}) => {
  const handleGotoNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return setTab("license");
  };
  const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(0, "days");
    return current > start;
  };

  return (
    <Fragment>
      <form
        onSubmit={handleGotoNextPage}
        className="divide-y divide-gray-200 lg:col-span-9"
      >
        <div className="py-6 px-4 sm:p-4 lg:pb-8">
          <div className="mt-0 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Previous Employer Name
              </label>
              <input
                required
                type="text"
                name="company"
                id="company"
                placeholder={"Uber"}
                value={previousEmployerName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPreviousEmployerName(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Position Held
              </label>
              <input
                required
                type="text"
                name="company"
                placeholder={"Driver"}
                id="company"
                autoComplete="organization"
                value={previousPositionHeld}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPreviousPositionHeld(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Start Date
              </label>

              <DatePicker
                // value={value}
                disabledDate={disabledDate}
                onChange={(data: any) => {
                  setPreviousPositionStartDate(data);
                }}
                value={previousPostionStartDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                End Date
              </label>

              <DatePicker
                // value={value}
                disabledDate={disabledDate}
                onChange={(data: any) => {
                  setPreviousPositionEndDate(data);
                }}
                value={previousPositionEndDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Reason for leaving previous work
              </label>
              <input
                required
                type="text"
                name="company"
                placeholder={"Eg. Needed a change of environment"}
                id="company"
                value={reasonForLeavingPreviousWork}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setReasonForLeavingPreviousWork(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Are you currently employed?
              </label>
              <select
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                value={isEmployed}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setIsEmployed(e.target.value)
                }
              >
                <option>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            {isEmployed === "yes" && (
              <Fragment>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm pb-2 font-medium text-gray-700"
                  >
                    Current Employer Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Bolt"
                    value={currentEmployerName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCurrentEmployerName(e.target.value)
                    }
                    autoComplete="organization"
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm pb-2 font-medium text-gray-700"
                  >
                    Position Held
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Driver"
                    value={currentPositionHeld}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCurrentPositionHeld(e.target.value)
                    }
                    autoComplete="organization"
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm pb-2 font-medium text-gray-700"
                  >
                    Start Date
                  </label>

                  <DatePicker
                    // value={value}
                    onChange={(data: any) => {
                      setCurrentPostionStartDate(data);
                    }}
                    value={currentPositionStartDate as any}
                    className={
                      "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                    }
                  />
                  {/* <input
                    type={"date"}
                    id={"dob"}
                    value={currentPositionStartDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCurrentPostionStartDate(e.target.value)
                    }
                    className="mt-1 block w-full pl-1 pr-1 py-2  text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
                  /> */}
                </div>
              </Fragment>
            )}
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
        </div>
      </form>
    </Fragment>
  );
};

export default ExperienceComponent;
