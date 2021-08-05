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
                <img className="h-10 w-auto" src={Logo} alt="Workflow" />
              </a>
            </Link>

            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <nav className="flex space-x-10">
                <a
                  href="#"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Our Offers
                </a>
                <a
                  href="#"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Who we are?
                </a>
                {/* <div
                  className="relative"
                  onMouseEnter={() => setShowCoursesDropdown(true)}
                  onMouseLeave={() => setShowCoursesDropdown(false)}
                >
                  <span className="group rounded-md text-black dark:text-gray-100 inline-flex items-center text-base hover:text-black focus:outline-none">
                    <span>Features</span>

                    <svg
                      className="ml-2 h-5 w-5 text-black group-hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <Transition
                    show={showCoursesDropdown}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="z-20 relative grid gap-6 bg-white dark:bg-gray-600 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white sm:h-12 sm:w-12">
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
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                                Support of all content types.
                              </p>
                              <p className="mt-1 text-sm text-gray-500  dark:text-gray-200">
                                Text, Pictures, videos, files and audio.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white sm:h-12 sm:w-12">
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
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                                Live Interactions
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Messaging and live videos.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white sm:h-12 sm:w-12">
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
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                                Analytics
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Analysis of top fans, engagement tools
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pink-900 text-white sm:h-12 sm:w-12">
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
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                                Payments
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Mobile money, Visa, Paypal
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="p-5 bg-gray-50 dark:bg-gray-900 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 dark:hover:bg-black"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900 dark:text-white">
                                Enterprise
                              </div>
                              <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-green-100 text-green-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 ">
                              Empower your entire team with even more advanced
                              tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div> */}

                <a
                  href="#"
                  className="text-base text-black dark:text-gray-100 hover:text-black"
                >
                  Resources
                </a>

                {/* <div
                  className="relative"
                  onMouseEnter={() => setShowMoreLinksDropdown(true)}
                  onMouseLeave={() => setShowMoreLinksDropdown(false)}
                >
                  <span className="group rounded-md text-black dark:text-gray-100 inline-flex items-center text-base hover:text-black focus:outline-none">
                    <span>More</span>

                    <svg
                      className="ml-2 h-5 w-5 text-black group-hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <Transition
                    show={showMoreLinksDropdown}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <div className="absolute z-10  left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="z-20 relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
                              Get all of your questions answered in our forums
                              or contact support.
                            </p>
                          </a>
                          <a
                            href="#"
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                              Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
                              Learn how to maximize our platform to get the most
                              out of it.
                            </p>
                          </a>

                          <a
                            href="#"
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
                              See what meet-ups and other events we might be
                              planning near you.
                            </p>
                          </a>

                          <a
                            href="#"
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <p className="text-base font-medium text-gray-900 dark:text-pink-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
                              Understand how we take your privacy seriously.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div> */}
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
