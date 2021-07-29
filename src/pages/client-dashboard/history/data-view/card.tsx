import { Fragment } from "react";
import { HistoryCardComponentProp } from "./types";
import moment from "moment";
import CarImage from "../../../../assets/images/bmw.png";

const CardComponent = ({ history, onView }: HistoryCardComponentProp) => {
  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-14">
            <img
              className="h-10 w-14 rounded-none"
              src={history?.vehicle?.class?.icon || CarImage}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {history?.vehicle?.model}
            </div>
            <div className="text-sm text-gray-500">#{history?.code}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {history?.vehicle?.registrationNumber || "Not Specified"}
        </div>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {history?.tripType?.name || "Not Specified"}
        </div>
      </td>

      {history?.status === "PENDING" ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
              Pending
            </span>
          </td>
        </Fragment>
      ) : history?.status === "IN_PROGRES" ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
              In Progress
            </span>
          </td>
        </Fragment>
      ) : history?.status === "COMPLETED" ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Completed
            </span>
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Cancelled
            </span>
          </td>
        </Fragment>
      )}
      {history?.startTime ? (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            {moment(history?.startTime).format("MMMM Do YYYY, h:mm:ss a")}
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            Not Specifed
          </td>
        </Fragment>
      )}

      {history?.endTime ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {moment(history?.endTime).format("MMMM Do YYYY, h:mm:ss a")}
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            Not Specifed
          </td>
        </Fragment>
      )}

      <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={onView}
          type="button"
          className="text-pink-600 hover:text-pink-700 cursor-pointer focus:outline-none "
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default CardComponent;
