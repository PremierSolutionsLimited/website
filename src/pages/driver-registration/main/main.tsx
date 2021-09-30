import React, {
  Fragment,
  useState,
  useCallback,
  lazy,
  Suspense,
  useEffect,
} from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_DRIVER_APPLICATION } from "../../../services/graphql/applications";
import { CustomContextLoader } from "../../../shared/loaders";
import {
  CreateApplicationInputProp,
  CreateApplicationOuputProp,
} from "./types";
import { useRegistrationProvider } from "../../../services/context";
import { getAvailableDays } from "../util/availability";
import { getImage } from "../util/images";
import { getTypeOfCars } from "../util/typeOfCars";
import { DependentsInputProp, IType } from "../bones/types";
import { useMultipleImageUpload } from "../../../components/hooks";
import { EmergencyInputProp } from "../../client-registration/bones/types";
import Header from "../../../shared/layout/registration";
import StepComponent from "../../../shared/driver-steps";
import toast from "react-hot-toast";
import getCroppedImg from "../components/utils/getCroppedImage";
import Cropper from "react-easy-crop";
import { duplicateCheck } from "../../../components/utils/duplicateCheck";

const PersonalComponent = lazy(() => import("../components/personal"));
const FamilyComponent = lazy(() => import("../components/family"));
const EmergencyComponent = lazy(() => import("../components/emergency"));
const CardComponent = lazy(() => import("../components/card"));
const ExperienceComponent = lazy(() => import("../components/experience"));
const LicenceComponent = lazy(() => import("../components/license"));
const AvailabiltyComponent = lazy(() => import("../components/availabilty"));
const SucessComponent = lazy(() => import("../success"));

