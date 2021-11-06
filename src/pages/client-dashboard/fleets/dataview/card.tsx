import { Fragment } from "react";
import { FleetCardComponentProp } from "./types";
// import NoImage from "../../../../assets/images/no-image.png";
import ReactTooltip from "react-tooltip";
import { truncateText } from "../../../../shared/ui-modules/truncateText";

const Card = ({ data, onView, onUpdate, onBook }: FleetCardComponentProp) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="bg-white shadow-md  rounded-2xl p-4">
          <div className="flex-none lg:flex">
            {data?.images?.length > 0 ? (
              <Fragment>
                <div className="  h-full w-full lg:h-full lg:w-full   lg:mb-0 ">
                  <img
                    src={data?.images[0]}
                    alt="Just a flower"
                    // style={{ maxHeight: "22vh" }}
                    className=" lg:w-4/5 mt-3 h-full w-full sm:w-full sm:h-full object-scale-down lg:object-cover  lg:h-card-height rounded-2xl"
                  />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className=" h-40 w-44 lg:h-40 lg:w-44  flex items-center justify-center  lg:mb-0 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-car"
                    width="94"
                    height="94"
                    viewBox="0 0 24 24"
                    strokeWidth="1.3"
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
                </div>
              </Fragment>
            )}

            <div className="flex-auto ml-3 justify-evenly py-2 relative">
              <div className="hidden sm:block absolute top-0 right-0 pt-2 pr-4">
                <button
                  type="button"
                  data-tip
                  onClick={onBook}
                  data-for="registerTip"
                  className="text-gray-400 hover:text-gray-500 hover:bg-gray-200 bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <ReactTooltip id="registerTip" place="top" effect="solid">
                  Book a trip
                </ReactTooltip>
              </div>
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                  {data?.class?.name}
                </div>

                <h2 className="flex-auto text-lg font-medium">{data?.model}</h2>
              </div>
              <p className="mt-3"></p>
              <div className="flex py-4  text-sm text-gray-500">
                <div className="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="">{truncateText(data?.make, 10)}</p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="">{data?.registrationNumber || "Reg No."}</p>
                </div>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div className="flex space-x-3 text-sm font-medium">
                <div className="flex-auto flex space-x-3">
                  <div className="mb-2 md:mb-0 focus:outline-none bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full  inline-flex items-center space-x-2 ">
                    <div
                      style={{ backgroundColor: data?.color || "transaparent" }}
                      className=" flex-shrink-0 cursor-pointer p-2  rounded-full"
                    />
                    <span className="font-medium text-xs">Color </span>
                  </div>
                </div>
                <button
                  onClick={onView}
                  className="mb-2 md:mb-0 focus:outline-none bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                  type="button"
                  aria-label="like"
                >
                  View
                </button>
                <button
                  onClick={onUpdate}
                  className="mb-2 md:mb-0 focus:outline-none bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                  type="button"
                  aria-label="like"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
