import { Fragment, useState } from "react";
import Header from "../../../shared/layout";
import StepComponent from "../../../shared/client-steps";

import PersonalComponent from "../components/personal";
import OtherInformationComponent from "../components/otherInfo";
import EmergencyComponent from "../components/emergency";

const MainComponent = () => {
  const [tab, setTab] = useState<string>("personal");
  return (
    <Fragment>
      <Header />
      <div className=" bg-white ">
        <div className="max-w-7xl mx-auto pt-12 pb-0 px-4 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5">
            <div className="sm:col-span-2 ">
              <div className={"mt-5 top-20 sticky overflow-y-none"}>
                <StepComponent tab={tab} />
              </div>
            </div>

            <div className="sm:col-span-3 ml-10 ">
              {tab === "personal" && (
                <Fragment>
                  <PersonalComponent setTab={setTab} />
                </Fragment>
              )}
              {tab === "other" && (
                <Fragment>
                  <OtherInformationComponent setTab={setTab} />
                </Fragment>
              )}
              {tab === "emergency" && (
                <Fragment>
                  <EmergencyComponent setTab={setTab} />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
