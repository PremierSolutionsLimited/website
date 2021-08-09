import React, { Fragment } from "react";
import DurationType from "../bones/durationType";

export default function Origin() {
  return (
    <Fragment>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Trip Start Date
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <input
              required
              type={"date"}
              id={"dob"}
              className="mt-1 block w-full pl-3 pr-4 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Request Type
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <select
              id="location"
              name="location"
              required
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              <option>Please Choose</option>
            </select>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Duration Type
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <DurationType />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
