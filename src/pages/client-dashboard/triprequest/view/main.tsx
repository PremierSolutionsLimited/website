import React, { Fragment } from "react";
import { ViewTripComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
// import { useLocationName } from "../../../../components/hooks/useLocationName";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";
import moment from "moment";
import CarImage from "../../../../assets/images/bmw.png";
import { TDamageType } from "../../fleets/book/components/damage/main";
import { TValuableType } from "../../fleets/book/components/valuables/main";

const MainComponent: React.FC<ViewTripComponentProp> = ({
  show,
  setShow,
  trip,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 55}
      >
        <div className="p-0  ">
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="text-red-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            style={{ maxHeight: "90vh" }}
            className="bg-white shadow overflow-scroll scrollContainer sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Trip Details
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 relative sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <div className={"col-span-2 ml-5"}>
                    <h1 className={"font-light ml-4"}>From</h1>
                    <span className={"font-medium ml-4"}>
                      {trip?.pickUpLocationName}
                    </span>
                  </div>
                  <div className={"col-span-2 ml-5"}>
                    <h1 className={"font-light ml-4"}>To</h1>
                    <div className="flex justfiy-start space-x-2 flex-wrap ml-4">
                      {trip?.dropOffLocations?.map(
                        (location: any, locationIdx: any) => (
                          <div
                            className="p-1 border border-gray-700 rounded-md"
                            key={locationIdx}
                          >
                            {location}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      "absolute left-2 sm:left-2 md:left-10 top-6 w-0.5"
                    }
                  >
                    <LocationMarkerIcon
                      className={"h-5 -ml-3.5 w-5 text-gold-1"}
                    />
                    <div
                      className={"h-20 rounded-lg -ml-1 w-0.5 -mt-2 bg-gold-1"}
                    />
                    <div
                      className={"h-2 w-2 rounded-full -ml-1.5 bg-gold-1 -mt-1"}
                    ></div>
                  </div>
                  <dd className="-mt-10 hidden sm:hidden md:block text-sm text-gray-900 sm:-mt-10 sm:col-span-1">
                    <img
                      className="h-24 object-cover rounded-lg w-36"
                      src={trip?.vehicle?.images[0] || CarImage}
                      alt=""
                    />
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Trip Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {trip?.tripType?.name || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {trip?.status || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Time Logs
                  </dt>

                  <dd className="sm:col-span-2 flex flex-col">
                    {trip?.timeLogs?.map((timeLog, index) => {
                      return (
                        <div
                          key={index}
                          className="inline-flex justify-start space-x-2 items-center"
                        >
                          <div className="text-sm font-light text-gold-2">
                            {moment(timeLog.startTime).format("MMMM Do YYYY")}
                          </div>
                          {" : "}
                          <div className="mt-1 text-sm text-gray-900">
                            {`${moment(timeLog.startTime).format(
                              "h:mm a"
                            )} - ${moment(timeLog.endTime).format("h:mm a")}`}
                          </div>
                        </div>
                      );
                    })}
                  </dd>
                </div>

                {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Expected End Time
                  </dt>
                  {trip?.expectedEndTime ? (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {moment(trip?.expectedEndTime).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                      </dd>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Trip is yet to start
                      </dd>
                    </Fragment>
                  )}
                </div> */}

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Created on
                  </dt>

                  <Fragment>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {moment(trip?.createdAt).format("MMMM Do YYYY")}
                    </dd>
                  </Fragment>
                </div>

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Vehicle Details and Checklist
                  </dt>

                  <Fragment>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            Registered Vehicle
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.registeredVehicle ? "Yes" : "No"}{" "}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            Road Worthy Sticker
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.validRoadWorthySticker
                              ? "Yes"
                              : "No"}{" "}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            Valid Insurance
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.validInsurance ? "Yes" : "No"}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            {" "}
                            Emergency Triangle
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.emergencyTriangle ? "Yes" : "No"}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            {" "}
                            Fire Extinguisher
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.fireExtinguisher ? "Yes" : "No"}
                          </dd>
                        </div>

                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            Spare Tyre
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.spareTyre ? "Yes" : "No"}
                          </dd>
                        </div>
                        <div className="sm:col-span-1" />
                        <div className="sm:col-span-3">
                          <dt className="text-sm font-light text-gray-700">
                            Damage on Vehicle?
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.damagesOnVehicle
                              ? trip?.checklist?.damagesOnVehicle?.length > 0
                                ? "Yes"
                                : "No"
                              : null}
                          </dd>
                        </div>
                        {trip?.checklist?.damagesOnVehicle &&
                          trip?.checklist?.damagesOnVehicle?.length > 0 && (
                            <div className="sm:col-span-3">
                              <dt className="text-sm font-light text-gray-700">
                                {" "}
                                Damage Description
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {trip?.checklist?.damagesOnVehicle?.map(
                                  (item: TDamageType, itemIdx: number) => (
                                    <Fragment key={itemIdx}>
                                      <dd className="mt-2 mr-2 border rounded-md border-gray-200 p-2 text-sm text-gray-900">
                                        {item?.description}
                                      </dd>
                                    </Fragment>
                                  )
                                )}
                              </dd>
                            </div>
                          )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-light text-gray-700">
                            Valuables In Vehicle?
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {trip?.checklist?.valuablesInVehicle &&
                            trip?.checklist?.valuablesInVehicle?.length > 0
                              ? "Yes"
                              : "No"}
                          </dd>
                        </div>
                        {trip?.checklist?.valuablesInVehicle &&
                          trip?.checklist?.valuablesInVehicle?.length > 0 && (
                            <div className="sm:col-span-3">
                              <dt className="text-sm font-light text-gray-700">
                                {" "}
                                Item Name/Description
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {trip?.checklist?.valuablesInVehicle?.map(
                                  (item: TValuableType, itemIdx: number) => (
                                    <Fragment key={itemIdx}>
                                      <dd className="mt-2 mr-2 border rounded-md border-gray-200 p-2 text-sm text-gray-900">
                                        {item?.description}
                                      </dd>
                                    </Fragment>
                                  )
                                )}
                              </dd>
                            </div>
                          )}
                      </div>
                    </dd>
                  </Fragment>
                </div>

                {trip?.notes && (
                  <Fragment>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Notes
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {trip?.notes || "Not Specified"}
                      </dd>
                    </div>
                  </Fragment>
                )}

                {trip?.driverRated && (
                  <Fragment>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Driver Rating
                      </dt>
                      <ReactStars
                        size={30}
                        value={trip?.driverRating}
                        edit={false}
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Driver Review
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {trip?.driverReview || "Not Specified"}
                      </dd>
                    </div>
                  </Fragment>
                )}
              </dl>
            </div>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
