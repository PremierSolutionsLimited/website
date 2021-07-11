import { Fragment } from "react";
import { EmergencyComponentProp } from "./types";
import { CircleSpinner } from "react-spinners-kit";
import EmergencyComponentSelect from "../bones/emergency-select";

export default function CarImagesComponent({
  setTab,
  emergencyContact,
  setEmergencyContact,
  handleHandleCompleteRegistration,
  uploadingToFirebase,
  completingApplication,
}: EmergencyComponentProp) {
  return (
    <Fragment>
      <div>
        <div className="divide-y divide-white lg:col-span-9">
          {/* Profile section */}

          <EmergencyComponentSelect
            emergencyContact={emergencyContact}
            setEmergencyContact={setEmergencyContact}
          />

          <div className="pt-6 divide-y divide-gray-200">
            <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
              <button
                onClick={() => setTab("other")}
                type="button"
                className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Back
              </button>
              <button
                type="button"
                disabled={uploadingToFirebase || completingApplication}
                onClick={handleHandleCompleteRegistration}
                className="ml-5 flex flex-row items-center bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4  justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                <div className="mr-2">
                  {completingApplication
                    ? "Completing Process"
                    : "Complete Process"}
                </div>

                <div>
                  {" "}
                  {completingApplication ? (
                    <Fragment>
                      <div className="mt-1">
                        <CircleSpinner loading color="#fff" size={15} />
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </Fragment>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
