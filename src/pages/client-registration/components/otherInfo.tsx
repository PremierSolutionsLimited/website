import React, { Fragment } from "react";
import { OtherInfoComponentProp } from "./types";

import SelectGenderPreference from "../bones/gender";

const CarInfoComponent: React.FC<OtherInfoComponentProp> = ({
  setTab,
  genderPreference,
  setGenderPreference,
  idType,
  setIdType,
  idIssueDate,
  setIdIssueDate,
  idExpiryDate,
  setIdExpiryDate,
  idNumber,
  setIdNumber,
}) => {
  function handleGoToNextPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    return setTab("emergency");
  }
  return (
    <Fragment>
      <form
        onSubmit={handleGoToNextPage}
        className="divide-y divide-gray-200 lg:col-span-9"
      >
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium pb-2  text-gray-700"
              >
                ID Type
              </label>
              <select
                id="location"
                name="location"
                value={idType}
                required
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setIdType(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option>Please Choose</option>
                <option value={"Passport"}>Passport</option>
                <option value={"Health Insurance"}>Health Insurance</option>
                <option value={"National  Identification Card"}>
                  National Identification Card
                </option>
              </select>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-3 font-medium text-gray-700"
              >
                ID Number
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                value={idNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdNumber(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-3 font-medium text-gray-700"
              >
                ID Issue Date
              </label>
              <input
                type="date"
                name="company"
                id="company"
                required
                value={idIssueDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdIssueDate(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-3 font-medium text-gray-700"
              >
                ID Expiry Date
              </label>
              <input
                type="date"
                name="company"
                id="company"
                required
                value={idExpiryDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdExpiryDate(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block pb-3 text-sm font-medium text-gray-700"
              >
                Select gender of drivers prefered
              </label>
              <SelectGenderPreference
                genderPreference={genderPreference}
                setGenderPreference={setGenderPreference}
              />
            </div>
          </div>

          <div className="pt-6 divide-y divide-gray-200">
            <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
              <button
                onClick={() => setTab("personal")}
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

export default CarInfoComponent;
