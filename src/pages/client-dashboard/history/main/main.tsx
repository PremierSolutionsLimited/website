import { Fragment, lazy, Suspense, useState } from "react";
import { useQuery } from "@apollo/client";
import { HISTORY } from "../../../../shared/layout/client-layout/navigation/constants";
import {
  BreadCrumb,
  BreadCrumbProp,
} from "../../../../shared/ui-modules/breadCrumb";
import { usePagination } from "../../../../components/hooks";
import { ContextLoader, DataLoader } from "../../../../shared/loaders";
import { ErrorAlert } from "../../../../components/alert/error";
import { EmptyAlert } from "../../../../components/alert/empty";
import {
  TripHistoryOutputProp,
  TripHistoryInputProp,
  TripHistory,
} from "./types";
import { GET_TRIP_HISTORY } from "../../../../services/graphql/history";
import { useCurrentClient } from "../../../../services/context/currentClient";
import DataView from "../data-view";

const ViewTripComponent = lazy(() => import("../view"));
const UpdateChecklistComponent = lazy(() => import("../update-checklist"));
const RateDriverConponent = lazy(() =>  import("../rate-driver"))

const pages: BreadCrumbProp[] = [{ name: "Trip History ", href: HISTORY }];

const MainComponent = () => {
  const [viewTrip, setViewTrip] = useState<boolean>(false);
  const [rateDriver, setRateDriver] = useState<boolean>(false)
  const [updateChecklist, setUpdateChecklist] = useState<boolean>(false);
  const [selectedTrip, setSelectedTrip] = useState<TripHistory>();
  const { end, setEnd, limit, setLimit, skip, setSkip } = usePagination(5);

  const { currentUser } = useCurrentClient();

  const { data, loading, refetch } = useQuery<
    TripHistoryOutputProp,
    TripHistoryInputProp
  >(GET_TRIP_HISTORY, {
    variables: {
      populate: ["vehicle"],
      filter: {
        client: {
          eq: currentUser?._id as string,
        },
      },
      pagination: {
        skip,
        limit,
      },
      sort: {
        _id: "descending",
      },
    },
  });

  return (
    <Fragment>
      <div className="max-w-7xl  max-h-screen mx-auto px-4 py-5 sm:px-6 sm:py-4 lg:px-8  md:space-x-10">
        <div className={"mt-0 px-6 flex flex-row items-center justify-between"}>
          <div>
            <BreadCrumb pages={pages} />
          </div>
        </div>
        <div className="mt-5">
          {loading ? (
            <Fragment>
              <div className="flex h-24 sm:h-24 md:h-72  flex-col items-center justify-center">
                <DataLoader />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              {data ? (
                <Fragment>
                  {data?.tripsLength === 0 ? (
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
                    <Fragment>
                      <DataView
                        limit={limit}
                        setLimit={setLimit}
                        end={end}
                        setEnd={setEnd}
                        skip={skip}
                        setSkip={setSkip}
                        total={data?.tripsLength}
                        data={data?.trips}
                        onView={(dataFromCard: TripHistory) => {
                          setSelectedTrip(dataFromCard);
                          setViewTrip(!viewTrip);
                        }}
                        onRateDriver={(dataFromCard: TripHistory) => {
                          setSelectedTrip(dataFromCard);
                          setRateDriver(!rateDriver);
                        }}
                        onUpdateChecklist={(dataFromCard: TripHistory) => {
                          setSelectedTrip(dataFromCard);
                          setUpdateChecklist(!updateChecklist);
                        }}
                      />
                    </Fragment>
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
      <Suspense fallback={ContextLoader()}>
        <ViewTripComponent
          show={viewTrip}
          setShow={setViewTrip}
          trip={selectedTrip}
        />
        <RateDriverConponent
          refetch={refetch}
          show={rateDriver}
          setShow={setRateDriver}
          trip={selectedTrip}
        />
        <UpdateChecklistComponent
          refetch={refetch}
          show={updateChecklist}
          setShow={setUpdateChecklist}
          trip={selectedTrip}
        />
      </Suspense>
    </Fragment>
  );
};

export default MainComponent;
