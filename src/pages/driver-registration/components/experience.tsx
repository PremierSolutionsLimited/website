import { Fragment } from "react";
import { ExperienceComponentProp } from "./types";

const ExperienceComponent: React.FC<ExperienceComponentProp> = ({ setTab }) => {
  return (
    <Fragment>
      <form className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Class of Cars
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Cars
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Years of Experience
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
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
                onClick={() => setTab("license")}
                type="button"
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
