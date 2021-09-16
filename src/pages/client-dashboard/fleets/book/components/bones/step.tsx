import React, { Fragment } from "react";

// trip, origin, destination , checklist , preview

const StepsComponent = ({ tab }: { tab: string }) => {
  return (
    <Fragment>
      <nav>
        <ul className="overflow-hidden">
          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "origin" ||
                tab === "destination" ||
                tab === "checklist" ||
                tab === "preview"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            ></div>

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "trip" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                    <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                  </span>
                ) : (
                  <Fragment>
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full group-hover:bg-pink-700 group-focus:bg-pink-700 transition ease-in-out duration-150">
                      <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                    </span>
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium ${
                    tab === "origin" ||
                    tab === "destination" ||
                    tab === "checklist" ||
                    tab === "preview"
                      ? "text-gray-600"
                      : "text-pink-600"
                  } uppercase tracking-wide`}
                >
                  Trip Information
                </h3>
                <p className="text-sm flex items-start font-light leading-5 text-gray-500">
                  Provide basic information about your trip so that we can set
                  you up with an appropriate driver.
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "destination" ||
                tab === "checklist" ||
                tab === "preview"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            ></div>
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "trip" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "origin" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full group-hover:bg-pink-700 group-focus:bg-pink-700 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          />
                        </svg>
                      </span>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "trip"
                      ? "text-gray-600"
                      : tab === "origin"
                      ? "text-pink-600"
                      : "text-gray-500"
                  } `}
                >
                  Location Origin
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Enter or select your pickup location of your trip
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "checklist" || tab === "preview"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            ></div>
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "origin" || tab === "trip" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "destination" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full group-hover:bg-pink-700 group-focus:bg-pink-700 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          />
                        </svg>
                      </span>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "origin"
                      ? "text-gray-600"
                      : tab === "destination"
                      ? "text-pink-600"
                      : "text-gray-500"
                  } `}
                >
                  Location Destination
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Enter or select your drop off location of your trip
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "preview" ? "bg-pink-600" : "bg-gray-300"
              }`}
            ></div>
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "origin" || tab === "trip" || tab === "destination" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "checklist" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full group-hover:bg-pink-700 group-focus:bg-pink-700 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          />
                        </svg>
                      </span>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "checklist" ? "text-pink-600" : "text-gray-500"
                  } `}
                >
                  Vehicle CheckList
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Provide your vehicle checklist so our driver can verify.
                </p>
              </div>
            </div>
          </li>
          <li className="relative">
            {/*Complete Step*/}

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "trip" ||
                tab === "origin" ||
                tab === "destination" ||
                tab === "checklist" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "preview" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full group-hover:bg-pink-700 group-focus:bg-pink-700 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                      </span>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "preview" ? "text-pink-600" : "text-gray-500"
                  } `}
                >
                  Preview
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Confirm your trip details and pay.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default StepsComponent;
