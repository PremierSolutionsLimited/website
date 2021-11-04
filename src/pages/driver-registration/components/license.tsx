import React, { Fragment, useState } from "react";
import { LicenseComponentProp } from "./types";
import { CameraIcon } from "@heroicons/react/outline";
import { DatePicker } from "antd";
import SelectTypeOfCars from "../bones/typeMultiSelect";

export default function LicenseComponent({
  setTab,
  hasALicense,
  setHasALicense,
  licenseId,
  setLicenseId,
  licenseExpiryDate,
  setLicenseExpiryDate,
  licenseIssueDate,
  setLicenseIssueDate,
  yearsOfExperienceOnLicense,
  setYearsOfExperienceOnLicense,
  licenseClass,
  setLicenseClass,
  handleLicenseFrontImageUpload,
  driverLicenseFrontImageUrl,
  handleLicenseBackImageUpload,
  driverLicenseBackImageUrl,
  setTypeOfCars,
  typesOfCars,
}: LicenseComponentProp) {
  const handleGotoNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return setTab("avaiabliity");
  };

  const [hasLicense, setHasLicense] = useState("no");
  return (
    <div>
      <form
        onSubmit={handleGotoNextPage}
        className="divide-y divide-gray-200 lg:col-span-9"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-0 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Do you have a license?
              </label>
              <select
                id="location"
                name="location"
                required={true}
                value={hasALicense}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setHasALicense(e.target.value);
                  setHasLicense(e?.target?.value);
                }}
                className="mt-1 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option>Please Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium pb-3 text-gray-700"
              >
                What type of vehicle can you drive?
              </label>
              <SelectTypeOfCars
                placeholder={"Click to select car type"}
                type={typesOfCars}
                setType={setTypeOfCars}
              />
            </div>
            {hasLicense === "yes" && (
              <>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium pb-2 text-gray-700"
                  >
                    Driver's license class
                  </label>
                  <select
                    id="licence_class"
                    name="licence_class"
                    required={true}
                    value={licenseClass}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setLicenseClass(e.target.value)
                    }
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                  >
                    <option value={""}>Please Choose</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm pb-2 font-medium text-gray-700"
                  >
                    License Issue Date
                  </label>

                  <DatePicker
                    onChange={(data: any) => {
                      setLicenseIssueDate(data);
                    }}
                    value={licenseIssueDate as any}
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
                    License Expiry Date
                  </label>
                  <DatePicker
                    onChange={(data: any) => {
                      setLicenseExpiryDate(data);
                    }}
                    value={licenseExpiryDate as any}
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
                    License ID
                  </label>
                  <input
                    type="text"
                    name="licence_id"
                    id="licence_id"
                    autoComplete={"licence_id"}
                    required={false}
                    value={licenseId}
                    placeholder={"MOS-08273482-88483"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLicenseId(e.target.value)
                    }
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm pb-2 font-medium text-gray-700"
                  >
                    Years of driving experience on license ?
                  </label>
                  <input
                    type="number"
                    name="years_of_experience"
                    id="years_of_experience"
                    autoComplete="years_of_experience"
                    required
                    placeholder={"Eg. 6"}
                    value={yearsOfExperienceOnLicense}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setYearsOfExperienceOnLicense(e.target.value)
                    }
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>

                {hasLicense === "yes" && (
                  <>
                    <div className="col-span-12 sm:col-span-6" />
                  </>
                )}
                <div className="col-span-12 sm:col-span-12 md:col-span-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Driver's License (Front)
                  </label>
                  {driverLicenseFrontImageUrl ? (
                    <Fragment>
                      <div className="relative pt-3">
                        <img
                          className="h-28 w-full object-cover lg:h-44"
                          src={driverLicenseFrontImageUrl}
                          alt="driverFront"
                        />
                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                        >
                          <div className="">
                            <div className="bg-gray-900 relative  bg-opacity-60  h-12 w-12 rounded-full flex items-center justify-center">
                              <CameraIcon
                                className=" flex-shrink-0 h-6 w-6 text-gray-300"
                                aria-hidden="true"
                              />

                              {/* <span className="sr-only"> user photo</span> */}
                              <input
                                type="file"
                                id="user-photo"
                                name="user-photo"
                                onChange={handleLicenseFrontImageUpload}
                                accept={"image/*"}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="relative pt-3">
                        <div className="h-28 w-full object-cover lg:h-44 border border-dashed rounded-lg border-gray-500"></div>
                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                        >
                          <div className="">
                            <div className="bg-gray-300 relative  bg-opacity-30  h-12 w-12 rounded-full flex items-center justify-center">
                              <CameraIcon
                                className=" flex-shrink-0 h-6 w-6 text-gray-500"
                                aria-hidden="true"
                              />

                              {/* <span className="sr-only"> user photo</span> */}
                              <input
                                type="file"
                                id="user-photo"
                                name="user-photo"
                                onChange={handleLicenseFrontImageUpload}
                                accept={"image/*"}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </Fragment>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Driver's License (Back)
                  </label>

                  {driverLicenseBackImageUrl ? (
                    <Fragment>
                      <div className="relative pt-3">
                        <img
                          className="h-28 w-full object-cover lg:h-44"
                          src={driverLicenseBackImageUrl}
                          alt=""
                        />

                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                        >
                          <div className="">
                            <div className="bg-gray-900 relative  bg-opacity-60  h-12 w-12 rounded-full flex items-center justify-center">
                              <CameraIcon
                                className=" flex-shrink-0 h-6 w-6 text-gray-300"
                                aria-hidden="true"
                              />

                              {/* <span className="sr-only"> user photo</span> */}
                              <input
                                type="file"
                                id="user-photo"
                                name="user-photo"
                                accept={"image/*"}
                                onChange={handleLicenseBackImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="relative pt-3">
                        <div className="h-28 w-full object-cover lg:h-44 border rounded-lg border-dashed border-gray-500"></div>
                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                        >
                          <div className="">
                            <div className="bg-gray-300 relative  bg-opacity-30  h-12 w-12 rounded-full flex items-center justify-center">
                              <CameraIcon
                                className=" flex-shrink-0 h-6 w-6 text-gray-500"
                                aria-hidden="true"
                              />

                              {/* <span className="sr-only"> user photo</span> */}
                              <input
                                type="file"
                                id="user-photo"
                                name="user-photo"
                                accept={"image/*"}
                                onChange={handleLicenseBackImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </Fragment>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("experience")}
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
      </form>
    </div>
  );
}
