import { Fragment } from "react";
import {
  ScaleIcon,
  CheckCircleIcon,
  StarIcon,
  MapIcon,
} from "@heroicons/react/outline";
import { BarChart } from "../chart";
import { useQuery } from "@apollo/client";
import { GET_SUMMARY } from "../../../../services/graphql/dashboard/query";

const MainComponent = () => {
  const { data, loading } = useQuery(GET_SUMMARY);

  return (
    <Fragment>
      <div className="max-w-7xl mx-auto items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 ">
        <div className="mt-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Overview
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card */}

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Trips Requested
                        </dt>
                        <dd>
                          {loading ? (
                            <Fragment>
                              <div className="text-sm font-light text-gray-700">
                                loading...
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              {data ? (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    {data?.clientSummary?.totalTripRequests}
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    N/A
                                  </div>
                                </Fragment>
                              )}
                            </Fragment>
                          )}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <div className="font-medium text-cyan-700 hover:text-cyan-900">
                      {/* View all */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ScaleIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Trips Completed
                        </dt>
                        <dd>
                          {loading ? (
                            <Fragment>
                              <div className="text-sm font-light text-gray-700">
                                loading...
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              {data ? (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    {data?.clientSummary?.completedTrips}
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    N/A
                                  </div>
                                </Fragment>
                              )}
                            </Fragment>
                          )}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <div className="font-medium text-cyan-700 hover:text-cyan-900">
                      {/* View all */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <MapIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Vehicles in Fleet
                        </dt>
                        <dd>
                          {loading ? (
                            <Fragment>
                              <div className="text-sm font-light text-gray-700">
                                loading...
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              {data ? (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    {data?.clientSummary?.totalVehicles}
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <div className="text-lg font-medium text-gray-900">
                                    N/A
                                  </div>
                                </Fragment>
                              )}
                            </Fragment>
                          )}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <div className="font-medium text-cyan-700 hover:text-cyan-900">
                      {/* View all */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <StarIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Average Rating
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            10
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <div className="font-medium text-cyan-700 hover:text-cyan-900">
                      {/* View all */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "55vh",
              }}
              className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1"
            >
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Monthly Summary of Trips Completed
              </h2>
              <div className="bg-white p-10 overflow-hidden shadow rounded-lg">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
