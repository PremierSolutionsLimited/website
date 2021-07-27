import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { HISTORY } from "../../../../shared/layout/client-layout/navigation/constants";
import {
  BreadCrumb,
  BreadCrumbProp,
} from "../../../../shared/ui-modules/breadCrumb";
import { usePagination } from "../../../../components/hooks";
import { DataLoader } from "../../../../shared/loaders";
import { ErrorAlert } from "../../../../components/alert/error";
import { EmptyAlert } from "../../../../components/alert/empty";
import {
  TripHistoryOutputProp,
  TripHistoryInputProp,
  TripHistory,
} from "./types";
import { GET_TRIP_HISTORY } from "../../../../services/graphql/history";
import DataView from "../data-view";

const pages: BreadCrumbProp[] = [{ name: "Trip History ", href: HISTORY }];

const MainComponent = () => {
  const { end, setEnd, limit, setLimit, skip, setSkip } = usePagination(4);
  const { data, loading, refetch } = useQuery<
    TripHistoryOutputProp,
    TripHistoryInputProp
  >(GET_TRIP_HISTORY, {
    variables: {
      populate: ["vehicle"],
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
        <div className={"mt-0 px-0 flex flex-row items-center justify-between"}>
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
                        onView={(dataFromCard: TripHistory) => {}}
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
    </Fragment>
  );
};

export default MainComponent;
