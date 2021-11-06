import * as React from "react";
import {
  MainComponentProp,
  EmergencyInputProp,
} from "../../../client-registration/bones/types";
import SingleSelectOption from "./selectOption";

const MainComponent = ({
  emergencyContact,
  setEmergencyContact,
}: MainComponentProp) => {
  const handleAddEmergencyContact = () => {
    setEmergencyContact([
      ...emergencyContact,
      { name: "", relationship: "", telephone: "", phone: "", address: "" },
    ]);
  };
  return (
    <React.Fragment>
      <div style={{ width: "100%" }} className={"pl-3"}>
        <div className="flex items-center justify-between flex-row">
          <div />
          {emergencyContact?.length > 0 && (
            <React.Fragment>
              <div className={"text-sm text-gray-700 my-2"}>
                {" "}
                Emergency Contacts : {emergencyContact?.length}
              </div>
            </React.Fragment>
          )}
        </div>
        <button
          disabled={emergencyContact.length === 5 ? true : false}
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleAddEmergencyContact}
          className={
            " flex justify-center shadow-none  focus:outline-none items-center py-2 rounded-md bg-gray-50 hover:bg-gray-100"
          }
        >
          <div className={"flex flex-row items-center"}>
            <svg viewBox="0 0 24 24" width="20px" height="20px">
              <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
            </svg>
            <span className={"ml-2 text-gray-500 font-light"}>
              Add {emergencyContact.length === 0 ? "" : "another"} emergency
              contact
            </span>
          </div>
        </button>
      </div>
      <div style={{ height: "57vh" }} className="overflow-y-auto">
        {emergencyContact.map((contact: EmergencyInputProp, index: number) => (
          <React.Fragment key={index}>
            <div className="py-3 px-4 sm:p-6 shadow-sm lg:pb-8">
              <div className="mt-2 grid grid-cols-12 relative gap-6">
                <div className={` absolute right-0`}>
                  <svg
                    onClick={() => {
                      const remainder = emergencyContact?.filter(
                        (_, id) => id !== index
                      );
                      setEmergencyContact(remainder);
                    }}
                    className="w-5 cursor-pointer text-red-500 h-5 -mt-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                <SingleSelectOption
                  name={contact?.name}
                  setName={(newName: string) => {
                    let newState = [...emergencyContact];
                    newState[index] = {
                      name: newName,
                      relationship: contact?.relationship,
                      telephone: contact?.telephone,
                      phone: contact?.phone,
                      address: contact?.address,
                    };
                    setEmergencyContact(newState);
                  }}
                  relationship={contact?.relationship}
                  setRelationShip={(newRelationship: string) => {
                    let newState = [...emergencyContact];
                    newState[index] = {
                      name: contact?.name,
                      relationship: newRelationship,
                      telephone: contact?.telephone,
                      phone: contact?.phone,
                      address: contact?.address,
                    };
                    setEmergencyContact(newState);
                  }}
                  telephone={contact?.telephone}
                  setTelephone={(newTelephone: string) => {
                    let newState = [...emergencyContact];
                    newState[index] = {
                      name: contact?.name,
                      relationship: contact?.relationship,
                      telephone: newTelephone,
                      phone: contact?.phone,
                      address: contact?.address,
                    };
                    setEmergencyContact(newState);
                  }}
                  phone={contact?.phone}
                  setPhone={(newPhone: string) => {
                    let newState = [...emergencyContact];
                    newState[index] = {
                      name: contact?.name,
                      relationship: contact?.relationship,
                      telephone: contact?.telephone,
                      phone: newPhone,
                      address: contact?.address,
                    };
                    setEmergencyContact(newState);
                  }}
                  address={contact?.address}
                  setAddress={(newAddress: string) => {
                    let newState = [...emergencyContact];
                    newState[index] = {
                      name: contact?.name,
                      relationship: contact?.relationship,
                      telephone: contact?.telephone,
                      phone: contact?.phone,
                      address: newAddress,
                    };
                    setEmergencyContact(newState);
                  }}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MainComponent;
