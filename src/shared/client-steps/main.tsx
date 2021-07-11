import React, { Fragment } from "react";

// personal, other, emergency

const StepsComponent = ({ tab }: { tab: string }) => {
  return (
    <Fragment>
      <nav>
        <ul className="overflow-hidden">
          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "other" || tab === "emergency"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            ></div>

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" ? (
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
                    tab === "other" || tab === "emergency"
                      ? "text-gray-600"
                      : "text-pink-600"
                  } uppercase tracking-wide`}
                >
                  Personal Information
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nostrum voluptate, sed officia blanditiis vero dolore, alias
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "emergency" ? "bg-pink-600" : "bg-gray-300"
              }`}
            ></div>
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "other" ? (
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
                    tab === "personal"
                      ? "text-gray-600"
                      : tab === "other"
                      ? "text-pink-600"
                      : "text-gray-500"
                  } `}
                >
                  Other Information
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nostrum voluptate, sed officia blanditiis vero dolore, alias
                </p>
              </div>
            </div>
          </li>

          <li className="relative">
            {/*Complete Step*/}

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" || tab === "other" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "emergency" ? (
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
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"></span>
                      </span>
                    )}
                  </Fragment>
                )}
                {/*<span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">*/}
                {/*  <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>*/}
                {/*</span>*/}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "social" ? "text-pink-600" : "text-gray-500"
                  } `}
                >
                  Emergency Contacts
                </h3>
                <p className="text-sm font-light leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nostrum voluptate, sed officia blanditiis vero dolore, alias
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
