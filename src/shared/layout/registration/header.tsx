/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { useRegistrationProvider } from "../../../services/context";
import Logo from "../../../assets/images/logo.png";

export default function Header() {
  const [{ endRegistration }, registrationState] = useRegistrationProvider();
  const { push } = useHistory();

  return (
    <Popover className=" bg-white z-30 top-0 sticky overflow-y-none">
      {({ open }) => (
        <>
          <div
            className="absolute inset-0 shadow z-30 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="#" className="flex">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <div className="text-gray-700 font-medium text-lg">
                  Hi {registrationState?.status?.firstName}, complete your
                  registration
                </div>

                <div className="flex items-center md:ml-12">
                  {registrationState?.status?.typeOfRegistration ===
                    "Client" && (
                    <Fragment>
                      <button
                        type="button"
                        onClick={() => {
                          endRegistration();
                          push("/client-login");
                        }}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Sign in
                      </button>
                    </Fragment>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      endRegistration();
                      push("/");
                    }}
                    className="ml-8 inline-flex focus:outline-none items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                  >
                    End Registration
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 ">
                  <div className="grid grid-cols-2 gap-4 ">
                    <div className="rounded-md col-span-2  text-base font-medium text-gray-900 hover:text-gray-700">
                      Hi {registrationState?.status?.firstName}, complete your
                      registration
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        endRegistration();
                        push("/");
                      }}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                    >
                      End Registration
                    </button>

                    {registrationState?.status?.typeOfRegistration ===
                      "Client" && (
                      <Fragment>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?{" "}
                          <button
                            type="button"
                            onClick={() => {
                              endRegistration();
                              push("/client-login");
                            }}
                            className="text-pink-600 hover:text-pink-500"
                          >
                            Sign in
                          </button>
                        </p>
                      </Fragment>
                    )}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
