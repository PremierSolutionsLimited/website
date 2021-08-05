import React, { Fragment } from "react";
import { PersonalComponentProp } from "./types";
import ProfileImage from "../../../assets/images/male.jpeg";
import toast from "react-hot-toast";

const PersonalComponent: React.FC<PersonalComponentProp> = ({
  setTab,
  username,
  setUsername,
  nationality,
  setNationality,
  placeOfResidence,
  setPlaceOfResidence,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleImageUpload,
  clientImageUrl,
}) => {
  function handleGoToNextPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!clientImageUrl) {
      return toast.error("Please add a profile image");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    } else {
      setTab("other");
    }
  }
  return (
    <Fragment>
      <form
        onSubmit={handleGoToNextPage}
        className="divide-y divide-gray-200 lg:col-span-9"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-0 flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block pb-3  text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(e.target.value)
                    }
                    required
                    autoComplete="family-name"
                    className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm pb-3  font-medium text-gray-700"
                >
                  Nationalilty
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={nationality}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNationality(e.target.value)
                    }
                    required
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
                      src={clientImageUrl || ProfileImage}
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
                  src={clientImageUrl || ProfileImage}
                  alt=""
                />
                <label
                  htmlFor="user-photo"
                  className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type="file"
                    id="user-photo"
                    name="user-photo"
                    accept={"image/*"}
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12">
              <label
                htmlFor="url"
                className="block text-sm pb-3 font-medium text-gray-700"
              >
                Place of Residence
              </label>
              <input
                type="text"
                name="url"
                id="url"
                required
                value={placeOfResidence}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPlaceOfResidence(e.target.value)
                }
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-3  font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="url"
                id="url"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-3  font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="url"
                id="url"
                value={confirmPassword}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
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
