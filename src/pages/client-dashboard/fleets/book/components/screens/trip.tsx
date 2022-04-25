import React, { Fragment, useEffect } from "react";
import { TripComponentProp } from "./types";
import {
  getFinalDateWithDurationInput,
  getFinalDateWithDateInput,
} from "../utils/switch";
import { IDurationType } from "../data/types";
import { useQuery } from "@apollo/client";
import { GetTypesInput, GetTypesOutput } from "./types";
import { GET_TRIP_TYPE } from "../../../../../../services/graphql/fleet";
import { DatePicker } from "antd";
import DurationType from "../bones/durationType";
import AgeGroup1 from "../bones/ageGroup1";
import AgeGroup2 from "../bones/ageGroup2";
import moment from "moment";
import toast from "react-hot-toast";

export default function Trip({
  selectedAgeGroup,
  setSelectedAgeGroup,
  selectedDuration,
  setSelectedDuration,
  setDurationTypeSelected,
  durationTypeSelected,
  duration,
  setDuration,
  isOvernightTrip,
  setIsOvernightTrip,
  tripStartDate,
  setTripStartDate,
  setEndTime,
  endTime,
  setShow,
  setTab,
  requestType,
  setRequestType,
}: TripComponentProp) {
  const { data, loading } = useQuery<GetTypesOutput, GetTypesInput>(
    GET_TRIP_TYPE
  );

  const handleNext = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!tripStartDate) {
      return toast.error("Please select trip start date");
    }
    if (durationTypeSelected.trim() === "") {
      return toast.error("Please select duration type");
    }
    if (duration?.trim() === "") {
      return toast.error("Please specify the duration of your trip");
    }
    if (requestType?.trim() === "") {
      return toast.error("Please specify the request type");
    }
    if (selectedAgeGroup?.length < 1) {
      return toast.error("Please select age group or groups");
    }

    setTab("origin");
  };
  const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(1, "days");
    return current < start;
  };

  console.log(isOvernightTrip)
  useEffect(() => {
    if (requestType !== "61faa7fc8b2c8d00164ada82") {
      setIsOvernightTrip(false);
    }
    else setIsOvernightTrip(true)
  },[requestType, setIsOvernightTrip])

  return (
    <Fragment>
      <div className="grid grid-cols-12 gap-3  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto">
        <div className="col-span-12 sm:col-span-12 md:col-span-12">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Trip Start Date <span className={"text-red-600"}>*</span>
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <DatePicker
              // value={value}
              disabledDate={disabledDate}
              onChange={(data: any) => {
                setTripStartDate(data);
                if (duration && selectedDuration) {
                  getFinalDateWithDateInput(
                    durationTypeSelected,
                    duration,
                    (tripStartDate = data),
                    setEndTime
                  );
                }
              }}
              showTime
              className={"border w-full"}
            />

            {/* <input
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
              className="mt-1 block w-full pl-3 pr-4 py-2 text-base border-gray-300 focus:outline-none focus:ring-gold-1 focus:border-gold-1 sm:text-sm rounded-md"
            /> */}
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-12 overflow-x-auto scrollContainer">
          <label
            htmlFor="url"
            className="block text-sm pb-1 font-medium text-gray-700"
          >
            Duration Type <span className={"text-red-600"}>*</span>
          </label>
          <div className="mt-1 rounded-none shadow-none">
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
            Number of {durationTypeSelected}{" "}
            <span className={"text-red-600"}>*</span>
          </label>
          <input
            type="number"
            required
            min="0"
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
            className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
            placeholder={`Eg. 3 ${durationTypeSelected}`}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6">
          <label
            htmlFor="url"
            className="block text-sm pb-0 font-medium text-gray-700"
          >
            Request Type <span className={"text-red-600"}>*</span>
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <select
              id="location"
              name="location"
              required
              title={"Select request type"}
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gold-1 focus:border-gold-1 sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              <option>Please Choose</option>
              {loading ? (
                <Fragment>
                  <option>Loading ...</option>
                </Fragment>
              ) : (
                <Fragment>
                  {data ? (
                    <Fragment>
                      {data?.tripTypesLength === 0 ? (
                        <Fragment>
                          <option>No request type found</option>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {data?.tripTypes?.map(
                            (
                              item: {
                                name: string;
                                _id: string;
                              },
                              itemIdx: number
                            ) => (
                              <Fragment key={itemIdx}>
                                <option value={item?._id}>{item?.name}</option>
                              </Fragment>
                            )
                          )}
                        </Fragment>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <option>An error occured</option>
                    </Fragment>
                  )}
                </Fragment>
              )}
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
            Age Group <span className={"text-red-600"}>*</span>
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
            className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Close</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Next</span>
          </button>
        </span>
      </div>
    </Fragment>
  );
}
