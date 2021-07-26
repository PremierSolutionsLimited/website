import { useQuery } from "@apollo/client";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Fragment, lazy, Suspense, useState } from "react";
import { usePagination } from "../../../../components/hooks";
import { MY_FLEET } from "../../../../shared/layout/client-layout/navigation/constants";
import { ContextLoader, DataLoader } from "../../../../shared/loaders";
import {
  BreadCrumb,
  BreadCrumbProp,
} from "../../../../shared/ui-modules/breadCrumb";
import { MyFleetOutputProp, MyFleetInputProp, MyFleet } from "./types";
import { GET_MY_FLEET } from "../../../../services/graphql/fleet";
import { ErrorAlert } from "../../../../components/alert/error";
import { EmptyAlert } from "../../../../components/alert/empty";
import DataView from "../dataview";

const AddCarComponent = lazy(() => import("../add"));
const UpdateCarComponent = lazy(() => import("../update"));

const pages: BreadCrumbProp[] = [{ name: "My Fleet ", href: MY_FLEET }];

const MainComponent = () => {
  const { end, setEnd, limit, setLimit, skip, setSkip } = usePagination(4);
  const { data, loading, refetch } = useQuery<
    MyFleetOutputProp,
    MyFleetInputProp
  >(GET_MY_FLEET);

  const [showAddCar, setShowAddCar] = useState<boolean>(false);
  const [showUpdateCar, setShowUpdateCar] = useState<boolean>(false);
  return (
    <Fragment>
      <div className="max-w-7xl  max-h-screen mx-auto px-4 py-5 sm:px-6 sm:py-4 lg:px-8  md:space-x-10">
        <div className={"mt-0 px-6 flex flex-row items-center justify-between"}>
          <div>
            <BreadCrumb pages={pages} />
          </div>
          {(data?.vehiclesLength as number) > 0 && (
            <Fragment>
              <div>
                <button
                  type="button"
                  onClick={() => setShowAddCar(!showAddCar)}
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
                >
                  Add New Car
                  <PlusCircleIcon
                    className=" ml-1 h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Fragment>
          )}
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
                  {data?.vehiclesLength === 0 ? (
                    <Fragment>
                      <EmptyAlert
                        page="vehicles"
                        buttonMessage="Add Vehicle"
                        emptyMessage={"Get started by adding a new vehicle"}
                        onClickButton={() => {
                          setShowAddCar(true);
                        }}
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
                        total={data?.vehiclesLength}
                        data={data?.vehicles}
                        onView={(dataFromCard: MyFleet) => {}}
                        onUpdate={(dataFromCard: MyFleet) => {
                          setShowUpdateCar(!showUpdateCar);
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
                    model={"vehicles"}
                    message="An error occured trying to load your vehicles"
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </div>
      <Suspense fallback={ContextLoader()}>
        <AddCarComponent
          show={showAddCar}
          setShow={setShowAddCar}
          refetch={refetch}
        />
        <UpdateCarComponent show={showUpdateCar} setShow={setShowUpdateCar} />
      </Suspense>
    </Fragment>
  );
};

export default MainComponent;
