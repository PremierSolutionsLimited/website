import React, {
  Fragment,
  useEffect,
  useState,
  Suspense,
  lazy,
  useCallback,
  useRef
} from "react";
import { CreateClientInputProp, CreateClientOutputProp } from "./types";
import { EmergencyInputProp, IGenderPreference } from "../bones/types";
import { getGenderPreference } from "../util/defaultGender";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../../../services/graphql/applications";
import { useRegistrationProvider } from "../../../services/context";
import { v4 } from "uuid";
import { CustomContextLoader } from "../../../shared/loaders";
import { storage } from "../../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import Header from "../../../shared/layout/registration";
import StepComponent from "../../../shared/client-steps";
import getCroppedImg from "../../driver-registration/components/utils/getCroppedImage";
import Cropper from "react-easy-crop";
import { duplicateCheck } from "../../../components/utils/duplicateCheck";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'

const PersonalComponent = lazy(() => import("../components/personal"));
const OtherInformationComponent = lazy(() => import("../components/otherInfo"));
const EmergencyComponent = lazy(() => import("../components/emergency"));
const SucessComponent = lazy(() => import("../success"));

const MainComponent = () => {
  useEffect(() => {
    document.title = "Client Registration | Premier Chauffeur";
  }, []);

  const [, registrationState] = useRegistrationProvider();
  console.log(registrationState);
  // toggle tab
  const [tab, setTab] = useState<string>("personal");

  // states for personal information
  const [username, setUsername] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [placeOfResdience, setPlaceOfResidence] = useState<string>("");
  console.log(placeOfResdience);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // for clients's image
  const [clientFile, setClientFile] = useState<any>(null);
  const [uploadingToFirebase, setUploadingToFirebase] =
    useState<boolean>(false);

  // states for other components
  const [digitalAddress, setDigitalAddress] = useState<string>("");
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

    if (emergencyContact.length < 1) {
      return toast.error("Please add at least one emergency contact");
    }

    //check if any emergency contact has null values
    const checkEmergencyContact = emergencyContact.filter(
      (contact) =>
        contact.name === "" ||
        contact.phone === "" ||
        contact.relationship === ""
    );

    if (checkEmergencyContact.length > 0) {
      return toast.error("Please fill all emergency contact fields");
    }

    if (clientFile) {
      setUploadingToFirebase(true);
      let fileName = `${v4()}.${clientFile.type.split("/")[1]}`;
      const storeRef = ref(storage, `/clients/${fileName}`);
      const uploadTask = uploadBytesResumable(storeRef, clientFile);
      uploadTask.on(
        "state_changed",
        (snapShot: any) => {},
        (err: any) => {
          setUploadingToFirebase(false);
          return toast.error(err?.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (fireBaseUrl: string) => {
              invokeCreateClient({
                variables: {
                  title: registrationState?.status?.title,
                  lastName: registrationState?.status?.lastName,
                  firstName: registrationState?.status?.firstName,
                  otherNames: registrationState?.status?.otherNames,
                  gender: registrationState?.status?.gender,
                  dob: new Date(registrationState?.status?.dob),
                  email: registrationState?.status?.email,
                  phone: registrationState?.status?.phone,
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
                  password,
                },
              })
                .then(() => {
                  // toast.success("Application completed successfully");
                  setShowSucessComponent(!showSuccessComponent);
                  setUploadingToFirebase(false);
                })
                .catch((e: ApolloError) => {
                  const message = e.graphQLErrors[0]?.message;

                  setUploadingToFirebase(false);
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
            }
          );
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
          phone: registrationState?.status?.phone,
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

  // // function to handle image upload from client's pc
  // const handleImageUpload = (e: any) => {
  //   if (e.target.files[0] !== undefined) {
  //     setClientImageUrl(URL.createObjectURL(e.target.files[0]));
  //     setClientFile(e.target.files[0]);
  //   } else {
  //     setClientImageUrl(URL.createObjectURL(clientFile));
  //     setClientFile(clientFile);
  //   }
  // };

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

  //using react-image-crop
  const [imgSrc, setImgSrc] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop1, setCrop1] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>(16 / 9)

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop1(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

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
      setClientFile(e.target.files[0]);
    } else {
      setImageUrl(URL.createObjectURL(file));
      setFile(file);
      setClientFile(clientFile);
    }

    return setShowCropper(true);
  };

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
  }

  return (
    <Fragment>
      <Header />
      <div className=" bg-white ">
        <div className="max-w-7xl mx-auto pt-12 pb-0 mb-20 px-4 sm:px-6 lg:px-8">
          <div>
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
                      className="rounded-none items-center w-20 flex justify-center px-13 py-3 border border-gold-1 text-sm leading-5 font-light text-white hover:text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-blue focus:border-purple-700 active:bg-purple-700 transition duration-150 ease-in-out"
                    >
                      {imageCropLoad ? "One sec..." : "Done"}
                    </button>
                  </span>
                </div>
              </Fragment>
              // <ReactCrop
              //   crop={crop1}
              //   onChange={(_, percentCrop) => setCrop(percentCrop)}
              //   onComplete={(c) => setCompletedCrop(c)}
              //   aspect={aspect}
              // >
              //   <img
              //     ref={imgRef}
              //     alt="Crop me"
              //     src={imgSrc}
              //     style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              //     onLoad={onImageLoad}
              //   />
              // </ReactCrop>
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
                      username={username}
                      setUsername={setUsername}
                      nationality={nationality}
                      setNationality={setNationality}
                      placeOfResidence={placeOfResdience}
                      setPlaceOfResidence={setPlaceOfResidence}
                      handleImageUpload={handleProfileImage}
                      clientImageUrl={croppedImage}
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
