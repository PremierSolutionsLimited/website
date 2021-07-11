import React, { Fragment, useEffect, useState, Suspense } from "react";
import { CreateClientInputProp, CreateClientOutputProp } from "./types";
import { EmergencyInputProp, IGenderPreference } from "../bones/types";
import { getGenderPreference } from "../util/defaultGender";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../../../services/graphql";
import { useAuthProvider } from "../../../services/context";
import { v4 } from "uuid";
import { ContextLoader } from "../../../shared/loaders";
import toast from "react-hot-toast";
import Header from "../../../shared/layout";
import StepComponent from "../../../shared/client-steps";

import PersonalComponent from "../components/personal";
import OtherInformationComponent from "../components/otherInfo";
import EmergencyComponent from "../components/emergency";

let storage: any;
const MainComponent = () => {
  const [, state] = useAuthProvider();
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
  const [uploadingToFirebase, setUploadingToFirebase] =
    useState<boolean>(false);

  // states for other components
  const [idType, setIdType] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [idIssueDate, setIdIssueDate] = useState<string>("");
  const [idExpiryDate, setIdExpiryDate] = useState<string>("");
  const [genderPreference, setGenderPreference] = useState<IGenderPreference[]>(
    []
  );
  const [defaultGenderPreference, setDefaultGenderPreference] = useState<
    string[]
  >([]);

  // for emergency contact
  const [emergencyContact, setEmergencyContact] = useState<
    EmergencyInputProp[]
  >([]);

  useEffect(() => {
    if (genderPreference) {
      setDefaultGenderPreference(getGenderPreference(genderPreference));
    }
  }, [genderPreference, setGenderPreference]);

  const [invokeCreateClient, { loading }] = useMutation<
    CreateClientOutputProp,
    CreateClientInputProp
  >(CREATE_CLIENT);

  const handleHandleCompleteRegistration = (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    // if (!clientFile) return toast.error("Please add a profile image");
    if (clientFile) {
      setUploadingToFirebase(true);
      let fileName = `${v4()}.${clientFile.type.split("/")[1]}`;
      const uploadTask = storage.ref(`/store/${fileName}`).put(clientFile);
      uploadTask.on(
        "state_changed",
        (snapShot: any) => {},
        (err: any) => {
          setUploadingToFirebase(false);

          return toast.error(err?.message);
        },
        () => {
          storage
            .ref("store")
            .child(fileName)
            .getDownloadURL()
            .then((fireBaseUrl: string) => {
              invokeCreateClient({
                variables: {
                  title: state?.userToken?.title,
                  lastName: state?.userToken?.lastName,
                  firstName: state?.userToken?.firstName,
                  otherNames: state?.userToken?.otherNames,
                  gender: state?.userToken?.gender,
                  dob: new Date(state?.userToken?.dob),
                  email: state?.userToken?.email,
                  nationality,
                  residence: placeOfResdience,
                  ghanaPostGps: digitalAddress,
                  defaultPreferredGender: defaultGenderPreference,
                  idType,
                  idNumber,
                  idIssueDate: new Date(idIssueDate),
                  idExpiryDate: new Date(idExpiryDate),
                  emergencyContacts: emergencyContact,
                  photograph: fireBaseUrl,
                  username,
                  phone,
                },
              })
                .then(() => {
                  toast.success("Application completed successfully");
                })
                .catch((e: ApolloError) => {
                  return toast.error(e.graphQLErrors[0].message);
                });
            });
        }
      );
    } else {
      invokeCreateClient({
        variables: {
          title: state?.userToken?.title,
          lastName: state?.userToken?.lastName,
          firstName: state?.userToken?.firstName,
          otherNames: state?.userToken?.otherNames,
          gender: state?.userToken?.gender,
          dob: new Date(state?.userToken?.dob),
          email: state?.userToken?.email,
          nationality,
          residence: placeOfResdience,
          ghanaPostGps: digitalAddress,
          defaultPreferredGender: defaultGenderPreference,
          idType,
          idNumber,
          idIssueDate: new Date(idIssueDate),
          idExpiryDate: new Date(idExpiryDate),
          emergencyContacts: emergencyContact,

          username,
          phone,
        },
      }).then(() => {
        toast.success("Application completed successfully");
      });
    }
  };

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
            <Suspense fallback={ContextLoader()}>
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
                      completingApplication={loading}
                      uploadingToFirebase={uploadingToFirebase}
                      handleHandleCompleteRegistration={
                        handleHandleCompleteRegistration
                      }
                    />
                  </Fragment>
                )}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
