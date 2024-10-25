import { Fragment, lazy, useState, Suspense } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../../../components/classnames";
import { userNavigation, ClientDashBoardNavigation } from "./util";
import { ClientDashBoardNavigationProps } from "./types";
import { Link, useLocation } from "react-router-dom";
import { ContextLoader, DataLoader } from "../../../loaders";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { useHistory } from "react-router-dom";
import ProfileImage from "../../../../assets/images/male.jpeg";
import Logo from "../../../../assets/logo_gold_text.png";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICATIONS } from "../../../../services/graphql/notifications/queries";
import {NOTIFICATIONS} from "../navigation/constants";
import moment from "moment";

const LogoutModal = lazy(() => import("./logout"));
const ChangePasswordModal = lazy(() => import("./changpassword"));

const TopNav = () => {
  const { pathname } = useLocation();
  const [logout, setLogout] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const { currentUser: curentClient } = useCurrentClient();

  const { push } = useHistory();

  const { data: notifications, loading: loadingNotifications } = useQuery(
    GET_NOTIFICATIONS,
    {
      variables: {
        pagination: {
          limit: 10,
        },
      },
    }
  );

  console.log(notifications?.notifications);

  return (
    <Fragment>
      <Disclosure as="nav" className="bg-black shadow-sm">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
              <div className="flex justify-between h-22">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <img
                      className="block rounded-full lg:hidden h-12 w-auto"
                      src={Logo}
                      alt="Workflow"
                      onClick={(e: any) => {
                        e?.preventDefault();
                        push("/");
                      }}
                    />
                    <img
                      className="hidden rounded-full lg:block h-20 w-auto"
                      src={Logo}
                      alt="Workflow"
                      onClick={(e: any) => {
                        e?.preventDefault();
                        push("/");
                      }}
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-10 sm:flex sm:space-x-8">
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
                              ? "border-gold-2 text-gold-2 hover:text-gold-2"
                              : "border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-300",
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
                  <Menu as="div" className="relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-gold-1 p-1 rounded-full text-customBlack-1 hover:text-customBlack-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-1">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
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
                            className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 divide-y divide-gray bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            style={{
                              maxHeight: "65vh",
                            }}
                          >
                            {loadingNotifications ? (
                              <Menu.Item>
                                {({ active }) => <DataLoader />}
                              </Menu.Item>
                            ) : notifications?.notifications?.length > 0 ? (
                              <div className="max-h-96 mb-10 overflow-y-auto divide-y divide-gray">
                                {
                                  notifications?.notifications?.map(
                                    (item: any, itemIdx: number) => (
                                      <div key={itemIdx} className={`${!item?.read && "bg-yellow-50"} pl-4`}>
                                        <Menu.Item>
                                          <div className={` flex space-x-3 py-2`}>
                                            <BellIcon className="h-6 w-6 bg-gold-1 rounded-full p-0.5" />
                                            <div className="flex-1 space-y-1">
                                              <div className="grid grid-cols-4 gap-6">
                                                <h3 className="col-span-3 text-sm font-medium">
                                                  {item?.title}
                                                </h3>
                                                <p className="col-span-1 text-xs text-customBlack-2">
                                                  {moment(item?.createdAt).fromNow()}
                                                </p>
                                              </div>
                                              <p className="text-sm text-gray-500">
                                                {item.body}
                                              </p>
                                            </div>
                                          </div>
                                        </Menu.Item>
                                      </div>
                                    )
                                  )
                                }
                              </div>
                            ) : (
                              <Menu.Item>
                                {({ active }) => <p>No Notifications Yet</p>}
                              </Menu.Item>
                            )}
                            <div className="absolute bottom-0 overflow-hidden w-full">
                              <Link to={NOTIFICATIONS}>
                                <div className="flex justify-center py-2 bg-gray-100 text-customBlack-1 hover:text-gold-2 cursor-pointer">
                                  View All Notifications
                                </div>
                              </Link>
                              {/* <Menu.Item>
                                {({ active }) => (
                                  <div className="bg-gray-100 text-gold-1 flex justify-center py-2">
                                    View All Notifications
                                  </div>
                                )}
                              </Menu.Item> */}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-1">
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
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-2">
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
                        ? "bg-pink-50 border-gold-2 hover:text-gold-2 text-gold-2"
                        : "border-transparent text-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
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
                  <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-2">
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
