import { Fragment } from "react";
import Header from "../../../../shared/layout";

const MainComponent = () => {
  return (
    <Fragment>
      <Header />
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
        <div>hi dashboard</div>
      </div>
    </Fragment>
  );
};

export default MainComponent;