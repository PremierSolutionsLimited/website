import React, { Fragment } from "react";
import { TripComponentProp } from "./types";
import {
  getFinalDateWithDurationInput,
  getFinalDateWithDateInput,
} from "../utils/switch";
import { IDurationType } from "../data/types";
import DurationType from "../bones/durationType";
import AgeGroup1 from "../bones/ageGroup1";
import AgeGroup2 from "../bones/ageGroup2";
import moment from "moment";

export default function Trip({
  selectedAgeGroup,
  setSelectedAgeGroup,
  selectedDuration,
  setSelectedDuration,
  setDurationTypeSelected,
  durationTypeSelected,
  duration,
  setDuration,
  tripStartDate,
  setTripStartDate,
  setEndTime,
  endTime,
  setShow,
  setTab,
}: TripComponentProp) {
  return (
    <Fragment>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-12 md:col-span-12">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Trip Start Date
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <input
              required
              type={"datetime-local"}
              id={"dob"}
              value={tripStartDate}
              onChange={(e) => {
                setTripStartDate(e.target.value);
                if (duration && selectedDuration) {
                  getFinalDateWithDateInput(
                    durationTypeSelected,
                    duration,
                    (tripStartDate = e.target.value),
                    setEndTime
                  );
                }
              }}
              className="mt-1 block w-full pl-3 pr-4 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-12 overflow-x-auto scrollContainer">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Duration Type
          </label>
          <div className="mt-1 rounded-none shadow-none ">
            <DurationType
              setDurationTypeSelected={setDurationTypeSelected}
              selected={selectedDuration as IDurationType}
              setSelected={setSelectedDuration}
              duration={duration}
              selectedDate={tripStartDate}
              setEndTime={setEndTime}
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Number of {durationTypeSelected}
          </label>
          <input
            type="text"
            required
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              if (tripStartDate && selectedDuration) {
                getFinalDateWithDurationInput(
                  durationTypeSelected,
                  (duration = e.target.value),
                  tripStartDate,
                  setEndTime
                );
              }
            }}
            className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
            placeholder={`Eg. 3 ${durationTypeSelected}`}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-0 font-medium text-gray-700"
          >
            Request Type
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <select
              id="location"
              name="location"
              required
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              <option>Please Choose</option>
            </select>
          </div>
        </div>

        {endTime && (
          <Fragment>
            <div className="col-span-12 sm:col-span-12 md:col-span-12">
              <label
                htmlFor="url"
                className="block text-sm pb-1 font-medium text-indigo-600"
              >
                Expected End Date :{" "}
                {moment(endTime).format("MMM, Do, YYYY hh:mm A")}
              </label>
            </div>
          </Fragment>
        )}

        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Age Group
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <AgeGroup1
              selected={selectedAgeGroup}
              setSelected={setSelectedAgeGroup}
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-5 font-medium text-gray-700"
          />

          <div className="mt-1 rounded-none shadow-none">
            <AgeGroup2
              selected={selectedAgeGroup}
              setSelected={setSelectedAgeGroup}
            />
          </div>
        </div>
      </div>
      <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2 ">
          <button
            type="button"
            onClick={() => setShow(false)}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-pink-600 text-sm leading-5 font-light text-pink-600 hover:text-pink-600 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Close</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            onClick={() => setTab("origin")}
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-gray focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Next</span>
          </button>
        </span>
      </div>
    </Fragment>
  );
}
