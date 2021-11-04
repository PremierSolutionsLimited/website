import { Fragment, lazy, useState, Suspense } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../../../components/classnames";
import { userNavigation, ClientDashBoardNavigation } from "./util";
import { ClientDashBoardNavigationProps } from "./types";
import { Link, useLocation } from "react-router-dom";
import { ContextLoader } from "../../../loaders";
import { useCurrentClient } from "../../../../services/context/currentClient";
import ProfileImage from "../../../../assets/images/male.jpeg";
import Logo from "../../../../assets/images/logo.png";

const LogoutModal = lazy(() => import("./logout"));
const ChangePasswordModal = lazy(() => import("./changpassword"));

const TopNav = () => {
  const { pathname } = useLocation();
  const [logout, setLogout] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const curentClient = useCurrentClient();

  return (
    <Fragment>
      <Disclosure as="nav" className="bg-white shadow-sm">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block rounded-full lg:hidden h-12 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden rounded-full lg:block h-16 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {ClientDashBoardNavigation.map(
                      (
                        item: ClientDashBoardNavigationProps,
                        itemIdx: number
                      ) => (
                        <Link
                          key={itemIdx}
                          to={item?.href}
                          className={classNames(
                            item.href === pathname
                              ? "border-pink-500 text-pink-500 hover:text-pink-500 "
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          )}
                          aria-current={
                            item.href === pathname ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={curentClient?.photograph || ProfileImage}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active ? "" : "",
                                    "block px-4 pt-2 text-sm text-gray-700"
                                  )}
                                >
                                  Signed in as
                                </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active ? "" : "",
                                    "block px-4 pb-2 truncate text-xs font-medium text-gray-900"
                                  )}
                                >
                                  {curentClient?.email}
                                </div>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => setShowChangePassword(true)}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                  )}
                                >
                                  Update Password
                                </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  onClick={() => setLogout(true)}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                  )}
                                >
                                  Logout
                                </div>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {ClientDashBoardNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.href === pathname
                        ? "bg-pink-50 border-pink-500 hover:text-pink-500 text-pink-500"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={item.href === pathname ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={curentClient?.photograph || ProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {curentClient?.firstName}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {curentClient?.email}
                    </div>
                  </div>
                  <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Suspense fallback={ContextLoader()}>
        <LogoutModal setShow={setLogout} show={logout} />
        <ChangePasswordModal
          setShow={setShowChangePassword}
          show={showChangePassword}
        />
      </Suspense>
    </Fragment>
  );
};

export { TopNav };
