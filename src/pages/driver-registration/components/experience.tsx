import React, { Fragment } from "react";
import { ExperienceComponentProp } from "./types";

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

  // yearsOfDrivingExperience,
  // setYearsOfDrivingExperience,
}) => {
  const handleGotoNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return setTab("license");
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
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Have you had any accidents in the last 5 years?
              </label>
              <select
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                value={hadAccidents}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHadAccidents(e.target.value)
                }
              >
                <option>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Have you ever been arrested before?
              </label>
              <select
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                value={hasBeenArrested}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasBeenArrested(e.target.value)
                }
              >
                <option>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
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
              <input
                required
                type={"date"}
                id={"dob"}
                value={previousPostionStartDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPreviousPositionStartDate(e.target.value)
                }
                className="mt-1 block w-full pl-1 pr-1 py-2  text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                required
                type={"date"}
                id={"dob"}
                value={previousPositionEndDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPreviousPositionEndDate(e.target.value)
                }
                className="mt-1 block w-full pl-1 pr-1 py-2  text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
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
                  <input
                    type={"date"}
                    id={"dob"}
                    value={currentPositionStartDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCurrentPostionStartDate(e.target.value)
                    }
                    className="mt-1 block w-full pl-1 pr-1 py-2  text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
                  />
                </div>
              </Fragment>
            )}
          </div>

          <div className="pt-6 divide-y divide-gray-200">
            <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
              <button
                onClick={() => setTab("card")}
                type="button"
                className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ExperienceComponent;
