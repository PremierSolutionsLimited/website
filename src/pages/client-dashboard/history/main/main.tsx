import { Fragment } from "react";
import {
  BreadCrumb,
  BreadCrumbProp,
} from "../../../../shared/ui-modules/breadCrumb";
import Header from "../../../../shared/layout";
import DataView from "../data-view";

const pages: BreadCrumbProp[] = [
  { name: "Trip History ", href: "/app/history" },
];

const people = [
  {
    name: "Trip 001",
    title: "Trip type 1",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 002",
    title: "Trip type 2",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 003",
    title: "Trip type 3",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 004",
    title: "Trip type 4",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 005",
    title: "Trip type 5",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 006",
    title: "Trip type 6",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Trip 007",
    title: "Trip type 7",
    department: "Lorem ipsum, dolor sit amet consectetur",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  // More people...
];

const MainComponent = () => {
  return (
    <Fragment>
      <Header />
      <div className="max-w-7xl  max-h-screen mx-auto px-4 py-5 sm:px-6 sm:py-4 lg:px-8  md:space-x-10">
        <div className={"mt-3 px-0 flex flex-row items-center justify-between"}>
          <div>
            <BreadCrumb pages={pages} />
          </div>
          <div className={""}>
            <div className="flex-1 flex items-center">
              <input
                type="search"
                name="email"
                id="email"
                className="shadow-sm w-full py-3 focus:ring-gray-300   border border-gray-300 focus:outline-none block sm:text-sm  rounded-md"
                placeholder="Search "
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <DataView data={people} onView={(dataFromCard) => {}} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
