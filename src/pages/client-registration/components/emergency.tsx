import { Fragment } from "react";
import { EmergencyComponentProp } from "./types";
import EmergencyComponentSelect from "../bones/emergency-select";

export default function CarImagesComponent({
  setTab,
  emergencyContact,
  setEmergencyContact,
}: EmergencyComponentProp) {
  return (
    <Fragment>
      <div>
        <form className="divide-y divide-gray-200 lg:col-span-9">
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
                className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
