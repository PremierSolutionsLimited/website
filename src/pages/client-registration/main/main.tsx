import { Fragment, useState } from "react";
import { EmergencyInputProp, IGenderPreference } from "../bones/types";
import Header from "../../../shared/layout";
import StepComponent from "../../../shared/client-steps";

import PersonalComponent from "../components/personal";
import OtherInformationComponent from "../components/otherInfo";
import EmergencyComponent from "../components/emergency";

const MainComponent = () => {
  // toggle tab
  const [tab, setTab] = useState<string>("personal");

  // states for personal information
  const [username, setUsername] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [placeOfResdience, setPlaceOfResidence] = useState<string>("");
  const [digitalAddress, setDigitalAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // for clients's image
  const [clientFile, setClientFile] = useState<any>(null);
  const [clientImageUrl, setClientImageUrl] = useState<string>("");

  // states for other components
  const [idType, setIdType] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [idIssueDate, setIdIssueDate] = useState<string>("");
  const [idExpiryDate, setIdExpiryDate] = useState<string>("");
  const [genderPreference, setGenderPreference] = useState<IGenderPreference[]>(
    []
  );

  // for emergency contact
  const [emergencyContact, setEmergencyContact] = useState<
    EmergencyInputProp[]
  >([]);

  // function to handle image upload from client's pc
  const handleImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setClientImageUrl(URL.createObjectURL(e.target.files[0]));
      setClientFile(e.target.files[0]);
    } else {
      setClientImageUrl(URL.createObjectURL(clientFile));
      setClientFile(clientFile);
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
                    username={username}
                    setUsername={setUsername}
                    nationality={nationality}
                    setNationality={setNationality}
                    placeOfResidence={placeOfResdience}
                    setPlaceOfResidence={setPlaceOfResidence}
                    digitalAddress={digitalAddress}
                    setDigitalAddress={setDigitalAddress}
                    phone={phone}
                    setPhone={setPhone}
                    handleImageUpload={handleImageUpload}
                    clientImageUrl={clientImageUrl}
                  />
                </Fragment>
              )}
              {tab === "other" && (
                <Fragment>
                  <OtherInformationComponent
                    setTab={setTab}
                    idType={idType}
                    setIdType={setIdType}
                    idNumber={idNumber}
                    setIdNumber={setIdNumber}
                    idIssueDate={idIssueDate}
                    setIdIssueDate={setIdIssueDate}
                    idExpiryDate={idExpiryDate}
                    setIdExpiryDate={setIdExpiryDate}
                    genderPreference={genderPreference}
                    setGenderPreference={setGenderPreference}
                  />
                </Fragment>
              )}
              {tab === "emergency" && (
                <Fragment>
                  <EmergencyComponent
                    setTab={setTab}
                    emergencyContact={emergencyContact}
                    setEmergencyContact={setEmergencyContact}
                  />
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
