import React, { Fragment } from "react";
import { PersonalComponentProp } from "./types";
import ProfileImage from "../../../assets/images/male.jpeg";
import toast from "react-hot-toast";

const PersonalComponent: React.FC<PersonalComponentProp> = ({
  setTab,
  handleImageUpload,
  currentAddress,
  setCurrentAddress,
  region,
  setRegion,
  city,
  setCity,
  age,
  setAge,
  telephone,
  setTelephone,
  maritalStatus,
  setMaritalStatus,
  numberOfChildren,
  setNumberOfChildren,
  highestLevelOfEducation,
  setHighestLevelOfEducation,
  nameOfSchoolCompleted,
  setNameOfSchoolCompleted,
  yearOfGraduation,
  setYearOfGraduation,
  hasSmartPhone,
  setHasSmartPhone,
  canUseMap,
  setCanUseMap,
  driverImageUrl,
}) => {
  const handleGotoNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!driverImageUrl) {
      return toast.error("Please add a profile image");
    }
    return setTab("family");
  };
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
                  Current Address
                </label>
                <div className="mt-1.5 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
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
                  Region
                </label>
                <div className="mt-1.5">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={region}
                    required
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
                Photo
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
                City
              </label>
              <input
                type="text"
                name="url"
                id="url"
                required
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                name="url"
                id="url"
                required
                value={age}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAge(e.target.value)
                }
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Telephone
              </label>
              <input
                type="tel"
                name="company"
                id="company"
                required
                min="0"
                maxLength={10}
                value={telephone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (/[a-zA-Z]/.test(e.target.value)) {
                    return setTelephone("");
                  } else {
                    setTelephone(e.target.value);
                  }
                }}
                autoComplete="organization"
                className="mt-1.5 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status
              </label>
              <select
                id="location"
                name="location"
                value={maritalStatus}
                required
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setMaritalStatus(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option>Please Choose</option>
                <option value={"SINGLE"}>Single</option>
                <option value={"MARRIED"}>Married</option>
                <option value={"WIDOWED"}>Widowed</option>
                <option value={"DIVORCED"}>Divored</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                How many children?
              </label>
              <input
                type="number"
                name="company"
                id="company"
                min="0"
                value={numberOfChildren}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberOfChildren(e.target.value)
                }
                required
                autoComplete="organization"
                className="mt-1.5 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Highest Level of Education
              </label>
              <select
                id="location"
                name="location"
                value={highestLevelOfEducation}
                required
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHighestLevelOfEducation(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
              >
                <option>Please Choose</option>
                <option value={"PRIMARY"}>Primary</option>
                <option value={"MIDDLE"}>Middle</option>
                <option value={"SECONDARY"}>Secondary</option>
                <option value={"TERTIARY"}>Tertiary</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Name of School Completed
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                value={nameOfSchoolCompleted}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameOfSchoolCompleted(e.target.value)
                }
                autoComplete="organization"
                className="mt-1.5 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                When did you graduate?
              </label>
              <input
                type="number"
                name="url"
                id="url"
                required
                value={yearOfGraduation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setYearOfGraduation(e.target.value)
                }
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Do you own a smart phone?
              </label>
              <select
                id="location"
                name="location"
                value={hasSmartPhone}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHasSmartPhone(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                required
              >
                <option>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Can you use a phone map ?
              </label>
              <select
                id="location"
                name="location"
                value={canUseMap}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCanUseMap(e.target.value)
                }
                className="mt-1.5 block w-full pl-3 pr-10 py-3 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
                required
              >
                <option>Please Choose</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className="pt-3 divide-y divide-gray-200">
          <div className="mt-2 py-4 px-4 flex justify-end sm:px-6">
            {/* <button
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
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
