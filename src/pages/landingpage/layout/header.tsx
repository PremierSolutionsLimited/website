/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useRef, useLayoutEffect } from "react";
import { Transition } from "@headlessui/react";
import { useOutsideListener } from "../../../components/hooks";
import { Link, useHistory } from "react-router-dom";
import SignupDropDown from "./bones/signupDropdown";
import Logo from "../../../assets/images/logo.png";

const MainHeader = () => {
  const { push } = useHistory();
  //for showiung courses dropdown
  const [, setShowCoursesDropdown] = useState<boolean>(false);
  const showCouresesDropdownContainerRef = useRef<any>(null);
  useOutsideListener(showCouresesDropdownContainerRef, () =>
    setShowCoursesDropdown(false)
  );

  //   for showing more dropdown details
  const [, setShowMoreLinksDropdown] = useState<boolean>(false);
  const showMoreLinksDropwdownContainerRef = useRef<any>(null);
  useOutsideListener(showMoreLinksDropwdownContainerRef, () =>
    setShowMoreLinksDropdown(false)
  );

  //for mobile devices
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(false);
  const showMobileDropdownContainerRef = useRef();
  useOutsideListener(showMobileDropdownContainerRef, () =>
    setShowMobileDropdown(false)
  );

  // know your scroll position
  const [initialScrollPositionMoved, setInitialScrollPositionMoved] =
    useState<boolean>(false);
  useLayoutEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        setInitialScrollPositionMoved(true);
      } else setInitialScrollPositionMoved(false);
    };
  }, []);

  //for theming

  return (
    <Fragment>
      <div
        className={`border-b sticky top-0 z-40 border-gray-100 dark:border-transparent  dark:bg-black ${
          initialScrollPositionMoved ? " shadow-none bg-white " : "bg-gray-100"
        }`}
      >
        <div className="relative max-w-7xl mx-auto ">
          <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:justify-start md:space-x-8 ">
            <Link to="/">
              <a href="#" className="flex">
                <span className="sr-only">Logo</span>
                <img
                  className="h-14 rounded-full w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </a>
            </Link>

            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <nav className="flex space-x-10">
                <a
                  href="#offers"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Our Offers
                </a>
                <a
                  href="#whoweare"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Who we are?
                </a>
                <a
                  href="#keyfeatures"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Key Features
                </a>
                <a
                  href="#faq"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  FAQs
                </a>
              </nav>
              <div className="flex items-center md:ml-12">
                <div className="relative inline-block text-left mr-3">
                  <button
                    type="button"
                    onClick={() => push("/client-login")}
                    className="inline-flex justify-center w-full rounded-full border-none  px-8 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                  >
                    Client Login
                  </button>
                </div>
                <SignupDropDown />
              </div>
            </div>
          </div>

          <Transition
            show={showMobileDropdown}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setShowMobileDropdown(false)}
                        type="button"
                        className=" rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-900"
                      >
                        <span className="sr-only">Close menu</span>
                        {/* <!-- Heroicon name: x --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-6">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: chart-bar --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Analytics
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: cursor-click --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Engagement
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: shield-check --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Security
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: view-grid --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Integrations
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: refresh --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Automations
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white">
                          {/* <!-- Heroicon name: document-report --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-white">
                          Reports
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Docs
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Enterprise
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Blog
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Help Center
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Guides
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Security
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white"
                    >
                      Events
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-900 hover:bg-green-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-pink-900 hover:text-pink-900">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Fragment>
  );
};

export default MainHeader;
