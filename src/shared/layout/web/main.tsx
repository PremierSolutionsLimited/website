import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import {
  ClientDashBoardNavigation,
  ClientDashBoardNavigationProps,
} from "../navigation/navigation";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <Fragment>
      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden md:flex space-x-10">
        {ClientDashBoardNavigation?.map(
          (
            navigation: ClientDashBoardNavigationProps,
            navigationIdx: number
          ) => (
            <Fragment key={navigationIdx}>
              <Link
                to={navigation?.route}
                className="text-base flex flex-row items-center font-medium text-gray-500 hover:text-gray-900 "
              >
                <div className="mr-2"> {navigation?.name}</div>

                {/* <navigation.icon
                  className="flex-shrink-0 h-5 w-5 "
                  aria-hidden="true"
                /> */}
              </Link>
            </Fragment>
          )
        )}
      </Popover.Group>
    </Fragment>
  );
};

export default MainComponent;
