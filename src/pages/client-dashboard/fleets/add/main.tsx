import React, { Fragment, useEffect, useState } from "react";
import {
  AddCarComponentProp,
  VehicleClassOutputProp,
  VehicleClassesInputProp,
  VehicleClasses,
  AddVehicleOutputProp,
  AddVehicleInputProp,
} from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { UploadCarsComponent } from "./components/uploadcars";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import {
  ADD_VEHICLE,
  GET_VEHICLE_CLASSES,
} from "../../../../services/graphql/fleet";
import { CircleSpinner } from "react-spinners-kit";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { getImage } from "./utils/util";
import { useMultipleImageUpload } from "../../../../components/hooks";
import SketchPickerComponent from "./components";
import toast from "react-hot-toast";
import _ from "lodash";

const MainComponent: React.FC<AddCarComponentProp> = ({
  show,
  setShow,
  refetch,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const { loading: uploadLoadings, upload } =
    useMultipleImageUpload("clientFleet");
  const [clientId, setClientId] = useState<string>("");
  const [vehicleClass, setVehicleClass] = useState<string>("");
  const [transmissionType, setTransmissionType] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");

  // for colour select component
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("");

  const { currentUser: currentClient } = useCurrentClient();

  // get vehicle  classes
  const { data: vehicleClasses, loading: loadingVehicleClasses } = useQuery<
    VehicleClassOutputProp,
    VehicleClassesInputProp
  >(GET_VEHICLE_CLASSES);

  const [invokeCreateVehicle, { loading }] = useMutation<
    AddVehicleOutputProp,
    AddVehicleInputProp
  >(ADD_VEHICLE);

  // for uploading car images
  const [image1File1, setImageFile1] = useState<any>(null);
  const [imageUrl1, setImageUrl1] = useState<string>("");
  const [image1File2, setImageFile2] = useState<any>(null);
  const [imageUrl2, setImageUrl2] = useState<string>("");
  const [image1File3, setImageFile3] = useState<any>(null);
  const [imageUrl3, setImageUrl3] = useState<string>("");

  useEffect(() => {
    if (currentClient) {
      setClientId(currentClient?._id);
    }
  }, [currentClient]);

  const resetState = () => {
    setImageFile1(null);
    setImageUrl1("");
    setImageFile2(null);
    setImageUrl2("");
    setImageFile3(null);
    setImageUrl3("");
    setVehicleClass("");
    setClientId("");
    setMake("");
    setModel("");
    setRegistrationNumber("");
    setColor("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (vehicleClass.trim() === "") {
      return toast.error("Please choose the class your vehicle belongs to");
    }
    if (transmissionType.trim() === "") {
      return toast.error("Please choose  your vehicle's transmission type");
    }
    if (color.trim() === "") {
      return toast.error("Please choose the colour of your vehicle ");
    }

    if (model.trim() === "") {
      return toast.error("Please enter the model of your vehicle ");
    }
    if (make.trim() === "") {
      return toast.error("Please enter your vehicle's make ");
    }

    if (registrationNumber.trim() === "") {
      return toast.error("Please enter your vehicle's registration number ");
    }
    let imageUrls: string[] = [];
    let imageFiles = getImage(image1File1, image1File2, image1File3);

    if (imageFiles.length > 0) {
      for (let i = 0; i < imageFiles.length; i++) {
        let element = await upload(imageFiles[i]?.value as File);
        imageUrls.push(element);
      }
    }

    invokeCreateVehicle({
      variables: {
        client: clientId,
        class: vehicleClass,
        transmissionType,
        color,
        model,
        make,
        images: imageUrls,
        registrationNumber,
      },
    })
      .then(() => {
        refetch();
        setShow(false);
        toast.success("Vehicle created successfully");
        resetState();
      })
      .catch((e: ApolloError) => {
        toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)));
      });
  };

  const handleUploadImage1 = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setImageUrl1(URL.createObjectURL(e.target.files[0]));
      setImageFile1(e.target.files[0]);
    } else {
      setImageUrl1(URL.createObjectURL(image1File1));
      setImageFile1(image1File1);
    }
  };
  const handleUploadImage2 = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setImageUrl2(URL.createObjectURL(e.target.files[0]));
      setImageFile2(e.target.files[0]);
    } else {
      setImageUrl2(URL.createObjectURL(image1File2));
      setImageFile2(image1File2);
    }
  };
  const handleUploadImage3 = (e: any) => {
    if (e.target.files[0] !== undefined) {
      setImageUrl3(URL.createObjectURL(e.target.files[0]));
      setImageFile3(e.target.files[0]);
    } else {
      setImageUrl3(URL.createObjectURL(image1File3));
      setImageFile3(image1File3);
    }
  };

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 90 : 55}
        canClose={true}
      >
        <div className="p-4">
          <div className="sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="text-red-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form
            onSubmit={(e: any) => {
              handleSubmit(e);
            }}
          >
            <span className={"font-medium text-md mt-5"}>Add New Car</span>
            <div className="mt-5 grid grid-cols-12 gap-3 h-book-trip-height overflow-y-auto">
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  htmlFor="url"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Class of Vehicle <span className={"text-red-600"}>*</span>
                </label>
                <div className="mt-1 rounded-none shadow-none">
                  <select
                    id="location"
                    name="location"
                    required
                    value={vehicleClass}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setVehicleClass(e.target.value);
                    }}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gold-1 focus:border-gold-1 sm:text-sm rounded-md"
                    defaultValue="Canada"
                  >
                    <option>Please Choose</option>
                    {loadingVehicleClasses ? (
                      <Fragment>
                        <option>Loading...</option>
                      </Fragment>
                    ) : (
                      <Fragment>
                        {vehicleClasses ? (
                          <Fragment>
                            {vehicleClasses?.vehicleClassesLength === 0 ? (
                              <Fragment>
                                <option>No vehicle classes found</option>
                              </Fragment>
                            ) : (
                              <Fragment>
                                {vehicleClasses?.vehicleClasses?.map(
                                  (item: VehicleClasses, itemIdx: number) => (
                                    <Fragment key={itemIdx}>
                                      <option value={item?._id}>
                                        {item?.name}
                                      </option>
                                    </Fragment>
                                  )
                                )}
                              </Fragment>
                            )}
                          </Fragment>
                        ) : (
                          <Fragment>
                            <option>
                              An error occured trying to load the data
                            </option>
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                  </select>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <div className={"relative"}>
                  <label htmlFor="email" className="">
                    Color <span className={"text-red-600"}>*</span>
                  </label>
                  <div
                    onClick={() => setShowColorPicker(true)}
                    className={
                      "bg-white mt-1 rounded-md relative border border-gray-300 flex py-2 items-center cursor-pointer justify-center"
                    }
                  >
                    <span
                      className={`w-5 h-5 rounded-full border absolute left-0 ml-4`}
                      style={{ backgroundColor: color || "#fff" }}
                    />
                    <span className={"text-gray-600 text-sm"}>
                      Click Here To Change Color
                    </span>
                  </div>
                  <SketchPickerComponent
                    show={showColorPicker}
                    setShow={setShowColorPicker}
                    color={color}
                    setColor={setColor}
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  htmlFor="url"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Transmission Type <span className={"text-red-600"}>*</span>
                </label>
                <div className="mt-1 rounded-none shadow-none">
                  <select
                    id="location"
                    name="location"
                    required
                    value={transmissionType}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setTransmissionType(e.target.value);
                    }}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gold-1 focus:border-gold-1 sm:text-sm rounded-md"
                    defaultValue="Canada"
                  >
                    <option>Please Choose</option>
                    <option value="MANUAL">Manual</option>
                    <option value="AUTOMATIC">Automatic</option>
                  </select>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  htmlFor="url"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Car Make <span className={"text-red-600"}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={make}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMake(e.target.value);
                  }}
                  className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                  placeholder="Eg. Toyota"
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  htmlFor="url"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Car Model <span className={"text-red-600"}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setModel(e.target.value);
                  }}
                  className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                  placeholder="Eg. Camry"
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  htmlFor="url"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Registration Number <span className={"text-red-600"}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={registrationNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRegistrationNumber(e.target.value);
                  }}
                  className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                  placeholder="Eg. GE-320-20"
                />
              </div>

              {/* upload cars */}
              <div
                style={{ height: "25vh" }}
                className="col-span-12 sm:col-span-12 md:col-span-12 overflow-scroll scrollContainer"
              >
                <UploadCarsComponent
                  imageUrl1={imageUrl1}
                  handleUploadImage1={handleUploadImage1}
                  imageUrl2={imageUrl2}
                  handleUploadImage2={handleUploadImage2}
                  imageUrl3={imageUrl3}
                  handleUploadImage3={handleUploadImage3}
                />
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
              <span className="inline-flex rounded-none shadow-sm mr-2 ">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
                >
                  <span className="mx-1">Close</span>
                </button>
              </span>
              <span className="inline-flex rounded-none shadow-sm ">
                <button
                  type="submit"
                  disabled={uploadLoadings || loading}
                  className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
                >
                  {uploadLoadings || loading ? (
                    <Fragment>
                      <CircleSpinner loading color="#fff" size={13} />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <span className="mx-1">Save</span>
                    </Fragment>
                  )}
                </button>
              </span>
            </div>
          </form>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
