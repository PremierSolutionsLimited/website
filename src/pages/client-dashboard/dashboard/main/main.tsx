import { Fragment } from "react";
import {
  ScaleIcon,
  CheckCircleIcon,
  MapIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";
//import { BarChart } from "../chart";
import { useQuery } from "@apollo/client";
import { GET_SUMMARY } from "../../../../services/graphql/dashboard/query";
import { GET_TRIP_HISTORY_LITE } from "../../../../services/graphql/history";
import RecentTrips from "../recent/recentTrips";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { DataLoader } from "../../../../shared/loaders";
import { ErrorAlert } from "../../../../components/alert/error";
import { EmptyAlert } from "../../../../components/alert/empty";

const MainComponent = () => {
  const { currentUser } = useCurrentClient();

  const { data, loading } = useQuery(GET_SUMMARY);
  const {
    data: recentTrips,
    loading: loadingTrips,
    refetch,
  } = useQuery(GET_TRIP_HISTORY_LITE, {
    variables: {
      filter: {
        client: {
          eq: currentUser?._id as string,
        },
      },
      pagination: {
        limit: 3,
      },
      populate: ["vehicle"],
    },
  });

  console.log(recentTrips)

  console.log(recentTrips);
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto items-center py-5 sm:py-4 lg:px-8 ">
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
                      <ShieldExclamationIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Canceled Trips
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
                                    0
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
            </div>
            <div className="flex flex-col space-y-5 mt-10">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Recent Summary of Trips
              </h2>
              {loadingTrips ? (
                <Fragment>
                  <div className="flex h-24 sm:h-24 md:h-72  flex-col items-center justify-center">
                    <DataLoader />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  {recentTrips ? (
                    <Fragment>
                      {recentTrips?.tripsLength === 0 ? (
                        <Fragment>
                          <EmptyAlert
                            page="trip history"
                            // buttonMessage="Add Vehicle"
                            emptyMessage={"You have not had any trips yet"}
                            onClickButton={() => {}}
                            hideButton
                          />
                        </Fragment>
                      ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-5 flex-grow overflow-hidden shadow rounded-lg">
                          {recentTrips?.trips?.map((trip: any) => (
                            <RecentTrips data={trip} key={trip._id} />
                          ))}
                        </div>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <ErrorAlert
                        reload={refetch}
                        canReload
                        model={"trips"}
                        message="An error occured trying to load your trips"
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
