import { Fragment } from "react";
import { Layout } from "../layout";
import GetStartedComponent from "../components/getStarted";
import UsersComponent from "../components/users";
import FeaturesComponent from "../components/feature";
import NewsLetter from "../components/newsLetter";

const MainComponent = () => {
  return (
    <Fragment>
      <Layout>
        {/* About Us */}
        <div className="relative  bg-white pb-5 sm:pb-5">
          <GetStartedComponent />
          {/* who can use fanbase */}
          <UsersComponent />
        </div>
        {/* features */}
        <FeaturesComponent />
        {/* pricing */}
        {/*  newsletter */}
        <NewsLetter />
        {/* <PricingComponent /> */}
      </Layout>
    </Fragment>
  );
};

export default MainComponent;
