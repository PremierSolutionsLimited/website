import { PlusCircleIcon } from "@heroicons/react/outline";
import { Fragment, lazy, Suspense, useState } from "react";
import { usePagination } from "../../../../components/hooks";
import { MY_FLEET } from "../../../../shared/layout/client-layout/navigation/constants";
import { ContextLoader } from "../../../../shared/loaders";
import {
  BreadCrumb,
  BreadCrumbProp,
} from "../../../../shared/ui-modules/breadCrumb";
import DataView from "../dataview";

const AddCarComponent = lazy(() => import("../add"));
const UpdateCarComponent = lazy(() => import("../update"));

const pages: BreadCrumbProp[] = [{ name: "My Fleet ", href: MY_FLEET }];

const data: any[] = ["1", "43", "32", "23"];

const MainComponent = () => {
  const { end, setEnd, limit, setLimit, skip, setSkip } = usePagination(4);

  const [showAddCar, setShowAddCar] = useState<boolean>(false);
  const [showUpdateCar, setShowUpdateCar] = useState<boolean>(false);
  return (
    <Fragment>
      <div className="max-w-7xl  max-h-screen mx-auto px-4 py-5 sm:px-6 sm:py-4 lg:px-8  md:space-x-10">
        <div className={"mt-0 px-6 flex flex-row items-center justify-between"}>
          <div>
            <BreadCrumb pages={pages} />
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowAddCar(!showAddCar)}
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
            >
              Add New Car
              <PlusCircleIcon className=" ml-1 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-5">
          <DataView
            limit={limit}
            setLimit={setLimit}
            end={end}
            setEnd={setEnd}
            skip={skip}
            setSkip={setSkip}
            total={200}
            data={data}
            onView={(dataFromCard) => {}}
            onUpdate={(dataFromCard) => {
              setShowUpdateCar(!showUpdateCar);
            }}
          />
        </div>
      </div>
      <Suspense fallback={ContextLoader()}>
        <AddCarComponent
          show={showAddCar}
          setShow={setShowAddCar}
          refetch={() => null}
        />
        <UpdateCarComponent show={showUpdateCar} setShow={setShowUpdateCar} />
      </Suspense>
    </Fragment>
  );
};

export default MainComponent;
