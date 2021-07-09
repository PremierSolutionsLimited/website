import React from "react";
import { CarImagesComponentProp } from "./types";
import { CameraIcon } from "@heroicons/react/outline";

export default function CarImagesComponent({ setTab }: CarImagesComponentProp) {
  return (
    <div>
      <form className="divide-y divide-gray-200 lg:col-span-9">
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Exterior Image (1)
              </label>
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
                        accept={"image/*"}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Exterior Image (2)
              </label>
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
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Interior Image (1)
              </label>
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
                        accept={"image/*"}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Interior Image (2)
              </label>
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
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("other")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="button"
              className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
