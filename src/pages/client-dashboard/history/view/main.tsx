import React, { Fragment } from "react";
import { ViewTripComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { useLocationName } from "../../../../components/hooks/useLocationName";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import moment from "moment";

const MainComponent: React.FC<ViewTripComponentProp> = ({
  show,
  setShow,
  trip,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const [pickup, setPickup] = React.useState(null);
  const [dropoff, setDropoff] = React.useState("");
  const { loading: loadPickup, fetchLocationName: fetchPickup } =
    useLocationName();
  const { loading: loadDropoff, fetchLocationName: fetchDropoff } =
    useLocationName();

  React.useEffect(() => {
    const getLat = async () => {
      return await fetchPickup(
        trip?.pickUpLocation?.coordinates[1],
        trip?.pickUpLocation?.coordinates[0]
      );
    };
    (async () => {
      if (trip) {
        setPickup(await getLat());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const getLat = async () => {
      return await fetchDropoff(
        trip?.dropOffLocation?.coordinates[1],
        trip?.dropOffLocation?.coordinates[0]
      );
    };
    (async () => {
      if (trip) {
        setDropoff(await getLat());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                    <h1 className={"font-light"}>From</h1>
                    <span className={"font-medium"}>
                      {loadPickup ? "loading..." : pickup}
                    </span>
                  </div>
                  <div className={"col-span-2 ml-5"}>
                    <h1 className={"font-light"}>To</h1>
                    <span className={"font-medium"}>
                      {loadDropoff ? "loading..." : dropoff}
                    </span>
                  </div>
                  <div className={"absolute left-0 w-0.5"}>
                    <LocationMarkerIcon
                      className={"h-5 -ml-3.5 w-5 text-blue-900"}
                    />
                    <div
                      className={
                        "h-16 rounded-lg -ml-1 w-0.5 -mt-2 bg-blue-900"
                      }
                    />
                    <div
                      className={
                        "h-2 w-2 rounded-full -ml-1.5 bg-blue-900 -mt-1"
                      }
                    ></div>
                  </div>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Trip Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {trip?.tripType || "Not Specified"}
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
                    Start Time
                  </dt>

                  {trip?.startTime ? (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {moment(trip?.startTime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </dd>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Not Specified
                      </dd>
                    </Fragment>
                  )}
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    End Time
                  </dt>
                  {trip?.endTime ? (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {moment(trip?.endTime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </dd>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Not Specified
                      </dd>
                    </Fragment>
                  )}
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Notes</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {trip?.notes || "Not Specified"}
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
