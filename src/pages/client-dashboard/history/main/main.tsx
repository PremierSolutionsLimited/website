import { Fragment } from "react";
import Header from "../../../../shared/layout";
import DataView from "../data-view";

const MainComponent = () => {
  return (
    <Fragment>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 sm:py-4 lg:px-8  md:space-x-10">
        <DataView />
      </div>
    </Fragment>
  );
};

export default MainComponent;
