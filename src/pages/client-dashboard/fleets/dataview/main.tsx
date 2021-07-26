import { Fragment } from "react";
import { FleetDataViewComponentProp } from "./types";
import { Pagination } from "../../../../shared/ui-modules/pagination";
import CardComponent from "./card";

const DataViewComponent: React.FC<FleetDataViewComponentProp> = ({
  onView,
  onUpdate,
  data,
}) => {
  return (
    <Fragment>
      <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {data.map((fleet: any, historyIdx: number) => (
          <Fragment key={historyIdx}>
            <CardComponent
              data={fleet}
              onView={() => onView(fleet)}
              onUpdate={() => onUpdate(fleet)}
            />
          </Fragment>
        ))}
      </div>
      <Pagination />
    </Fragment>
  );
};

export default DataViewComponent;
