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
  hasSmartPhone?: boolean;
  setHasSmartPhone?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  canUseMap?: boolean;
  setCanUseMap?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  handleImageUpload: (e: any) => void;
}

export interface ExperienceComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface LicenseComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface AvailabiltyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}
