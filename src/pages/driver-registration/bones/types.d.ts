import React from "react";

export interface SelectClassComponentProp {
  classSelect: IClassSelectList[];
  setClassSelect: React.Dispatch<React.SetStateAction<IClassSelectList[]>>;
}

export interface IClassSelectList {
  name: string;
  description?: string;
}

export interface SelectTypeComponentProp {
  type: IType[];
  setType: React.Dispatch<React.SetStateAction<IType[]>>;
}

export interface IType {
  name: string;
  value: string;
}

export interface MainComponentProp {
  dependDents: EmergencyInputProp[];
  setDependents: React.Dispatch<React.SetStateAction<EmergencyInputProp[]>>;
}
// for emergency select
export interface SingleDependentsSelectProps {
  lastName: string;
  setLastName: (newLastName: string) => void;
  relationship: string;
  setRelationShip: (newRelationship: string) => void;
  firstName: string;
  setFirstName: (newFirstName: string) => void;
  dob: string;
  setDob: (newDob: string) => void;
  gender: string;
  setGender: (newGender: string) => void;
}

export interface DependentsInputProp {
  lastName: string;
  firstName: string;
  gender: string;
  dob: date;
  relationship: string;
}
