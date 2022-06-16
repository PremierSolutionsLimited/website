import React, { Fragment, useState } from "react";
import { useQuery,useMutation } from "@apollo/client";
import { GET_NOTIFICATIONS } from "../../../../services/graphql/notifications/queries";
import { READ_NOTIFICATION } from "../../../../services/graphql/notifications/mutations";
import { DataLoader } from "../../../../shared/loaders";
import _ from "lodash";

import {
  //ChatAltIcon,
  UserCircleIcon,
  CashIcon,
  CalendarIcon,
  BadgeCheckIcon,
  FastForwardIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import moment from "moment";
import toast from "react-hot-toast";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

const Nofications = () => {
  
  const [selectedNotification, setSelectedNotification] = useState<any>();

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

  const [invokeReadNotification] = useMutation(
    READ_NOTIFICATION
  );

  const handleReadNotification = (notification: any) => {
    invokeReadNotification({
      variables: {
        id: notification.id,
      },
    }).then(() => {
      setSelectedNotification(notification);
    }
    ).catch(() => {
      toast.error("Error reading notification");
    });
  }
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto items-center py-5 sm:py-4 lg:px-8 ">
        <div className="mt-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <main
              className="flex-1 flex overflow-hidden"
              style={{ height: "100vh" }}
            >
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last ml-3"
              >
                <h1 id="primary-heading" className="sr-only">
                  Notifications Details
                </h1>
                {/* Your content */}
                <h2 className="text-2xl font-bold p-3 bg-white text-gray-600 mb-3">
                    Notification Details
                  </h2>
              </section>

              {/* Secondary column (hidden on smaller screens) */}
              <aside className="hidden xl:block border xl:order-first">
                <div className="h-full relative overflow-auto flex flex-col min-w-1/3 border-r border-gray-200">
                  {/* Your content */}
                  <h2 className="text-2xl font-bold p-3 bg-white text-gray-600 mb-3">
                    Notifications Summary
                  </h2>
                  <div className="">
                    <ul className="-mb-8">
                      {loadingNotifications ? (
                        <Fragment>
                          <li className="flex items-center p-5 bg-white">
                            <div className="flex-shrink-0">
                              <DataLoader />
                            </div>
                          </li>
                        </Fragment>
                      ) : notifications?.notifications?.length > 0 ? (
                        <div className="mb-10 overflow-y-auto divide-y divide-gray">
                          {notifications?.notifications?.map(
                            (notification: any, notificationIdx: any) => (
                              <li 
                                key={notificationIdx} 
                                className={`px-5 pt-5 mb-3 ${!notification.read? "bg-yellow-100" : "bg-white" } border-b border-gray-200`}
                                onClick={() => handleReadNotification(notification)}
                                >
                                <div className="relative pb-8">
                                  {notificationIdx !==
                                  notifications?.notifications?.length - 1 ? (
                                    <span
                                      className="absolute top-5 left-5 -ml-px h-14 w-0.5 bg-gray-300"
                                      aria-hidden="true"
                                    />
                                  ) : null}
                                  <div className="relative flex items-start space-x-3">
                                    <>
                                      <div className="relative">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                          {notification?.data?.action ===
                                            "TripAssigned" ||
                                          notification?.data?.action ===
                                            "TripReassigned" ? (
                                            <UserCircleIcon
                                              className="h-10 w-10 text-yellow-400"
                                              aria-hidden="true"
                                            />
                                          ) : notification?.data?.action ===
                                            "TripRequestCreated" ? (
                                            <CalendarIcon
                                              className="h-10 w-10 text-green-600"
                                              aria-hidden="true"
                                            />
                                          ) : notification?.data?.action ===
                                            "TripCompleted" ? (
                                            <BadgeCheckIcon
                                              className="h-10 w-10 text-green-700"
                                              aria-hidden="true"
                                            />
                                          ) : notification?.data?.action ===
                                            "TripStarted" ? (
                                            <FastForwardIcon
                                              className="h-10 w-10 text-teal-800"
                                              aria-hidden="true"
                                            />
                                          ) : notification?.data?.action ===
                                            "TripCancelled" ? (
                                            <XCircleIcon
                                              className="h-10 w-10 text-red-600"
                                              aria-hidden="true"
                                            />
                                          ) : notification?.data?.action ===
                                            "PaymentSuccess" ? (
                                            <CashIcon
                                              className="h-10 w-10 text-green-500"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <BellIcon
                                              className="h-10 w-10 text-gold-2"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </div>
                                      </div>
                                      <div className="min-w-0 mt-2 flex-1">
                                        <div>
                                          <div className="text-sm">
                                            <div className="font-medium text-gray-900 text-md">
                                              {notification?.title}
                                            </div>
                                          </div>
                                          <p className="mt-0.5 text-sm text-gray-500">
                                            Received{" "}
                                            {moment(
                                              notification?.createdAt
                                            ).fromNow()}
                                          </p>
                                        </div>
                                        <div className="mt-2 text-sm text-gray-700">
                                          <p>{_?.truncate(notification?.body, {length:50})}</p>
                                        </div>
                                      </div>
                                    </>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div className="flex-shrink-0">
                            <p className="text-gray-500">
                              No notifications yet.
                            </p>  
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nofications;
