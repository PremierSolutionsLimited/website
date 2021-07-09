import { Fragment } from "react";
import { SingleEmergencySelectProps } from "../types";

const SingleSelectOption: React.FC<SingleEmergencySelectProps> = () => {
  return (
    <Fragment>
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Name
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
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Relationship
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
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Telephone
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
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
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
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleSelectOption;
