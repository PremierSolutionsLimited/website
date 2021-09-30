import React, { Fragment } from "react";
import { OtherInfoComponentProp } from "./types";
import { DatePicker } from "antd";
import moment from "moment";

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
  digitalAddress,
  setDigitalAddress,
  phone,
  setPhone,
}) => {
  function handleGoToNextPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    return setTab("emergency");
  }

  const disabledDateFuture = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(0, "days");
    return current > start;
  };

  const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(1, "days");
    return current < start;
  };
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
                htmlFor="url"
                className="block text-sm pb-3  font-medium text-gray-700"
              >
                Digital Address
              </label>
              <input
                type="text"
                name="url"
                id="url"
                placeholder="Eg. GA-34898-48"
                value={digitalAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDigitalAddress(e.target.value)
                }
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-3  font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                name="url"
                id="url"
                placeholder="Eg. 0541879515"
                value={phone}
                required
                min="0"
                maxLength={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (/[a-zA-Z]/.test(e.target.value)) {
                    return setPhone("");
                  } else {
                    setPhone(e.target.value);
                  }
                }}
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium pb-3  text-gray-700"
              >
                ID Type
              </label>
              <select
                id="location"
                name="location"
                value={idType}
                placeholder="Eg. 0541879515"
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
                placeholder="Eg. 909879086"
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
              {/* <input
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
              /> */}
              <DatePicker
                // value={value}
                onChange={(data: any) => {
                  setIdIssueDate(data);
                }}
                disabledDate={disabledDateFuture}
                value={idIssueDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-3 font-medium text-gray-700"
              >
                ID Expiry Date
              </label>

              <DatePicker
                // value={value}
                onChange={(data: any) => {
                  setIdExpiryDate(data);
                }}
                disabledDate={disabledDate}
                value={idExpiryDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
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
