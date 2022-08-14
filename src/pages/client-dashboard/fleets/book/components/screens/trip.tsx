import React, { Fragment } from "react";
import { TripComponentProp } from "./types";
// import {
//   getFinalDateWithDurationInput,
//   getFinalDateWithDateInput,
// } from "../utils/switch";
//import { IDurationType } from "../data/types";
import { useQuery } from "@apollo/client";
import { GetTypesInput, GetTypesOutput } from "./types";
import { GET_TRIP_TYPE } from "../../../../../../services/graphql/fleet";
import DatePicker from "react-multi-date-picker";
//import DurationType from "../bones/durationType";
import AgeGroup1 from "../bones/ageGroup1";
import AgeGroup2 from "../bones/ageGroup2";
import TimeAndDuration from "../bones/timeAndDuration";
import moment from "moment";
import toast from "react-hot-toast";
import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Trip({
  selectedAgeGroup,
  setSelectedAgeGroup,
  selectedDuration,
  setSelectedDuration,
  setDurationTypeSelected,
  durationTypeSelected,
  isOvernightTrip,
  setIsOvernightTrip,
  isOutOfTown,
  setIsOutOfTown,
  tripDates,
  setTripDates,
  enabledStart,
  enabledDuration,
  setEnabledStart,
  setEnabledDuration,
  duration,
  setDuration,
  startTimes,
  setStartTimes,
  endTimes,
  setEndTimes,
  durations,
  setDurations,
  startTime,
  setStartTime,
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
    if (tripDates?.length < 1 ) {
      return toast.error("Please select at least one trip date");
    }
    if (startTimes?.length < tripDates?.length) {
      return toast.error("You don't have corresponding start time for each trip date");
    }
    // if (durationTypeSelected.trim() === "") {
    //   return toast.error("Please select duration type");
    // }
    // if (duration?.trim() === "") {
    //   return toast.error("Please specify the duration of your trip");
    // }
    if (requestType?.trim() === "") {
      return toast.error("Please specify the request type");
    }
    if (selectedAgeGroup?.length < 1) {
      return toast.error("Please select age group or groups");
    }
    if (isOvernightTrip === undefined) {
      return toast.error("Please specifiy if you'll pay for the driver's accomodation and feeding")
    }
    if (isOutOfTown === undefined) {
      return toast.error("Please specifiy if your trip is out of town")
    }

    setTab("origin");
  };
  // const disabledDate = (current: any) => {
  //   // Can not select yesterday and before
  //   const start = moment()?.subtract(1, "days");
  //   return current < start;
  // };

  console.log(isOvernightTrip);
  // useEffect(() => {
  //   if (requestType !== "61faa7fc8b2c8d00164ada82") {
  //     setIsOvernightTrip(false);
  //   } else setIsOvernightTrip(true);
  // }, [requestType, setIsOvernightTrip]);

  return (
    <Fragment>
      <div className="grid grid-cols-12 gap-3 pb-2 h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto">
        <div className="col-span-12 sm:col-span-12 md:col-span-12">
          <label
            htmlFor="url"
            className="block text-base pb-1 font-medium text-gray-700"
          >
            Trip Start Date(s) <span className={"text-red-600"}>*</span>
          </label>
          <div className="mt-1 rounded-none shadow-none col-span-12">
            <DatePicker
              // value={value}
              multiple={true}
              value={tripDates}
              onChange={setTripDates}
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "30px",
              }}
              containerStyle={{
                width: "100%",
              }}
              minDate={new Date().setDate(new Date().getDate())}
            />
          </div>
        </div>
        <div className="col-span-12 mt-3">
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-4 ml-2 divide-x">
              <div className="col-span-12 md:col-span-6 inline-flex items-center justify-start">
                <Switch.Group as="div" className="flex items-center">
                  <Switch
                    checked={enabledStart}
                    onChange={setEnabledStart}
                    className={classNames(
                      enabledStart ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabledStart ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                  <Switch.Label as="span" className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Fixed Start Time{" "}
                    </span>
                    <span className="text-xs text-gray-500">
                      (Trips Will Start at the Same Time)
                    </span>
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="pl-4 col-span-12 md:col-span-6 inline-flex items-center justify-start">
                <Switch.Group as="div" className="flex items-center">
                  <Switch
                    checked={enabledDuration}
                    onChange={setEnabledDuration}
                    className={classNames(
                      enabledDuration ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabledDuration ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                  <Switch.Label as="span" className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Fixed Durations{" "}
                    </span>
                    <span className="text-xs text-gray-500">
                      (Trips Will Have The Same Durations)
                    </span>
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="col-span-12">
                <TimeAndDuration
                  fixedStart={enabledStart}
                  fixedDuration={enabledDuration}
                  dates={tripDates}
                  setDates={setTripDates}
                  startTimes={startTimes}
                  setStartTimes={setStartTimes}
                  durations={durations}
                  setDurations={setDurations}
                  endTimes={endTimes}
                  setEndTimes={setEndTimes}
                  startTime={startTime}
                  setStartTime={setStartTime}
                  duration={duration}
                  setDuration={setDuration}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-span-12 sm:col-span-12 md:col-span-12 overflow-x-auto scrollContainer">
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
        </div> */}
        <div className="col-span-12">
          <label
            htmlFor="url"
            className="block text-base pb-0 font-medium text-gray-700"
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
            className="block text-base pb-1 font-medium text-gray-700"
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
            className="block text-base pb-5 font-medium text-gray-700"
          />

          <div className="mt-1 rounded-none shadow-none">
            <AgeGroup2
              selected={selectedAgeGroup}
              setSelected={setSelectedAgeGroup}
            />
          </div>
        </div>
        <div className="col-span-12 mt-2">
          <label className="text-base font-medium text-gray-900">
            Accomodation and Feeding
          </label>
          <p className="text-sm leading-5 text-gray-500">
            Would you provide our driver with food and accomodation for
            overnight stays?
          </p>
          <fieldset className="mt-2 pl-2">
            <legend className="sr-only">Accomoadtion Response</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              <div className="flex items-center">
                <input
                  id="yesAccomodation"
                  name="overnight"
                  type="radio"
                  checked={isOvernightTrip === true}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={(e) => setIsOvernightTrip && setIsOvernightTrip(true)}
                />
                <label
                  htmlFor="yesAccomodation"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="noAccomodation"
                  name="overnight"
                  type="radio"
                  checked={isOvernightTrip === false}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={(e) => setIsOvernightTrip && setIsOvernightTrip(false)}
                />
                <label
                  htmlFor="noAccomodation"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="col-span-12 mt-2">
          <label className="text-base font-medium text-gray-900">
            Out of Town Trip
          </label>
          <p className="text-sm leading-5 text-gray-500">
            Will the trips be out of town, where the destination is not within a 50km radius of 
            the origin of the trip?
          </p>
          <fieldset className="mt-2 pl-2">
            <legend className="sr-only">Out of Town Response</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              <div className="flex items-center">
                <input
                  id="yesOut"
                  name="out-of-town"
                  type="radio"
                  checked={isOutOfTown === true}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={(e) => setIsOutOfTown(true)}
                />
                <label
                  htmlFor="yesOut"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="noOut"
                  name="out-of-town"
                  type="radio"
                  checked={isOutOfTown === false}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={(e) => setIsOutOfTown(false)}
                />
                <label
                  htmlFor="noOut"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
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
