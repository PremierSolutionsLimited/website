import React, { Fragment, useState } from "react";
import { UpdateCarComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { UploadCarsComponent } from "./components/uploadcars";
import SketchPickerComponent from "./components";

const MainComponent: React.FC<UpdateCarComponentProp> = ({ show, setShow }) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("");

  const [image1File1, setImageFile1] = useState<any>(null);
  const [imageUrl1, setImageUrl1] = useState<string>("");
  const [image1File2, setImageFile2] = useState<any>(null);
  const [imageUrl2, setImageUrl2] = useState<string>("");
  const [image1File3, setImageFile3] = useState<any>(null);
  const [imageUrl3, setImageUrl3] = useState<string>("");

  // function to handle licenseBack upload from user's pc
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
        size={isTabletOrMobile ? 100 : 55}
      >
        <div className="p-8 ">
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <span className={"font-medium text-md mt-5"}>Update Car</span>
          <div className="mt-5 grid grid-cols-12 gap-3">
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Class of Vehicle
              </label>
              <div className="mt-1 rounded-none shadow-none">
                <select
                  id="location"
                  name="location"
                  required
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
                  defaultValue="Canada"
                >
                  <option>Please Choose</option>
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
                  style={{ backgroundColor: color || "#fff" }}
                  className={
                    "bg-white mt-1 rounded-md border border-gray-300 flex py-2 cursor-pointer justify-center"
                  }
                >
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
                Transmission Type
              </label>
              <div className="mt-1 rounded-none shadow-none">
                <select
                  id="location"
                  name="location"
                  required
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md"
                  defaultValue="Canada"
                >
                  <option>Please Choose</option>
                </select>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Car Make
              </label>
              <input
                type="text"
                required
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                placeholder="Eg. Doe"
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Car Model
              </label>
              <input
                type="text"
                required
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                placeholder="Eg. Doe"
              />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Registration Number
              </label>
              <input
                type="text"
                required
                className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                placeholder="Eg. Doe"
              />
            </div>

            {/* upload cars */}
            <div className="col-span-12 sm:col-span-12 md:col-span-12">
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
                className="inline-flex rounded-lg items-center px-6 py-2 border border-pink-600 text-sm leading-5 font-light text-pink-600 hover:text-pink-600 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
            <span className="inline-flex rounded-none shadow-sm ">
              <button
                type="submit"
                className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-pink-600 hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Save</span>
              </button>
            </span>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
