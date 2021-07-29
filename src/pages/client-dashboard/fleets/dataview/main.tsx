import { Fragment } from "react";
import { FleetDataViewComponentProp } from "./types";
import { MyFleet } from "../main/types";
import Pagination from "../../../../shared/ui-modules/pagination/pagination";
import CardComponent from "./card";

const DataViewComponent: React.FC<FleetDataViewComponentProp> = ({
  onView,
  onUpdate,
  limit,
  total,
  skip,
  setSkip,
  data,
}) => {
  return (
    <Fragment>
      <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {data?.map((fleet: MyFleet, fleetIdx: number) => (
          <Fragment key={fleetIdx}>
            <CardComponent
              data={fleet}
              onView={() => onView(fleet)}
              onUpdate={() => onUpdate(fleet)}
            />
          </Fragment>
        ))}
      </div>
      {/* {total > data?.length && ( */}
      <div className={"mt-5"}>
        <Pagination skip={skip} limit={limit} setSkip={setSkip} total={total} />
      </div>
      {/* )} */}
    </Fragment>
  );
};

DataViewComponent.defaultProps = {
  limit: 4,
  skip: 0,
  end: 0,
};
export default DataViewComponent;
