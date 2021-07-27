import { Fragment } from "react";
import { HistoryCardComponentProp } from "./types";
import moment from "moment";
import CarImage from "../../../../assets/images/hyndai.png";

const CardComponent = ({ data, onView }: HistoryCardComponentProp) => {
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-none"
                src={data?.vehicle?.class?.icon || CarImage}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {data?.vehicle?.model}
              </div>
              <div className="text-sm text-gray-500">{data?.code}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {data?.vehicle?.registrationNumber}
          </div>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">
          <div className="text-sm text-gray-900">{data.tripType}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {data?.status === "PENDING" ? (
            <Fragment>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                Pending
              </span>
            </Fragment>
          ) : data?.status === "IN_PROGRES" ? (
            <Fragment>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                In Progress
              </span>
            </Fragment>
          ) : data?.status === "COMPLETED" ? (
            <Fragment>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </Fragment>
          ) : (
            <Fragment>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Cancelled
              </span>
            </Fragment>
          )}
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
          {moment(data.startTime).format("MMMM Do, YYYY")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(data.endTime).format("MMMM Do, YYYY")}
        </td>{" "}
        <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
          <div className="text-pink-600 hover:text-pink-700">View</div>
        </td>
      </tr>
    </Fragment>
  );
};

export default CardComponent;
