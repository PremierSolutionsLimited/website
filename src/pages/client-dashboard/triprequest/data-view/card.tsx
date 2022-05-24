import { Fragment } from "react";
import { HistoryCardComponentProp } from "./types";
import moment from "moment";
// import CarImage from "../../../../assets/images/bmw.png";

const CardComponent = ({
  history,
  onView,
  onUpdateChecklist,
}: HistoryCardComponentProp) => {
  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-14">
            {history?.vehicle?.class?.icon ? (
              <Fragment>
                <img
                  className="h-10 w-14 rounded-none"
                  src={history?.vehicle?.class?.icon}
                  alt=""
                />
              </Fragment>
            ) : (
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-car"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <circle cx="17" cy="17" r="2"></circle>
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                </svg>
              </Fragment>
            )}
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
        <div className="text-sm flex flex-col text-gray-900">
          <span> GHS {history?.quote?.totalCost}</span>
          <span className={`text-sm text-gray-500`}>
            {history?.vehicle?.registrationNumber || "Not Specified"}
          </span>
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
      ) : history?.status === "APPROVED" ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Approved
            </span>
          </td>
        </Fragment>
      ) : history?.status === "PREPARED" ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              Prepared
            </span>
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <Fragment>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Cancelled
              </span>
            </td>
          </Fragment>
        </Fragment>
      )}
      {history?.expectedStartTime ? (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            {moment(history?.expectedStartTime).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            Trip is yet to start
          </td>
        </Fragment>
      )}

      {/* {history?.endTime ? (
        <Fragment>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {moment(history?.endTime).format("MMMM Do YYYY, h:mm:ss a")}
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
            Trip is yet to start
          </td>
        </Fragment>
      )} */}

      <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={onView}
          type="button"
          className="text-gold-1 hover:text-gold-2 hover:underline cursor-pointer focus:outline-none "
        >
          View
        </button>
        {history?.status === "PENDING" && (
          <Fragment>
            <button
              onClick={onUpdateChecklist}
              type="button"
              className="text-gold-1 ml-3 hover:text-gold-2 hover:underline cursor-pointer focus:outline-none "
            >
              Update Checklist
            </button>
          </Fragment>
        )}
      </td>
    </tr>
  );
};

export default CardComponent;
