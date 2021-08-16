import * as React from "react";
import { MainComponentProp, DependentsInputProp } from "../types";
import SingleSelectOption from "./selectOption";

const MainComponent = ({ dependDents, setDependents }: MainComponentProp) => {
  const handleAddDependents = () => {
    setDependents([
      ...dependDents,
      {
        lastName: "",
        relationship: "",
        firstName: "",
        gender: "",
        dob: new Date(),
      },
    ]);
  };
  return (
    <React.Fragment>
      <div style={{ width: "100%" }} className={"pl-3"}>
        <div className="flex items-center justify-between flex-row">
          <div />
          {dependDents?.length > 0 && (
            <React.Fragment>
              <div className={"text-sm text-gray-700 my-2"}>
                {" "}
                Dependents : {dependDents?.length}
              </div>
            </React.Fragment>
          )}
        </div>
        <button
          disabled={dependDents.length === 5 ? true : false}
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleAddDependents}
          className={
            " flex justify-center shadow-none  focus:outline-none items-center py-2 rounded-md bg-gray-50 hover:bg-gray-100"
          }
        >
          <div className={"flex flex-row items-center"}>
            <svg viewBox="0 0 24 24" width="20px" height="20px">
              <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
            </svg>
            <span className={"ml-2 text-gray-500 font-light"}>
              Add {dependDents.length === 0 ? "" : "another"} emergency contact
            </span>
          </div>
        </button>
      </div>
      <div style={{ height: "57vh" }} className="overflow-y-auto">
        {dependDents.map((dependent: DependentsInputProp, index: number) => (
          <React.Fragment key={index}>
            <div className="py-3 px-4 sm:p-6 lg:pb-8">
              <div className="mt-2 grid grid-cols-12 gap-6">
                <SingleSelectOption
                  firstName={dependent?.firstName}
                  setFirstName={(newName: string) => {
                    let newState: DependentsInputProp[] = [...dependDents];
                    newState[index] = {
                      firstName: newName,
                      relationship: dependent?.relationship,
                      lastName: dependent?.lastName,
                      dob: dependent?.dob,
                      gender: dependent?.gender,
                    };
                    setDependents(newState);
                  }}
                  relationship={dependent?.relationship}
                  setRelationShip={(newRelationship: string) => {
                    let newState: DependentsInputProp[] = [...dependDents];
                    newState[index] = {
                      firstName: dependent?.firstName,
                      relationship: newRelationship,
                      dob: dependent?.dob,
                      lastName: dependent?.lastName,
                      gender: dependent?.gender,
                    };
                    setDependents(newState);
                  }}
                  dob={dependent?.dob}
                  setDob={(newDob: string) => {
                    let newState: DependentsInputProp[] = [...dependDents];
                    newState[index] = {
                      firstName: dependent?.firstName,
                      relationship: dependent?.relationship,
                      dob: new Date(newDob),
                      lastName: dependent?.lastName,
                      gender: dependent?.gender,
                    };
                    setDependents(newState);
                  }}
                  gender={dependent?.gender}
                  setGender={(newGender: string) => {
                    let newState: DependentsInputProp[] = [...dependDents];
                    newState[index] = {
                      firstName: dependent?.firstName,
                      relationship: dependent?.relationship,
                      lastName: dependent?.lastName,
                      gender: newGender,
                      dob: dependent?.dob,
                    };
                    setDependents(newState);
                  }}
                  lastName={dependent?.lastName}
                  setLastName={(newLastName: string) => {
                    let newState: DependentsInputProp[] = [...dependDents];
                    newState[index] = {
                      gender: dependent?.gender,
                      relationship: dependent?.relationship,
                      firstName: dependent?.firstName,
                      dob: dependent?.dob,
                      lastName: newLastName,
                    };
                    setDependents(newState);
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
