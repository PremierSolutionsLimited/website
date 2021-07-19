import { Fragment } from "react";
import { HistoryCardComponentProp } from "./types";
import moment from "moment";

const CardComponent = ({ data, onView }: HistoryCardComponentProp) => {
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-none" src={data.image} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {data.name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{data.title}</div>
          <div className="text-sm text-gray-500">{data.department}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(data.startTime).format("MMMM Do, YYYY")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(data.endTime).format("MMMM Do, YYYY")}
        </td>{" "}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(data.createdAt).format("MMMM Do, YYYY")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="text-indigo-600 hover:text-indigo-900">View</div>
        </td>
      </tr>
    </Fragment>
  );
};

export default CardComponent;
