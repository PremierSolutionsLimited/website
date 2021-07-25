import React, { Fragment, useState, lazy, Suspense, useEffect } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_DRIVER_APPLICATION } from "../../../services/graphql";
import { ContextLoader } from "../../../shared/loaders";
import {
  CreateApplicationInputProp,
  CreateApplicationOuputProp,
} from "./types";
import { useRegistrationProvider } from "../../../services/context";
import { getAvailableDays } from "../util/availability";
// import { getImage } from "../util/images";
import { getTypeOfCars } from "../util/typeOfCars";
import { IType } from "../bones/types";
import { useMultipleImageUpload } from "../../../components/hooks";
// import { ImageUrlProps } from "../../../components/hooks/useMultipleImageUpload";
import { v4 } from "uuid";
import { storage } from "../../../services/firebase";
import Header from "../../../shared/layout/registration";
import StepComponent from "../../../shared/driver-steps";
import toast from "react-hot-toast";

const PersonalComponent = lazy(() => import("../components/personal"));
const ExperienceComponent = lazy(() => import("../components/experience"));
const LicenceComponent = lazy(() => import("../components/license"));
const AvailabiltyComponent = lazy(() => import("../components/availabilty"));
const SucessComponent = lazy(() => import("../success"));

const MainComponent = () => {
  const [, registrationState] = useRegistrationProvider();
  const { load } = useMultipleImageUpload();
  // for tabs
  const [tab, setTab] = useState<string>("personal");
  const [uploadingToFirebase, setUploadingToFirebase] =
    useState<boolean>(false);
  // states for driver's personal information
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
  const [hasSmartPhone, setHasSmartPhone] = useState<string>("");
  const [canUseMap, setCanUseMap] = useState<string>("");
  // for driver's image
  const [driverFile, setDriverFile] = useState<any>(null);
  const [driverImageUrl, setDriverImageUrl] = useState<string>("");

  // states for driver's personal experience
  const [hadAccidents, setHadAccidents] = useState<string>("");
  const [hasBeenArrested, setHasBeenArrested] = useState<string>("");
  const [previousEmployerName, setPreviousEmployerName] = useState<string>("");
  const [previousPositionHeld, setPreviousPositionHeld] = useState<string>("");
  const [previousPostionStartDate, setPreviousPositionStartDate] =
    useState<string>("");
  const [previousPositionEndDate, setPreviousPositionEndDate] =
    useState<string>("");
  const [reasonForLeavingPreviousWork, setReasonForLeavingPreviousWork] =
    useState<string>("");
  const [currentEmployerName, setCurrentEmployerName] = useState<string>("");
  const [currentPositionStartDate, setCurrentPostionStartDate] =
    useState<string>("");
  const [currentPositionEndDate, setCurrentPostionEndDate] =
    useState<string>("");
  const [currentPositionHeld, setCurrentPositionHeld] = useState<string>("");

  // states for driver's license information
  let licenseId: string;
  const [hasALicense, setHasALicense] = useState<string>("");
  const [licenseType, setLicenseType] = useState<string>("");
  const [licenseExpiryDate, setLicenseExpiryDate] = useState<string>("");
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [yearsOfExperienceOnLicense, setYearsOfExperienceOnLicense] =
    useState<string>("");
  const [licenseClass, setLicenseClass] = useState<string>("");
  const [driverLicenseFrontFile, setDriverLicenseFrontFile] =
    useState<any>(null);
  const [driverLicenseFrontImageUrl, setDriverLicenseFrontImageUrl] =
    useState<string>("");
  const [driverLicenseBackFile, setDriverLicenseBackFile] = useState<any>(null);
  const [driverLicenseBackImageUrl, setDriverLicenseBackImageUrl] =
    useState<string>("");
  const [typesOfCars, setTypeOfCars] = React.useState<IType[]>([]);

  // transmission types to submit to db
  const [transmissionTypes, setTransmissionTypes] = useState<string[]>([]);

  useEffect(() => {
    if (typesOfCars) {
      setTransmissionTypes(getTypeOfCars(typesOfCars));
    }
  }, [typesOfCars]);

  // set user's age
  useEffect(() => {
    setAge(registrationState?.status?.age);
  }, [registrationState?.status?.age]);

  // registrationState's for driver availability
  const [mondayActive, setMondayActive] = useState<boolean>(false);
  const [tuesdayActive, setTuesdayActive] = useState<boolean>(false);
  const [wednesdayActive, setWednesdayActive] = useState<boolean>(false);
  const [thursdayActive, setThursdayActive] = useState<boolean>(false);
  const [fridayActive, setFridayActive] = useState<boolean>(false);
  const [saturdayActive, setSaturdayActive] = useState<boolean>(false);
  const [sundayActive, setSundayActive] = useState<boolean>(false);

  // trigger success modal
  const [showSuccessComponent, setShowSucessComponent] =
    useState<boolean>(false);

  // function to handle image upload from user's pc
  const handleImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setDriverImageUrl(URL.createObjectURL(e.target.files[0]));
      setDriverFile(e.target.files[0]);
    } else {
      setDriverImageUrl(URL.createObjectURL(driverFile));
      setDriverFile(driverFile);
    }
  };

  // function to handle licenseFront upload from user's pc
  const handleLicenseFrontImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setDriverLicenseFrontImageUrl(URL.createObjectURL(e.target.files[0]));
      setDriverLicenseFrontFile(e.target.files[0]);
    } else {
      setDriverLicenseFrontImageUrl(
        URL.createObjectURL(driverLicenseFrontFile)
      );
      setDriverLicenseFrontFile(driverLicenseFrontFile);
    }
  };

  // function to handle licenseBack upload from user's pc
  const handleLicenseBackImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setDriverLicenseBackImageUrl(URL.createObjectURL(e.target.files[0]));
      setDriverLicenseBackFile(e.target.files[0]);
    } else {
      setDriverLicenseBackImageUrl(URL.createObjectURL(driverLicenseBackFile));
      setDriverLicenseBackFile(driverLicenseBackFile);
    }
  };

  const [createApplication, { loading }] = useMutation<
    CreateApplicationOuputProp,
    CreateApplicationInputProp
  >(CREATE_DRIVER_APPLICATION);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let availableDays = getAvailableDays(
      mondayActive,
      tuesdayActive,
      wednesdayActive,
      thursdayActive,
      fridayActive,
      saturdayActive,
      sundayActive
    );

    if (driverFile) {
      setUploadingToFirebase(true);
      let fileName = `${v4()}.${driverFile.type.split("/")[1]}`;
      const uploadTask = storage.ref(`/drivers/${fileName}`).put(driverFile);
      uploadTask.on(
        "state_changed",
        (snapShot: any) => {},
        (err: any) => {
          setUploadingToFirebase(false);
          return toast.error(err?.message);
        },
        () => {
          storage
            .ref("drivers")
            .child(fileName)
            .getDownloadURL()
            .then((fireBaseUrl: string) => {
              createApplication({
                variables: {
                  title: registrationState?.status?.title,
                  lastName: registrationState?.status?.lastName,
                  firstName: registrationState?.status?.firstName,
                  otherNames: registrationState?.status?.otherNames,
                  gender: registrationState?.status?.gender,
                  dob: new Date(registrationState?.status?.dob),
                  email: registrationState?.status?.email,
                  photograph: fireBaseUrl,
                  maritalStatus: maritalStatus,
                  numberOfChildren: parseInt(numberOfChildren),
                  hasLicense: hasALicense === "yes" ? true : false,
                  phone: telephone,
                  region: region,
                  city: city,
                  residence: currentAddress,
                  licenseId: licenseId,
                  licenseExpiryDate: new Date(licenseExpiryDate),
                  //  licenseImageFront: images[1]?.fileUrl,
                  //  licenseImageBack: images[2]?.fileUrl,
                  licenseClass: licenseClass,
                  drivingExperience: parseInt(yearsOfExperienceOnLicense),
                  vehicleClasses: "",
                  transmissionTypes: transmissionTypes,
                  hasAccidents: hadAccidents === "yes" ? true : false,
                  hasCrimeRecords: hasBeenArrested === "yes" ? true : false,
                  hasSmartPhone: hasSmartPhone === "yes" ? true : false,
                  canUseMap: canUseMap === "yes" ? true : false,
                  availablity: availableDays,
                  nameOfSchool: nameOfSchoolCompleted,
                  schoolEndDate: new Date(yearOfGraduation),
                  schoolLevel: highestLevelOfEducation,
                  currentEmploymerName: currentEmployerName,
                  currentEmploymentStartDate: new Date(
                    currentPositionStartDate
                  ),
                  currentEmploymentEndDate: new Date(currentPositionEndDate),
                  currentEmploymentPositionHeld: currentPositionHeld,
                  previousReasonForLeaving: reasonForLeavingPreviousWork,
                  previousEmploymerName: previousEmployerName,
                  previousEmploymentStartDate: new Date(
                    previousPostionStartDate
                  ),
                  previousEmploymentEndDate: new Date(previousPositionEndDate),
                  previousPositionHeld: previousPositionHeld,
                },
              })
                .then(() => {
                  setShowSucessComponent(!showSuccessComponent);
                })
                .catch((e: ApolloError) => {
                  console.log("first error", e);

                  return toast.error(e.graphQLErrors[0].message);
                });
            });
        }
      );
    } else {
      createApplication({
        variables: {
          title: registrationState?.status?.title,
          lastName: registrationState?.status?.lastName,
          firstName: registrationState?.status?.firstName,
          otherNames: registrationState?.status?.otherNames,
          gender: registrationState?.status?.gender,
          dob: new Date(registrationState?.status?.dob),
          email: registrationState?.status?.email,
          maritalStatus: maritalStatus,
          numberOfChildren: parseInt(numberOfChildren),
          hasLicense: hasALicense === "yes" ? true : false,
          phone: telephone,
          region: region,
          city: city,
          residence: currentAddress,
          licenseId: licenseId,
          licenseExpiryDate: new Date(licenseExpiryDate),
          //  licenseImageFront: images[1]?.fileUrl,
          //  licenseImageBack: images[2]?.fileUrl,
          licenseClass: licenseClass,
          drivingExperience: parseInt(yearsOfExperienceOnLicense),
          vehicleClasses: "",
          transmissionTypes: transmissionTypes,
          hasAccidents: hadAccidents === "yes" ? true : false,
          hasCrimeRecords: hasBeenArrested === "yes" ? true : false,
          hasSmartPhone: hasSmartPhone === "yes" ? true : false,
          canUseMap: canUseMap === "yes" ? true : false,
          availablity: availableDays,
          nameOfSchool: nameOfSchoolCompleted,
          schoolEndDate: new Date(yearOfGraduation),
          schoolLevel: highestLevelOfEducation,
          currentEmploymerName: currentEmployerName,
          currentEmploymentStartDate: new Date(currentPositionStartDate),
          currentEmploymentEndDate: new Date(currentPositionEndDate),
          currentEmploymentPositionHeld: currentPositionHeld,
          previousReasonForLeaving: reasonForLeavingPreviousWork,
          previousEmploymerName: previousEmployerName,
          previousEmploymentStartDate: new Date(previousPostionStartDate),
          previousEmploymentEndDate: new Date(previousPositionEndDate),
          previousPositionHeld: previousPositionHeld,
        },
      })
        .then(() => {
          toast.success("Application completed successfully");
          setShowSucessComponent(!showSuccessComponent);
          setUploadingToFirebase(false);
        })
        .catch((e: ApolloError) => {
          console.log("erer", e);

          return toast.error(e.graphQLErrors[0].message);
        });
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
                      driverImageUrl={driverImageUrl}
                    />
                  </Fragment>
                )}
                {tab === "experience" && (
                  <Fragment>
                    <ExperienceComponent
                      setTab={setTab}
                      hadAccidents={hadAccidents}
                      setHadAccidents={setHadAccidents}
                      hasBeenArrested={hasBeenArrested}
                      setHasBeenArrested={setHasBeenArrested}
                      previousEmployerName={previousEmployerName}
                      setPreviousEmployerName={setPreviousEmployerName}
                      previousPositionHeld={previousPositionHeld}
                      setPreviousPositionHeld={setPreviousPositionHeld}
                      previousPostionStartDate={previousPostionStartDate}
                      setPreviousPositionStartDate={
                        setPreviousPositionStartDate
                      }
                      previousPositionEndDate={previousPositionEndDate}
                      setPreviousPositionEndDate={setPreviousPositionEndDate}
                      reasonForLeavingPreviousWork={
                        reasonForLeavingPreviousWork
                      }
                      setReasonForLeavingPreviousWork={
                        setReasonForLeavingPreviousWork
                      }
                      currentEmployerName={currentEmployerName}
                      setCurrentEmployerName={setCurrentEmployerName}
                      currentPositionStartDate={currentPositionStartDate}
                      setCurrentPostionStartDate={setCurrentPostionStartDate}
                      currentPositionEndDate={currentPositionEndDate}
                      setCurrentPostionEndDate={setCurrentPostionEndDate}
                      currentPositionHeld={currentPositionHeld}
                      setCurrentPositionHeld={setCurrentPositionHeld}

                      // yearsOfDrivingExperience={yearsOfDrivingExperience}
                      // setYearsOfDrivingExperience={setYearsOfDrivingExperience}
                    />
                  </Fragment>
                )}
                {tab === "license" && (
                  <Fragment>
                    <LicenceComponent
                      setTab={setTab}
                      hasALicense={hasALicense}
                      setHasALicense={setHasALicense}
                      licenseType={licenseType}
                      typesOfCars={typesOfCars}
                      setTypeOfCars={setTypeOfCars}
                      setLicenseType={setLicenseType}
                      licenseExpiryDate={licenseExpiryDate}
                      setLicenseExpiryDate={setLicenseExpiryDate}
                      licenseNumber={licenseNumber}
                      setLicenseNumber={setLicenseNumber}
                      yearsOfExperienceOnLicense={yearsOfExperienceOnLicense}
                      setYearsOfExperienceOnLicense={
                        setYearsOfExperienceOnLicense
                      }
                      licenseClass={licenseClass}
                      setLicenseClass={setLicenseClass}
                      handleLicenseFrontImageUpload={
                        handleLicenseFrontImageUpload
                      }
                      driverLicenseFrontImageUrl={driverLicenseFrontImageUrl}
                      handleLicenseBackImageUpload={
                        handleLicenseBackImageUpload
                      }
                      driverLicenseBackImageUrl={driverLicenseBackImageUrl}
                    />
                  </Fragment>
                )}
                {tab === "avaiabliity" && (
                  <Fragment>
                    <AvailabiltyComponent
                      setTab={setTab}
                      mondayActive={mondayActive}
                      setMondayActive={setMondayActive}
                      tuesdayActive={tuesdayActive}
                      setTuesdayActive={setTuesdayActive}
                      wednesdayActive={wednesdayActive}
                      setWednesdayActive={setWednesdayActive}
                      thursdayActive={thursdayActive}
                      setThursdayActive={setThursdayActive}
                      fridayActive={fridayActive}
                      setFridayActive={setFridayActive}
                      saturdayActive={saturdayActive}
                      setSaturdayActive={setSaturdayActive}
                      sundayActive={sundayActive}
                      setSundayActive={setSundayActive}
                      currentImageLoaderPrompt={load as number}
                      loading={loading}
                      handleSubmit={handleSubmit}
                      uploadingToFirebase={uploadingToFirebase}
                    />
                  </Fragment>
                )}
              </div>
              <SucessComponent
                show={showSuccessComponent}
                setShow={setShowSucessComponent}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
