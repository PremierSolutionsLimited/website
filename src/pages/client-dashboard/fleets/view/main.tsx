import React, { Fragment } from "react";
import { ViewFleetComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const MainComponent: React.FC<ViewFleetComponentProp> = ({
  show,
  setShow,
  vehicle,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 92 : 55}
      >
        <div className="p-0  ">
          <div className="sm:block absolute top-0 right-0 pt-4 pr-4">
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
            //style={{ maxHeight: "90vh" }}
            className="h-book-trip-height overflow-y-auto scrollContainer sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Vehicle Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This vehicle was created on{" "}
                {moment(vehicle?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Vehicle Model (Colour)
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex flex-row items-center ">
                      <div className="mr-3">
                        {vehicle?.model || "Not Specified"}
                      </div>
                      <div
                        style={{
                          backgroundColor: vehicle?.color || "transaparent",
                        }}
                        className=" flex-shrink-0 cursor-pointer p-2  rounded-full"
                      />
                    </div>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Vehicle Make
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {vehicle?.make || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Registration Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {vehicle?.registrationNumber || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Vehicle Class
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {vehicle?.class?.name || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Transmission Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {vehicle?.transmissionType || "Not Specified"}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
                  <dt className="text-sm font-medium text-gray-500">
                    {vehicle?.images[0] ? (
                      <Fragment>
                        <img
                          src={vehicle?.images[0]}
                          className="h-full w-full max-h-48"
                          alt="vehicle 1"
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="relative block h-48 w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                      </Fragment>
                    )}
                  </dt>
                  <dd className="mt-1  sm:mt-0 sm:col-span-1">
                    {vehicle?.images[1] ? (
                      <Fragment>
                        <img
                          src={vehicle?.images[1]}
                          className="h-full w-full max-h-48"
                          alt="vehicle 1"
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="relative block h-48 w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                      </Fragment>
                    )}
                  </dd>
                  <dd className="mt-1  sm:mt-0 sm:col-span-1">
                    {vehicle?.images[2] ? (
                      <Fragment>
                        <img
                          src={vehicle?.images[2]}
                          className="h-full w-full max-h-48"
                          alt="vehicle 1"
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="relative block h-48 w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                      </Fragment>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