const MainComponent = () => {
  useEffect(() => {
    document.title = "Driver Registration | Hire A Driver";
  }, []);
  const [, registrationState] = useRegistrationProvider();
  const { loading: uploadLoadings, upload } =
    useMultipleImageUpload("driverRegistration");
  // for tabs
  const [tab, setTab] = useState<string>("personal");

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
  const [isEmployed, setIsEmployed] = useState<string>("");

  // states for driver family information
  const [nextOfKinName, setNextOfKinName] = useState<string>("");
  const [nexOfKinRelation, setNextOfKinRelation] = useState<string>("");
  const [nextOfKinTelephone, setNextOfKinTelephone] = useState<string>("");
  const [nextOfKinPhone, setNextOfKinPhone] = useState<string>("");
  const [nextOfKinAddress, setNextOfKinAddress] = useState<string>("");
  const [dependents, setDependents] = useState<DependentsInputProp[]>([]);

  // state for emergency contact
  const [emergencyContact, setEmergencyContact] = useState<
    EmergencyInputProp[]
  >([]);

  // states for driver card information
  const [sortCode, setSortCode] = useState<string>("");
  const [nameOfBank, setNameOfBank] = useState<string>("");
  const [nameOfBankBranch, setNameOfBankBranch] = useState<string>("");
  const [accountNumber, setAccoutNumber] = useState<string>("");
  const [ssnitNumber, setSsnitNumber] = useState<string>("");
  const [momoNumber, setMomoNumber] = useState<string>("");
  const [ghanaCardId, setGhanaCardId] = useState<string>("");
  const [ghanaCardIssueDate, setGhanaCardIssueDate] = useState<string>("");
  const [ghanaCardExpiryDate, setGhanaCardExpiryDate] = useState<string>("");
  const [ghanaCardFrontFile, setghanaCardFrontFrontFile] = useState<any>(null);
  const [ghanaCardFrontImageUrl, setGhanaCardFrontImageUrl] =
    useState<string>("");
  const [ghanaCardBackFile, setGhanaCardBackFile] = useState<any>(null);
  const [ghanaCardBackImageUrl, setGhanaCardBackImageUrl] =
    useState<string>("");

  // states for driver's license information
  const [licenseId, setLicenseId] = useState<string>("");
  const [hasALicense, setHasALicense] = useState<string>("");
  const [licenseType, setLicenseType] = useState<string>("");
  const [licenseExpiryDate, setLicenseExpiryDate] = useState<string>("");
  const [licenseIssueDate, setLicenseIssueDate] = useState<string>("");
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

  const [currentFile, setCurrentFile] = useState<number>();

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

  // For handling image from local pc
  const [file, setFile] = useState(null);

  const [imageUrl, setImageUrl] = useState<any>(null);
  // For handling image crop
  const [showCropper, setShowCropper] = useState(false);
  const [imageCropLoad, setImageCropLoad] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    setImageCropLoad(true);
    try {
      const croppedImage = await getCroppedImg(
        imageUrl,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setShowCropper(false);
      setImageCropLoad(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, imageUrl]);

  // Function to pick image
  const handleProfileImage = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      setDriverFile(e.target.files[0]);
    } else {
      setImageUrl(URL.createObjectURL(file));
      setFile(file);
      setDriverFile(driverFile);
    }

    return setShowCropper(true);
  };

  // function to handle image upload from user's pc
  // const handleImageUpload = (e: any) => {
  //   if (e.target.files[0] !== undefined) {
  //     setDriverImageUrl(URL.createObjectURL(e.target.files[0]));
  //     setDriverFile(e.target.files[0]);
  //   } else {
  //     setDriverImageUrl(URL.createObjectURL(driverFile));
  //     setDriverFile(driverFile);
  //   }
  // };

  // function to handle cardFront upload from user's pc
  const handleGhanaCardFrontImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setGhanaCardFrontImageUrl(URL.createObjectURL(e.target.files[0]));
      setghanaCardFrontFrontFile(e.target.files[0]);
    } else {
      setDriverLicenseFrontImageUrl(URL.createObjectURL(ghanaCardFrontFile));
      setghanaCardFrontFrontFile(ghanaCardFrontFile);
    }
  };

  // function to handle card upload from user's pc
  const handleGhanaCardBackImageUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setGhanaCardBackImageUrl(URL.createObjectURL(e.target.files[0]));
      setGhanaCardBackFile(e.target.files[0]);
    } else {
      setGhanaCardBackImageUrl(URL.createObjectURL(ghanaCardBackFile));
      setGhanaCardBackFile(ghanaCardBackFile);
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

    // all driver image files
    let imageFiles = getImage(
      driverFile,
      ghanaCardFrontFile,
      ghanaCardBackFile,
      driverLicenseFrontFile,
      driverLicenseBackFile
    );

    // image urls generated after firebase upload
    let imageUrls: string[] = [];

    if (![null].includes(imageFiles)) {
      for (let i = 0; i < imageFiles.length; i++) {
        setCurrentFile(i);
        let element = await upload(imageFiles[i]?.value as File);
        imageUrls.push(element);
      }
    }
    createApplication({
      variables: {
        title: registrationState?.status?.title,
        lastName: registrationState?.status?.lastName,
        firstName: registrationState?.status?.firstName,
        otherNames: registrationState?.status?.otherNames,
        gender: registrationState?.status?.gender,
        dob: new Date(registrationState?.status?.dob),
        email: registrationState?.status?.email,
        photograph: imageUrls[0],
        maritalStatus: maritalStatus,
        numberOfChildren: parseInt(numberOfChildren),
        hasLicense: hasALicense === "yes" ? true : false,
        phone: telephone,
        region: region,
        city: city,
        residence: currentAddress,
        licenseId: licenseId,
        licenseIssueDate: new Date(licenseIssueDate),
        licenseExpiryDate: new Date(licenseExpiryDate),
        licenseImageFront: imageUrls[3],
        licenseImageBack: imageUrls[4],
        licenseClass: licenseClass,
        drivingExperience: parseInt(yearsOfExperienceOnLicense),
        // vehicleClasses: undefined,
        transmissionTypes: transmissionTypes,
        hasAccidents: hadAccidents === "yes" ? true : false,
        hasCrimeRecords: hasBeenArrested === "yes" ? true : false,
        hasSmartPhone: hasSmartPhone === "yes" ? true : false,
        canUseMap: canUseMap === "yes" ? true : false,
        availablity: availableDays,
        educationalHistory: {
          nameOfSchool: nameOfSchoolCompleted,
          endDate: new Date(yearOfGraduation),
          level: highestLevelOfEducation,
        },
        currentEmployment: {
          currentEmployerName: currentEmployerName,
          startDate: new Date(currentPositionStartDate),
          endDate: new Date(currentPositionEndDate),
          positionHeld: currentPositionHeld,
        },
        previousEmployment: {
          currentEmployerName: previousEmployerName,
          startDate: new Date(previousPostionStartDate),
          endDate: new Date(previousPositionEndDate),
          positionHeld: previousPositionHeld,
          reasonForLeaving: reasonForLeavingPreviousWork,
        },
        emergencyContacts: emergencyContact,
        dependents: dependents,
        bankDetails: {
          sortCode: sortCode,
          nameOfBank: nameOfBank,
          nameOfBankBranch: nameOfBankBranch,
          accountNumber: accountNumber,
          ssnitNumber: ssnitNumber,
          momoNumber: momoNumber,
        },
        nextOfKin: {
          name: nextOfKinName,
          address: nextOfKinAddress,
          phone: nextOfKinPhone,
          relationship: nexOfKinRelation,
          telephone: nextOfKinTelephone,
        },
        ghanaCardId,
        ghanaCardExpiryDate: new Date(ghanaCardExpiryDate),
        ghanaCardIssueDate: new Date(ghanaCardIssueDate),
        ghanaCardImageFont: imageUrls[1],
        ghanaCardImageBack: imageUrls[2],
      },
    })
      .then(() => {
        setShowSucessComponent(!showSuccessComponent);
      })
      .catch((e: ApolloError) => {
        console.log("first error", e);
        const message = e.graphQLErrors[0]?.message;

        if (message?.includes("duplicate")) {
          return toast?.error(duplicateCheck(message), {
            id: "duplicate",
          });
        }
        return toast?.error(message, {
          id: "error",
        });
        // return toast.error(e.graphQLErrors[0].message);
      });
  };

  return (
    <Fragment>
      <Header />
      <div className=" bg-white ">
        <div className="max-w-7xl mx-auto pt-6 pb-0 px-4 sm:px-6 lg:px-8">
          <div className={``}>
            {showCropper && (
              <Fragment>
                <div>
                  <Cropper
                    image={imageUrl}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                  <span className="flex absolute bottom-0 right-0 mb-4 rounded-none shadow-sm mr-2 ">
                    <button
                      type="button"
                      onClick={showCroppedImage}
                      className="inline-flex rounded-none items-center w-20 flex justify-center px-13 py-3 border border-pink-600 text-sm leading-5 font-light text-white hover:text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue focus:border-purple-700 active:bg-purple-700 transition duration-150 ease-in-out"
                    >
                      {imageCropLoad ? "One sec..." : "Done"}
                    </button>
                  </span>
                </div>
              </Fragment>
            )}
          </div>
          <div className=" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5">
            <div className="sm:col-span-2 ">
              <div
                className={`mt-5 top-20 sticky overflow-y-none ${
                  showCropper && "hidden"
                }`}
              >
                <StepComponent tab={tab} />
              </div>
            </div>
            <div className="sm:col-span-3 ml-5 ">
              <Suspense fallback={CustomContextLoader()}>
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
                      handleImageUpload={handleProfileImage}
                      driverImageUrl={croppedImage}
                    />
                  </Fragment>
                )}

                {tab === "family" && (
                  <Fragment>
                    <FamilyComponent
                      setTab={setTab}
                      nextOfKinName={nextOfKinName}
                      setNextOfKinName={setNextOfKinName}
                      nexOfKinRelation={nexOfKinRelation}
                      setNextOfKinRelation={setNextOfKinRelation}
                      nextOfKinTelephone={nextOfKinTelephone}
                      setNextOfKinTelephone={setNextOfKinTelephone}
                      setNextOfKinPhone={setNextOfKinPhone}
                      nextOfKinPhone={nextOfKinPhone}
                      setNextOfKinAddress={setNextOfKinAddress}
                      nextOfKinAddress={nextOfKinAddress}
                      setDependents={setDependents}
                      dependents={dependents}
                    />
                  </Fragment>
                )}

                {tab === "emergency" && (
                  <Fragment>
                    <EmergencyComponent
                      emergencyContact={emergencyContact}
                      setEmergencyContact={setEmergencyContact}
                      setTab={setTab}
                    />
                  </Fragment>
                )}

                {tab === "card" && (
                  <Fragment>
                    <CardComponent
                      sortCode={sortCode}
                      setSortCode={setSortCode}
                      setTab={setTab}
                      nameOfBank={nameOfBank}
                      setNameOfBank={setNameOfBank}
                      nameOfBankBranch={nameOfBankBranch}
                      setNameOfBankBranch={setNameOfBankBranch}
                      accountNumber={accountNumber}
                      setAccoutNumber={setAccoutNumber}
                      ssnitNumber={ssnitNumber}
                      setSsnitNumber={setSsnitNumber}
                      momoNumber={momoNumber}
                      setMomoNumber={setMomoNumber}
                      ghanaCardId={ghanaCardId}
                      setGhanaCardId={setGhanaCardId}
                      ghanaCardIssueDate={ghanaCardIssueDate}
                      setGhanaCardIssueDate={setGhanaCardIssueDate}
                      ghanaCardExpiryDate={ghanaCardExpiryDate}
                      setGhanaCardExpiryDate={setGhanaCardExpiryDate}
                      ghanaCardFrontImageUrl={ghanaCardFrontImageUrl}
                      ghanaCardBackImageUrl={ghanaCardBackImageUrl}
                      handleGhanaCardFrontImageUpload={
                        handleGhanaCardFrontImageUpload
                      }
                      handleGhanaCardBackImageUpload={
                        handleGhanaCardBackImageUpload
                      }
                    />
                  </Fragment>
                )}
                {tab === "experience" && (
                  <Fragment>
                    <ExperienceComponent
                      isEmployed={isEmployed}
                      setIsEmployed={setIsEmployed}
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
                      licenseId={licenseId}
                      setLicenseId={setLicenseId}
                      hasALicense={hasALicense}
                      setHasALicense={setHasALicense}
                      licenseType={licenseType}
                      typesOfCars={typesOfCars}
                      setTypeOfCars={setTypeOfCars}
                      setLicenseType={setLicenseType}
                      licenseIssueDate={licenseIssueDate}
                      licenseExpiryDate={licenseExpiryDate}
                      setLicenseIssueDate={setLicenseIssueDate}
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
                      currentImageLoaderPrompt={currentFile as number}
                      loading={loading}
                      handleSubmit={handleSubmit}
                      uploadingToFirebase={uploadLoadings}
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
