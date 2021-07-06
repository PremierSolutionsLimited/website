import { Fragment, useState } from "react";
import Header from "../../../shared/layout";
import StepComponent from "../../../shared/steps";

import PersonalComponent from "../components/personal";
import ExperienceComponent from "../components/experience";
import LicenceComponent from "../components/license";
import AvailabiltyComponent from "../components/availabilty";

const MainComponent = () => {
  // for tabs
  const [tab, setTab] = useState<string>("personal");

  // for driver's personal information
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [numberOfChildren, setNumberOfChildren] = useState<string>("");
  const [highestLevelOfEducation, setHighestLevelOfEducation] =
    useState<string>("");
  const [nameOfSchoolCompleted, setNameOfSchoolCompleted] =
    useState<string>("");
  const [yearOfGraduation, setYearOfGraduation] = useState<string>("");
  const [hasSmartPhone, setHasSmartPhone] = useState<boolean | undefined>();
  const [canUseMap, setCanUseMap] = useState<boolean>();
  // for driver's image
  const [file, setFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  // function to handle image upload from user's pc
  const handleImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setImageUrl(URL.createObjectURL(file));
      setFile(file);
    }
  };

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
                  <PersonalComponent
                    setTab={setTab}
                    currentAddress={currentAddress}
                    setCurrentAddress={setCurrentAddress}
                    region={region}
                    setRegion={setRegion}
                    city={city}
                    setCity={setCity}
                    age={age}
                    setAge={setAge}
                    telephone={telephone}
                    setTelephone={setTelephone}
                    maritalStatus={maritalStatus}
                    setMaritalStatus={setMaritalStatus}
                    numberOfChildren={numberOfChildren}
                    setNumberOfChildren={setNumberOfChildren}
                    highestLevelOfEducation={highestLevelOfEducation}
                    setHighestLevelOfEducation={setHighestLevelOfEducation}
                    nameOfSchoolCompleted={nameOfSchoolCompleted}
                    setNameOfSchoolCompleted={setNameOfSchoolCompleted}
                    yearOfGraduation={yearOfGraduation}
                    setYearOfGraduation={setYearOfGraduation}
                    hasSmartPhone={hasSmartPhone}
                    setHasSmartPhone={setHasSmartPhone}
                    canUseMap={canUseMap}
                    setCanUseMap={setCanUseMap}
                    handleImageUpload={handleImageUpload}
                  />
                </Fragment>
              )}
              {tab === "experience" && (
                <Fragment>
                  <ExperienceComponent setTab={setTab} />
                </Fragment>
              )}
              {tab === "license" && (
                <Fragment>
                  <LicenceComponent setTab={setTab} />
                </Fragment>
              )}
              {tab === "avaiabliity" && (
                <Fragment>
                  <AvailabiltyComponent setTab={setTab} />
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
