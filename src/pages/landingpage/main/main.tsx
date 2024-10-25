import { Fragment, useEffect } from "react";
import { Layout } from "../layout";
import GetStartedComponent from "../components/getStarted";
import UsersComponent from "../components/users";
import FeaturesComponent from "../components/feature";
//import NewsLetter from "../components/newsLetter";
import FrequentlyAsked from "../components/faqs";
import {Footer} from "../layout/footer";

const MainComponent = () => {
  useEffect(() => {
    document.title = "Premier Chauffeur";
  }, []);
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
        <FrequentlyAsked />
        {/* <NewsLetter /> */}
        {/* <PricingComponent /> */}
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default MainComponent;
