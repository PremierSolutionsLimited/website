import { Fragment } from "react";
import { FleetCardComponentProp } from "./types";
import CarImage from "../../../../assets/images/hyndai.png";

const Card = ({ data, onView, onUpdate }: FleetCardComponentProp) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="bg-white shadow-md  rounded-2xl p-4">
          <div className="flex-none lg:flex">
            <div className=" h-full w-full lg:h-full lg:w-full   lg:mb-0 mb-3">
              <img
                src={data?.class?.icon || CarImage}
                alt="Just a flower"
                className=" w-full  object-scale-down lg:object-cover  lg:h-full rounded-2xl"
              />
            </div>
            <div className="flex-auto ml-3 justify-evenly py-2 relative">
              <div className="hidden sm:block absolute top-0 right-0 pt-2 pr-4">
                <button
                  type="button"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="">{data?.make}</p>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="">{data?.registrationNumber}</p>
                </div>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div className="flex space-x-3 text-sm font-medium">
                <div className="flex-auto flex space-x-3">
                  <button className="mb-2 md:mb-0 focus:outline-none bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                    <span className="text-green-400 hover:text-green-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Active </span>
                  </button>
                </div>
                <button
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
