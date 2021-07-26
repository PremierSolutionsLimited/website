import { CameraIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

interface Props {
  imageUrl1: string;
  handleUploadImage1: (e: any) => void;
  imageUrl2: string;
  handleUploadImage2: (e: any) => void;
  imageUrl3: string;
  handleUploadImage3: (e: any) => void;
}

const UploadCarsComponent = ({
  imageUrl1,
  handleUploadImage1,
  imageUrl2,
  handleUploadImage2,
  imageUrl3,
  handleUploadImage3,
}: Props) => {
  return (
    <Fragment>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {imageUrl1 ? (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                className="h-full w-full object-cover lg:h-full"
                src={imageUrl1}
                alt=""
              />
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <div className="">
                  <div className="bg-gray-900 relative  bg-opacity-60  h-14 w-14 rounded-full flex items-center justify-center">
                    <CameraIcon
                      className=" flex-shrink-0 h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />

                    {/* <span className="sr-only"> user photo</span> */}
                    <input
                      type="file"
                      id="user-photo"
                      name="user-photo"
                      accept={"image/*"}
                      onChange={handleUploadImage1}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </label>
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Upload Image
              </span>
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <input
                  type="file"
                  id="user-photo"
                  name="user-photo"
                  accept={"image/*"}
                  onChange={handleUploadImage1}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </label>
            </button>
          </Fragment>
        )}

        {imageUrl2 ? (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                className="h-full w-full object-cover lg:h-full"
                src={imageUrl2}
                alt=""
              />
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <div className="">
                  <div className="bg-gray-900 relative  bg-opacity-60  h-14 w-14 rounded-full flex items-center justify-center">
                    <CameraIcon
                      className=" flex-shrink-0 h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />

                    {/* <span className="sr-only"> user photo</span> */}
                    <input
                      type="file"
                      id="user-photo"
                      name="user-photo"
                      accept={"image/*"}
                      onChange={handleUploadImage2}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </label>
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Upload Image
              </span>
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <input
                  type="file"
                  id="user-photo"
                  name="user-photo"
                  accept={"image/*"}
                  onChange={handleUploadImage2}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </label>
            </button>
          </Fragment>
        )}

        {imageUrl3 ? (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-2  text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                className="h-full w-full object-cover lg:h-full"
                src={imageUrl3}
                alt=""
              />
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <div className="">
                  <div className="bg-gray-900 relative  bg-opacity-60  h-14 w-14 rounded-full flex items-center justify-center">
                    <CameraIcon
                      className=" flex-shrink-0 h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />

                    {/* <span className="sr-only"> user photo</span> */}
                    <input
                      type="file"
                      id="user-photo"
                      name="user-photo"
                      accept={"image/*"}
                      onChange={handleUploadImage3}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </label>
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button
              type="button"
              className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Upload Image
              </span>
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
              >
                <input
                  type="file"
                  id="user-photo"
                  name="user-photo"
                  accept={"image/*"}
                  onChange={handleUploadImage3}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </label>
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export { UploadCarsComponent };
