import React, { Fragment } from "react";
import { CardDetailsComponentProp } from "./types";
import { CameraIcon } from "@heroicons/react/outline";
import { DatePicker } from "antd";
import toast from "react-hot-toast";

export default function CardDetailsComponent({
  setTab,
  nameOfBank,
  setNameOfBank,
  nameOfBankBranch,
  setNameOfBankBranch,
  accountNumber,
  setAccoutNumber,
  ssnitNumber,
  setSsnitNumber,
  momoNumber,
  setMomoNumber,
  ghanaCardId,
  setGhanaCardId,
  ghanaCardIssueDate,
  setGhanaCardIssueDate,
  ghanaCardExpiryDate,
  setGhanaCardExpiryDate,
  handleGhanaCardBackImageUpload,
  handleGhanaCardFrontImageUpload,
  ghanaCardBackImageUrl,
  ghanaCardFrontImageUrl,
}: CardDetailsComponentProp) {
  const handleGotoNextPage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!ghanaCardFrontImageUrl || !ghanaCardBackImageUrl) {
      return toast.error("Please add Ghana card images");
    }
    return setTab("experience");
  };
  return (
    <div>
      <form className="divide-y divide-gray-200 lg:col-span-9">
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-0 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Name of Bank
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                placeholder={"Eg. Ecobank"}
                value={nameOfBank}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameOfBank(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Bank Branch
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                placeholder={"Eg. Spintex"}
                required
                value={nameOfBankBranch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameOfBankBranch(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Account Number
              </label>
              <input
                type="number"
                name="company"
                id="company"
                required
                placeholder={"Eg. 2398378 73838 737"}
                value={accountNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAccoutNumber(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                SSNIT Number
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                required
                placeholder={"Eg. 84899383"}
                value={ssnitNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSsnitNumber(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                MOMO Number
              </label>
              <input
                type="number"
                name="company"
                id="company"
                autoComplete="organization"
                required
                placeholder={"Eg. 0542781001"}
                value={momoNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMomoNumber(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Ghana Card ID Number
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                placeholder={"Eg. 93008132"}
                value={ghanaCardId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setGhanaCardId(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Ghana Card Issue Date
              </label>
              <DatePicker
                // value={value}
                onChange={(data: any) => {
                  setGhanaCardIssueDate(data);
                }}
                value={ghanaCardIssueDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Ghana Card Expiry Date
              </label>

              <DatePicker
                // value={value}
                onChange={(data: any) => {
                  setGhanaCardExpiryDate(data);
                }}
                value={ghanaCardExpiryDate as any}
                className={
                  "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                }
              />
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Ghana Card ID (Front)
              </label>
              {ghanaCardFrontImageUrl ? (
                <Fragment>
                  <div className="relative pt-3">
                    <img
                      className="h-28 w-full object-cover lg:h-44"
                      src={ghanaCardFrontImageUrl}
                      alt="ghanacardFront"
                    />
                    <label
                      htmlFor="user-photo"
                      className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                    >
                      <div className="">
                        <div className="bg-gray-900 relative  bg-opacity-60  h-12 w-12 rounded-full flex items-center justify-center">
                          <CameraIcon
                            className=" flex-shrink-0 h-6 w-6 text-gray-300"
                            aria-hidden="true"
                          />

                          {/* <span className="sr-only"> user photo</span> */}
                          <input
                            type="file"
                            id="user-photo"
                            name="user-photo"
                            onChange={handleGhanaCardFrontImageUpload}
                            accept={"image/*"}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="relative pt-3">
                    <div className="h-28 w-full object-cover lg:h-44 border border-dashed rounded-lg border-gray-500"></div>
                    <label
                      htmlFor="user-photo"
                      className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                    >
                      <div className="">
                        <div className="bg-gray-300 relative  bg-opacity-30  h-12 w-12 rounded-full flex items-center justify-center">
                          <CameraIcon
                            className=" flex-shrink-0 h-6 w-6 text-gray-500"
                            aria-hidden="true"
                          />

                          {/* <span className="sr-only"> user photo</span> */}
                          <input
                            type="file"
                            id="user-photo"
                            name="user-photo"
                            onChange={handleGhanaCardFrontImageUpload}
                            accept={"image/*"}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Ghana Card ID (Back)
              </label>

              {ghanaCardBackImageUrl ? (
                <Fragment>
                  <div className="relative pt-3">
                    <img
                      className="h-28 w-full object-cover lg:h-44"
                      src={ghanaCardBackImageUrl}
                      alt="ghanaCardBack"
                    />

                    <label
                      htmlFor="user-photo"
                      className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                    >
                      <div className="">
                        <div className="bg-gray-900 relative  bg-opacity-60  h-12 w-12 rounded-full flex items-center justify-center">
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
                            onChange={handleGhanaCardBackImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="relative pt-3">
                    <div className="h-28 w-full object-cover lg:h-44 border rounded-lg border-dashed border-gray-500"></div>
                    <label
                      htmlFor="user-photo"
                      className="absolute inset-0 w-full h-full bg-white bg-opacity-30 flex items-center justify-center text-sm font-medium text-white"
                    >
                      <div className="">
                        <div className="bg-gray-300 relative  bg-opacity-30  h-12 w-12 rounded-full flex items-center justify-center">
                          <CameraIcon
                            className=" flex-shrink-0 h-6 w-6 text-gray-500"
                            aria-hidden="true"
                          />

                          {/* <span className="sr-only"> user photo</span> */}
                          <input
                            type="file"
                            id="user-photo"
                            name="user-photo"
                            accept={"image/*"}
                            onChange={handleGhanaCardBackImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("emergency")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleGotoNextPage}
              className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
