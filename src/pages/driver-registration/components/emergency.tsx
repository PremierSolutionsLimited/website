import { Fragment } from "react";
import { EmergencyComponentProp } from "./types";
import EmergencyComponentSelect from "../bones/emergency-select";
import toast from "react-hot-toast";

export default function EmergencyComponent({
  setTab,
  emergencyContact,
  setEmergencyContact,
}: EmergencyComponentProp) {
  function handleGoToNextPage(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (
      emergencyContact.length === 0 ||
      emergencyContact[0]?.name === "" ||
      emergencyContact[0]?.relationship === "" ||
      emergencyContact[0]?.phone === ""
    ) {
      return toast.error("Please add at least one contact");
    }
    return setTab("card");
  }
  return (
    <Fragment>
      <div className="divide-y divide-white lg:col-span-9">
        {/* Profile section */}

        <EmergencyComponentSelect
          emergencyContact={emergencyContact}
          setEmergencyContact={setEmergencyContact}
        />

        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("family")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleGoToNextPage}
              className="ml-5 bg-gold-1 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
