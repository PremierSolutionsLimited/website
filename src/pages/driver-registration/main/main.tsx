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
import { useRegistrationProvider } from "../../../services/context";
import { getImage } from "../util/images";
import { getTypeOfCars } from "../util/typeOfCars";
import { IType } from "../bones/types";
import { useMultipleImageUpload } from "../../../components/hooks";
import Header from "../../../shared/layout/registration";
import StepComponent from "../../../shared/driver-steps";
import toast from "react-hot-toast";
import getCroppedImg from "../components/utils/getCroppedImage";
import Cropper from "react-easy-crop";
import { duplicateCheck } from "../../../components/utils/duplicateCheck";

const PersonalComponent = lazy(() => import("../components/personal"));
const EducationComponent = lazy(() => import("../components/education"));
const ExperienceComponent = lazy(() => import("../components/experience"));
const SucessComponent = lazy(() => import("../success"));

const MainComponent = () => {
  useEffect(() => {
    document.title = "Driver Registration | Premier Chauffeur";
  }, []);
  const [, registrationState] = useRegistrationProvider();
  const { upload } = useMultipleImageUpload("driverRegistration");
  // for tabs
  const [tab, setTab] = useState<string>("personal");

  // states for driver's personal information
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [, setAge] = useState<string>("");
  const [telephone, setTelephone] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [numberOfChildren, setNumberOfChildren] = useState<string>("");
  const [highestLevelOfEducation, setHighestLevelOfEducation] =
    useState<string>("");
  const [nameOfSchoolCompleted, setNameOfSchoolCompleted] = useState("");
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
  const [previousPositionStartDate, setPreviousPositionStartDate] =
    useState<string>("");
  const [previousPositionEndDate, setPreviousPositionEndDate] =
    useState<string>("");
  const [reasonForLeavingPreviousWork, setReasonForLeavingPreviousWork] =
    useState<string>("");
  const [currentEmployerName, setCurrentEmployerName] = useState<string>("");
  const [currentPositionStartDate, setCurrentPositionStartDate] =
    useState<string>("");
  const [currentPositionEndDate, setCurrentPositionEndDate] =
    useState<string>("");
  const [currentPositionHeld, setCurrentPositionHeld] = useState<string>("");
  const [isEmployed, setIsEmployed] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  // states for driver's license information
  //const [licenseId, setLicenseId] = useState<string>("");
  const [hasALicense, setHasALicense] = useState<string>("");
  //const [licenseType, setLicenseType] = useState<string>("");
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

  //const [currentFile, setCurrentFile] = useState<number>();

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
  const [uploadingImages, setUploadingImages] = useState<boolean>(false);

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

  // function to handle upload of certificate upload
  /*const handleCertificateUpload = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setCertificateImageUrl(URL.createObjectURL(e.target.files[0]));
      setCertImageFile(e.target.files[0]);
    } else {
      setCertificateImageUrl(URL.createObjectURL(driverLicenseBackFile));
      setCertImageFile(driverLicenseBackFile);
    }
  };*/

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

  const [createApplication, { loading }] = useMutation(
    CREATE_DRIVER_APPLICATION
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploadingImages(true);
    // all driver image files
    let imageFiles = getImage(
      driverFile,
      driverLicenseFrontFile,
      driverLicenseBackFile,
    );

    // image urls generated after firebase upload
    let imageUrls: string[] = [];
    if (![null].includes(imageFiles)) {
      for (let i = 0; i < imageFiles.length; i++) {
        //setCurrentFile(i);
        if (imageFiles[i]?.value === null) {
          continue;
        } else {
          let element = await upload(imageFiles[i]?.value);
          imageUrls.push(element);
        }
      }
    }

    console.log("Image Urls: ",imageUrls)
    setUploadingImages(false);
    createApplication({
      variables: {
        title: registrationState?.status?.title,
        lastName: registrationState?.status?.lastName,
        firstName: registrationState?.status?.firstName,
        otherNames: registrationState?.status?.otherNames,
        gender: registrationState?.status?.gender,
        dob: new Date(registrationState?.status?.dob) || undefined,
        email: registrationState?.status?.email || undefined,
        photograph: imageUrls[0] || undefined,
        maritalStatus: maritalStatus || undefined,
        numberOfChildren: parseInt(numberOfChildren) || undefined,
        hasLicense: hasALicense === "yes" ? true : false,
        phone: telephone || undefined,
        region: region || undefined,
        city: city || undefined,
        residence: currentAddress || undefined,
        licenseId: licenseNumber || undefined,
        licenseIssueDate: new Date(licenseIssueDate) || undefined,
        licenseExpiryDate: new Date(licenseExpiryDate) || undefined,
        licenseImageFront: imageUrls[1] || undefined,
        licenseImageBack: imageUrls[2] || undefined,
        licenseClass: licenseClass || undefined,
        drivingExperience: parseInt(yearsOfExperienceOnLicense) || undefined,
        // vehicleClasses: undefined,
        transmissionTypes: transmissionTypes || undefined,
        hasAccidents: hadAccidents === "yes" ? true : false,
        hasCrimeRecords: hasBeenArrested === "yes" ? true : false,
        hasSmartPhone: hasSmartPhone === "yes" ? true : false,
        canUseMap: canUseMap === "yes" ? true : false,
        educationalHistory: {
          nameOfSchool: nameOfSchoolCompleted || undefined,
          endDate: new Date(yearOfGraduation) || undefined,
          level: highestLevelOfEducation || undefined,
        },
        currentEmployment: {
          currentEmployerName: currentEmployerName || undefined,
          startDate: new Date(currentPositionStartDate) || undefined,
          endDate: new Date(currentPositionEndDate) || undefined,
          positionHeld: currentPositionHeld || undefined,
        },
        previousEmployment: {
          currentEmployerName: previousEmployerName || undefined,
          startDate: new Date(previousPositionStartDate) || undefined,
          endDate: new Date(previousPositionEndDate) || undefined,
          positionHeld: previousPositionHeld || undefined,
          reasonForLeaving: reasonForLeavingPreviousWork || undefined,
        },
        comments: comments || undefined,
      },
    })
      .then(() => {
        setShowSucessComponent(!showSuccessComponent);
      })
      .catch((e: ApolloError) => {
        setUploadingImages(false);
        const message = e.graphQLErrors[0]?.message;
        if (message?.includes("duplicate")) {
          return toast?.error(duplicateCheck(message), {
            id: "duplicate",
          });
        }
        return toast?.error(message, {
          id: "error",
        });
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
                      className="inline-flex rounded-none items-center w-20 flex justify-center px-13 py-3 border border-gold-1 text-sm leading-5 font-light text-white hover:text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-blue focus:border-purple-700 active:bg-purple-700 transition duration-150 ease-in-out"
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
                      showCropper={showCropper}
                      telephone={telephone}
                      setTelephone={setTelephone}
                      maritalStatus={maritalStatus}
                      setMaritalStatus={setMaritalStatus}
                      numberOfChildren={numberOfChildren}
                      setNumberOfChildren={setNumberOfChildren}
                      hasSmartPhone={hasSmartPhone}
                      setHasSmartPhone={setHasSmartPhone}
                      handleImageUpload={handleProfileImage}
                      driverImageUrl={croppedImage}
                      hasValidLicense={hasALicense}
                      setHasValidLicense={setHasALicense}
                      licenseNumber={licenseNumber}
                      setLicenseNumber={setLicenseNumber}
                      vehicleType={typesOfCars}
                      setVehicleType={setTypeOfCars}
                      hasHadAccident={hadAccidents}
                      setHasHadAccident={setHadAccidents}
                      hasBeenArrested={hasBeenArrested}
                      setHasBeenArrested={setHasBeenArrested}
                      canUseMap={canUseMap}
                      setCanUseMap={setCanUseMap}
                      licenseClass={licenseClass}
                      setLicenseClass={setLicenseClass}
                      licenseIssueDate={licenseIssueDate}
                      setLicenseIssueDate={setLicenseIssueDate}
                      licenseExpiryDate={licenseExpiryDate}
                      setLicenseExpiryDate={setLicenseExpiryDate}
                      yearsOfExperienceOnLicense={yearsOfExperienceOnLicense}
                      setYearsOfExperienceOnLicense={setYearsOfExperienceOnLicense}
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

                {tab === "education" && (
                    <EducationComponent
                        setTab={setTab}
                        educationLevel={highestLevelOfEducation}
                        setEducationLevel={setHighestLevelOfEducation}
                        nameOfSchool={nameOfSchoolCompleted}
                        setNameOfSchool={setNameOfSchoolCompleted}
                        yearOfCompletion={yearOfGraduation}
                        setYearOfCompletion={setYearOfGraduation}
                        />
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
                      previousPostionStartDate={previousPositionStartDate}
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
                      setCurrentPostionStartDate={setCurrentPositionStartDate}
                      currentPositionEndDate={currentPositionEndDate}
                      setCurrentPostionEndDate={setCurrentPositionEndDate}
                      currentPositionHeld={currentPositionHeld}
                      setCurrentPositionHeld={setCurrentPositionHeld}
                      loading={loading}
                      handleSubmit={handleSubmit}
                      uploadingToFirebase={uploadingImages}
                      comments={comments}
                      setComments={setComments}
                      // yearsOfDrivingExperience={yearsOfDrivingExperience}
                      // setYearsOfDrivingExperience={setYearsOfDrivingExperience}
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
