/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useRef, useLayoutEffect } from "react";
import { useOutsideListener } from "../../../components/hooks";
import { Link, useHistory } from "react-router-dom";
import SignupDropDown from "./bones/signupDropdown";
import Logo from "../../../assets/PC_logo_no_bg.png";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
  IdentificationIcon,
  LightBulbIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Our Offers", href: "#offers", icon: HeartIcon },
  { name: "Who We Are", href: "#whoweare", icon: IdentificationIcon },
  { name: "Key Features", href: "#keyfeatures", icon: LightBulbIcon },
  { name: "FAQs", href: "#faq", icon: QuestionMarkCircleIcon },
  //{ name: "Contact Us", href: "#footer", icon: MailIcon },
];

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
  const [, setShowMobileDropdown] = useState<boolean>(false);
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
        className={`border-b sticky top-0 z-20 dark:border-transparent  dark:bg-black ${
          initialScrollPositionMoved
            ? "bg-black text-gold-2  border-gold-2"
            : " shadow-none bg-white  border-gray-100 text-black"
        }`}
      >
        <Popover>
          <div className="relative max-w-7xl mx-auto ">
            <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:justify-start md:space-x-8 ">
              <Link to="/">
                <a href="#" className="flex">
                  <span className="sr-only">Logo</span>
                  <img className="h-20 w-auto" src={Logo} alt="Workflow" />
                </a>
              </Link>
              <div className="-my-2 md:hidden border-gray-400">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gold-3 hover:text-gold-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-3">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`text-base font-medium ${initialScrollPositionMoved ? "text-gold-2" :"text-gray-500"} hover:text-gold-3`}
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Group>
                <div className="flex items-center md:ml-12">
                  <div className="relative inline-block text-left mr-3">
                    <button
                      type="button"
                      onClick={() => push("/client-login")}
                      className="inline-flex justify-center w-full rounded-full border-none  px-8 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gold-1"
                    >
                      Client Login
                    </button>
                  </div>
                  <SignupDropDown />
                </div>
              </div>
            </div>

            <Transition
              //show={showMobileDropdown}
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
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-16 w-auto"
                          src={Logo}
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-gold-2"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:ml-12 pb-5">
                    <div className="relative inline-block text-left mr-3">
                      <button
                        type="button"
                        onClick={() => push("/client-login")}
                        className="inline-flex justify-center w-full rounded-full border-2 border-gray-500  px-8 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gold-1"
                      >
                        Client Login
                      </button>
                    </div>
                    <SignupDropDown />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </Popover>
      </div>
    </Fragment>
  );
};

export default MainHeader;
