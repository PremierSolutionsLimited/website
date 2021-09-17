import React, { Fragment, useEffect, useState, Suspense, lazy } from "react";
import { CreateClientInputProp, CreateClientOutputProp } from "./types";
import { EmergencyInputProp, IGenderPreference } from "../bones/types";
import { getGenderPreference } from "../util/defaultGender";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../../../services/graphql/applications";
import { useRegistrationProvider } from "../../../services/context";
import { v4 } from "uuid";
import { CustomContextLoader } from "../../../shared/loaders";
import { storage } from "../../../services/firebase";
import toast from "react-hot-toast";
import Header from "../../../shared/layout/registration";
import StepComponent from "../../../shared/client-steps";

const PersonalComponent = lazy(() => import("../components/personal"));
const OtherInformationComponent = lazy(() => import("../components/otherInfo"));
const EmergencyComponent = lazy(() => import("../components/emergency"));
const SucessComponent = lazy(() => import("../success"));

const MainComponent = () => {
  useEffect(() => {
    document.title = "Client Registration | Hire A Driver";
  }, []);

  const [, registrationState] = useRegistrationProvider();
  // toggle tab
  const [tab, setTab] = useState<string>("personal");

  // states for personal information
  const [username, setUsername] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [placeOfResdience, setPlaceOfResidence] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // for clients's image
  const [clientFile, setClientFile] = useState<any>(null);
  const [clientImageUrl, setClientImageUrl] = useState<string>("");
  const [uploadingToFirebase, setUploadingToFirebase] =
    useState<boolean>(false);

  // states for other components
  const [digitalAddress, setDigitalAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
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

  const [showSuccessComponent, setShowSucessComponent] =
    useState<boolean>(false);
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

    if (clientFile) {
      setUploadingToFirebase(true);
      let fileName = `${v4()}.${clientFile.type.split("/")[1]}`;
      const uploadTask = storage.ref(`/clients/${fileName}`).put(clientFile);
      uploadTask.on(
        "state_changed",
        (snapShot: any) => {},
        (err: any) => {
          setUploadingToFirebase(false);
          return toast.error(err?.message);
        },
        () => {
          storage
            .ref("clients")
            .child(fileName)
            .getDownloadURL()
            .then((fireBaseUrl: string) => {
              invokeCreateClient({
                variables: {
                  title: registrationState?.status?.title,
                  lastName: registrationState?.status?.lastName,
                  firstName: registrationState?.status?.firstName,
                  otherNames: registrationState?.status?.otherNames,
                  gender: registrationState?.status?.gender,
                  dob: new Date(registrationState?.status?.dob),
                  email: registrationState?.status?.email,
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
                  password,
                },
              })
                .then(() => {
                  // toast.success("Application completed successfully");
                  setShowSucessComponent(!showSuccessComponent);
                  setUploadingToFirebase(false);
                })
                .catch((e: ApolloError) => {
                  console.log("error", e);
                  return toast.error(e.graphQLErrors[0].message);
                });
            });
        }
      );
    } else {
      invokeCreateClient({
        variables: {
          title: registrationState?.status?.title,
          lastName: registrationState?.status?.lastName,
          firstName: registrationState?.status?.firstName,
          otherNames: registrationState?.status?.otherNames,
          gender: registrationState?.status?.gender,
          dob: new Date(registrationState?.status?.dob),
          email: registrationState?.status?.email,
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
          password,
        },
      })
        .then(() => {
          toast.success("Application completed successfully");
          setShowSucessComponent(!showSuccessComponent);
          setUploadingToFirebase(false);
        })
        .catch((e: ApolloError) => {
          return toast.error(e.graphQLErrors[0].message);
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
            <div className="sm:col-span-3 ml-5 ">
              <Suspense fallback={CustomContextLoader()}>
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
                      handleImageUpload={handleImageUpload}
                      clientImageUrl={clientImageUrl}
                      password={password}
                      setPassword={setPassword}
                      confirmPassword={confirmPassword}
                      setConfirmPassword={setConfirmPassword}
                    />
                  </Fragment>
                )}
                {tab === "other" && (
                  <Fragment>
                    <OtherInformationComponent
                      setTab={setTab}
                      digitalAddress={digitalAddress}
                      setDigitalAddress={setDigitalAddress}
                      phone={phone}
                      setPhone={setPhone}
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
                <SucessComponent
                  show={showSuccessComponent}
                  setShow={setShowSucessComponent}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
