import { HistoryDataViewComponentProp } from "./types";
import { Fragment } from "react";
import { TripHistory } from "../main/types";
import CardComponent from "./card";
import Pagination from "../../../../shared/ui-modules/pagination/pagination";

const DataViewComponent: React.FC<HistoryDataViewComponentProp> = ({
  data,
  onView,
  limit,
  total,
  skip,
  setSkip,
}) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:pr-8 lg:pl-2">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vehicle Class | Trip Code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vehicle Registration No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Trip Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Start Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    End Time
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((history: TripHistory, historyIdx: number) => (
                  <Fragment key={historyIdx}>
                    <CardComponent
                      history={history}
                      onView={() => onView(history)}
                    />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className={"mt-5"}>
            <Pagination
              skip={skip}
              limit={limit}
              setSkip={setSkip}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DataViewComponent.defaultProps = {
  limit: 4,
  skip: 0,
  end: 0,
};

export default DataViewComponent;
