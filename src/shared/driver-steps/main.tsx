import React, { Fragment } from "react";
interface Props {
  tab: string;
}

// personal, education, emergency , card ,experience, license , avaiabliity

const StepsComponent = ({ tab }: Props) => {
  return (
    <Fragment>
      <nav>
        <ul className="overflow-hidden">
          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "experience" ||
                tab === "education" ||
                tab === "emergency" ||
                tab === "card" ||
                tab === "license" ||
                tab === "avaiabliity"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            />

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-pink-600 rounded-full">
                    <span className="h-2.5 w-2.5 bg-pink-600 rounded-full"/>
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
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium ${
                    tab === "experience" ||
                    tab === "education" ||    
                    tab === "license" ||
                    tab === "emergency" ||
                    tab === "education" ||
                    tab === "card" ||
                    tab === "avaiabliity"
                      ? "text-gray-600"
                      : "text-pink-600"
                  } uppercase tracking-wide`}
                >
                  Personal Information
                </h3>
                <p className="text-sm  font-light leading-5 text-gray-500">
                  Provide information concerning yourself, your immediate education
                  and your socio-economic life.
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/*personal Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "emergency" ||
                //tab === "education" ||    
                tab === "experience" ||
                tab === "card" ||
                tab === "avaiabliity" ||
                tab === "license"
                  ? "bg-pink-600"
                  : "bg-gray-300"
              }`}
            />
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "education" ? (
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
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
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
                      : tab === "education"
                      ? "text-pink-600"
                      : "text-gray-500"
                  } `}
                >
                  Education History
                </h3>
                <p className="text-sm leading-5 font-light text-gray-500">
                  Provide information about your education and academic qualifications.
                </p>
              </div>
            </div>
          </li>
          <li className="relative">
            {/*personal Step*/}
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {
                tab === "education" ||
                tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "experience" ? (
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
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
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
                    tab === "card"
                      ? "text-gray-600"
                      : tab === "experience"
                      ? "text-pink-600"
                      : "text-gray-500"
                  } `}
                >
                  Experience
                </h3>
                <p className="text-sm leading-5 font-light text-gray-500">
                  Provide information on your driving experience. Especially
                  relevant is information concerning your previous and current
                  employment if any.
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
