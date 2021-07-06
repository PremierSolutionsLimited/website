import React from "react";

export interface PersonalComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  currentAddress: string;
  setCurrentAddress: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  telephone: string;
  setTelephone: React.Dispatch<React.SetStateAction<string>>;
  maritalStatus: string;
  setMaritalStatus: React.Dispatch<React.SetStateAction<string>>;
  numberOfChildren: string;
  setNumberOfChildren: React.Dispatch<React.SetStateAction<string>>;
  highestLevelOfEducation: string;
  setHighestLevelOfEducation: React.Dispatch<React.SetStateAction<string>>;
  nameOfSchoolCompleted: string;
  setNameOfSchoolCompleted: React.Dispatch<React.SetStateAction<string>>;
  yearOfGraduation: string;
  setYearOfGraduation: React.Dispatch<React.SetStateAction<string>>;
  hasSmartPhone: string;
  setHasSmartPhone: React.Dispatch<React.SetStateAction<string>>;
  canUseMap: string;
  setCanUseMap: React.Dispatch<React.SetStateAction<string>>;
  handleImageUpload: (e: any) => void;
}

export interface ExperienceComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  hadAccidents: string;
  setHadAccidents: React.Dispatch<React.SetStateAction<string>>;
  hasBeenArrested: string;
  setHasBeenArrested: React.Dispatch<React.SetStateAction<string>>;
  previousEmployerName: string;
  setPreviousEmployerName: React.Dispatch<React.SetStateAction<string>>;
  previousPositionHeld: string;
  setPreviousPositionHeld: React.Dispatch<React.SetStateAction<string>>;
  postionStartDate: string;
  setPositionStartDate: React.Dispatch<React.SetStateAction<string>>;
  positionEndDate: string;
  setPositionEndDate: React.Dispatch<React.SetStateAction<string>>;
  reasonForLeaving: string;
  setReasonForLeaving: React.Dispatch<React.SetStateAction<string>>;
  currentEmployerName: string;
  setCurrentEmployerName: React.Dispatch<React.SetStateAction<string>>;
  currentPositionStartDate: string;
  setCurrentPostionStartDate: React.Dispatch<React.SetStateAction<string>>;
  currentPositionHeld: string;
  setCurrentPositionHeld: React.Dispatch<React.SetStateAction<string>>;
  yearsOfDrivingExperience: string;
  setYearsOfDrivingExperience: React.Dispatch<React.SetStateAction<string>>;
}

export interface LicenseComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface AvailabiltyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}
