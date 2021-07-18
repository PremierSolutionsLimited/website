import { Fragment } from "react";

const MainComponent = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:text-gray-700"
        >
          Pricing
        </a>

        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:text-gray-700"
        >
          Docs
        </a>
        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:text-gray-700"
        >
          More
        </a>
      </div>
    </Fragment>
  );
};

export default MainComponent;
