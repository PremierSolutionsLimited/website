import React, { Fragment, useEffect, useState } from "react";
import { PersonalComponentProp } from "./types";
import ProfileImage from "../../../assets/images/male.jpeg";
import toast from "react-hot-toast";
import { DatePicker } from "antd";
//import moment from "moment";
import { CameraIcon } from "@heroicons/react/outline";
import SelectTypeOfCars from "../bones/typeMultiSelect";

const PersonalComponent: React.FC<PersonalComponentProp> = ({
  setTab,
  handleImageUpload,
  currentAddress,
  setCurrentAddress,
  region,
  setRegion,
  city,
  setCity,
  telephone,
  setTelephone,
  maritalStatus,
  setMaritalStatus,
  numberOfChildren,
  setNumberOfChildren,
  showCropper,
  hasSmartPhone,
  setHasSmartPhone,
  canUseMap,
  setCanUseMap,
  driverImageUrl,
  hasValidLicense,
  setHasValidLicense,
  licenseNumber,
  setLicenseNumber,
  licenseClass,
  setLicenseClass,
  licenseIssueDate,
  setLicenseIssueDate,
  licenseExpiryDate,
  setLicenseExpiryDate,
  yearsOfExperienceOnLicense,
  setYearsOfExperienceOnLicense,
  driverLicenseBackImageUrl,
  driverLicenseFrontImageUrl,
  handleLicenseBackImageUpload,
  handleLicenseFrontImageUpload,
  vehicleType,
  setVehicleType,
  hasHadAccident,
  setHasHadAccident,
  hasBeenArrested,
  setHasBeenArrested,
}) => {
  const [compulsoryFields, setCompulsoryFields] = useState<any>({
    currentAddress,
    region,
    city,
    telephone,
    maritalStatus,
    numberOfChildren,
    hasSmartPhone,
    canUseMap,
    driverImageUrl,
    hasValidLicense,
    vehicleType,
    hasHadAccident,
    hasBeenArrested,
  });

  useEffect(() => {
    if (hasValidLicense ==="yes") {
      setCompulsoryFields({
        ...compulsoryFields,
        licenseNumber,
        licenseClass,
        licenseIssueDate,
        licenseExpiryDate,
        yearsOfExperienceOnLicense,
        driverLicenseBackImageUrl,
        driverLicenseFrontImageUrl,
      });
    } else {
      setCompulsoryFields({
        currentAddress,
        region,
        city,
        telephone,
        maritalStatus,
        numberOfChildren,
        hasSmartPhone,
        canUseMap,
        driverImageUrl,
        hasValidLicense,
        vehicleType,
        hasHadAccident,
        hasBeenArrested,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasValidLicense]);

  //console.log(compulsoryFields);

  // useEffect(() => {
  //   const checkIfNoValue = () => {
  //     let emptyVals = []
  //     for (var key in compulsoryFields) {
  //       console.log(key, compulsoryFields[key]);
  //       if (compulsoryFields[key]) {
  //         continue
  //       }
  //       else emptyVals.push(key)
  //     }
  //     return emptyVals
  //   }
  // },[compulsoryFields])

  const handleGotoNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const emptyFields = checkIfNoValue()
    // console.log(emptyFields)
    if ( !driverImageUrl ) {
      return toast.error("Please upload an image");
    }
    return setTab("education");
  };

  /*const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(0, "days");
    return current > start;
  };*/

  return (
    <Fragment>
      <form
        onSubmit={handleGotoNextPage}
        className="divide-y divide-gray-200 lg:col-span-9"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-0 flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder={"Eg. No 2, Kinbu road - Accra"}
                    value={currentAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCurrentAddress(e.target.value)
                    }
                    autoComplete="family-name"
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Region <span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    value={region}
                    placeholder={"Eg. Greater Accra"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRegion(e.target.value)
                    }
                    autoComplete="family-name"
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
              <p
                className="text-sm font-medium text-gray-700"
                aria-hidden="true"
              >
                Photo <span className="text-red-500">*</span>
              </p>
              <div className="mt-1 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                    aria-hidden="true"
                  >
                    <img
                      className="rounded-full h-full w-full"
                      src={driverImageUrl || ProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 rounded-md shadow-sm">
                    <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                      <label
                        htmlFor="user_photo"
                        className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                      </label>
                      <input
                        id="user_photo"
                        name="user_photo"
                        type="file"
                        accept={"image/*"}
                        onChange={handleImageUpload}
                        className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden relative rounded-full overflow-hidden lg:block">
                <img
                  className="relative rounded-full w-40 h-40"
                  src={driverImageUrl || ProfileImage}
                  alt=""
                />
                <label
                  htmlFor="user-photo"
                  className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type={"file"}
                    accept={"image/*"}
                    onChange={handleImageUpload}
                    id="user-photo"
                    name="user-photo"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                placeholder={"Eg. Dome"}
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status <span className="text-red-500">*</span>
              </label>
              <select
                id="marital-status"
                name="marital-status"
                value={maritalStatus}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setMaritalStatus(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option value={""}>Please Choose</option>
                <option value={"SINGLE"}>Single</option>
                <option value={"MARRIED"}>Married</option>
                <option value={"WIDOWED"}>Widowed</option>
                <option value={"DIVORCED"}>Divorced</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                How many children? <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="children"
                id="children"
                min="0"
                placeholder={"Eg. 3"}
                value={numberOfChildren}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberOfChildren(e.target.value)
                }
                required
                autoComplete="children"
                className="mt-1.5 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Do you own a smart phone? <span className="text-red-500">*</span>
              </label>
              <select
                id="smartphone"
                name="smartphone"
                value={hasSmartPhone}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasSmartPhone(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option value={""}>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Can you use a phone map ? <span className="text-red-500">*</span>
              </label>
              <select
                id="map"
                name="map"
                value={canUseMap}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCanUseMap(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                required={true}
              >
                <option value={""}>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium pb-3 text-gray-700"
              >
                What type of vehicle can you drive?{" "}
                <span className="text-red-500">*</span>
              </label>
              <SelectTypeOfCars
                placeholder={"Click to select car type"}
                type={vehicleType}
                setType={setVehicleType}
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Have you had an accident in the last 5 years ?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="accident"
                name="accident"
                value={hasHadAccident}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasHadAccident(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                required={true}
              >
                <option value={""}>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Have you been arrested before ?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="arrested"
                name="arrested"
                value={hasBeenArrested}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasBeenArrested(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                required={true}
              >
                <option value={""}>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Do you have a valid driver's license ?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="license"
                name="license"
                value={hasValidLicense}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasValidLicense(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"  
              >
                <option value={""}>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            {hasValidLicense === "yes" && (
              <Fragment>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    License Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="license-number"
                    id="license-number"
                    required={true}
                    placeholder={"Eg. 4521789..."}
                    value={licenseNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLicenseNumber(e.target.value)
                    }
                    className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium pb-2 text-gray-700"
                  >
                    Driver's license class{" "}
                    <span className="text-red-500">*</span>
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
                    License Issue Date <span className="text-red-500">*</span>
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
                    License Expiry Date <span className="text-red-500">*</span>
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
                    Years of driving experience on license{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="years_of_experience"
                    id="years_of_experience"
                    autoComplete="years_of_experience"
                    required={true}
                    placeholder={"Eg. 6"}
                    value={yearsOfExperienceOnLicense}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setYearsOfExperienceOnLicense(e.target.value)
                    }
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6" />
                <div className="col-span-12 sm:col-span-12 md:col-span-6">
                  <label
                    htmlFor="licenseUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Driver's License (Front){" "}
                    <span className="text-red-500">*</span>
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
                          htmlFor="license-photo-front"
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
                                id="license-photo-front"
                                name="license-photo-front"
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
                          htmlFor="license-photo-front"
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
                                id="license-photo-front"
                                name="license-photo-front"
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
                    Driver's License (Back){" "}
                    <span className="text-red-500">*</span>
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
                          htmlFor="license-photo-back"
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
                                id="license-photo-back"
                                name="license-photo-back"
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
                          htmlFor="license-photo-back"
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
                                id="license-photo-back"
                                name="license-photo-back"
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
              </Fragment>
            )}
          </div>
        </div>

        <div className="pt-3 divide-y divide-gray-200">
          <div className="mt-2 py-4 px-4 flex justify-end sm:px-6">
            <button
              type="submit"
              className="ml-5 bg-gold-1 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PersonalComponent;
