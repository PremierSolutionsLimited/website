import React from "react";
import { DependentsInputProp, IType } from "../bones/types";

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
  driverImageUrl: string;
  certificateImageUrl: string;
  handleCertificateUpload: (e: any) => void;
}

export interface FamilyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  nextOfKinName: string;
  setNextOfKinName: React.Dispatch<React.SetStateAction<string>>;
  nexOfKinRelation: string;
  setNextOfKinRelation: React.Dispatch<React.SetStateAction<string>>;
  nextOfKinTelephone: string;
  setNextOfKinTelephone: React.Dispatch<React.SetStateAction<string>>;
  nextOfKinPhone: string;
  setNextOfKinPhone: React.Dispatch<React.SetStateAction<string>>;
  nextOfKinAddress: string;
  setNextOfKinAddress: React.Dispatch<React.SetStateAction<string>>;
  dependents: DependentsInputProp[];
  setDependents: React.Dispatch<React.SetStateAction<DependentsInputProp[]>>;
}

export interface EmergencyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  emergencyContact: EmergencyInputProp[];
  setEmergencyContact: React.Dispatch<
    React.SetStateAction<EmergencyInputProp[]>
  >;
}

export interface CardDetailsComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  sortCode: string;
  setSortCode: React.Dispatch<React.SetStateAction<string>>;
  nameOfBank: string;
  setNameOfBank: React.Dispatch<React.SetStateAction<string>>;
  nameOfBankBranch: string;
  setNameOfBankBranch: React.Dispatch<React.SetStateAction<string>>;
  accountNumber: string;
  setAccoutNumber: React.Dispatch<React.SetStateAction<string>>;
  ssnitNumber: string;
  setSsnitNumber: React.Dispatch<React.SetStateAction<string>>;
  momoNumber: string;
  setMomoNumber: React.Dispatch<React.SetStateAction<string>>;
  ghanaCardId: string;
  setGhanaCardId: React.Dispatch<React.SetStateAction<string>>;
  ghanaCardIssueDate: string;
  setGhanaCardIssueDate: React.Dispatch<React.SetStateAction<string>>;
  ghanaCardExpiryDate: string;
  setGhanaCardExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  handleGhanaCardFrontImageUpload: (e: any) => void;
  ghanaCardFrontImageUrl: string;
  handleGhanaCardBackImageUpload: (e: any) => void;
  ghanaCardBackImageUrl: string;
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
  previousPostionStartDate: string;
  setPreviousPositionStartDate: React.Dispatch<React.SetStateAction<string>>;
  previousPositionEndDate: string;
  setPreviousPositionEndDate: React.Dispatch<React.SetStateAction<string>>;
  reasonForLeavingPreviousWork: string;
  setReasonForLeavingPreviousWork: React.Dispatch<React.SetStateAction<string>>;
  currentEmployerName: string;
  setCurrentEmployerName: React.Dispatch<React.SetStateAction<string>>;
  currentPositionStartDate: string;
  setCurrentPostionStartDate: React.Dispatch<React.SetStateAction<string>>;
  currentPositionEndDate: string;
  setCurrentPostionEndDate: React.Dispatch<React.SetStateAction<string>>;
  currentPositionHeld: string;
  setCurrentPositionHeld: React.Dispatch<React.SetStateAction<string>>;
  isEmployed: string;
  setIsEmployed: React.Dispatch<React.SetStateAction<string>>;
}

export interface LicenseComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  licenseId: string;
  setLicenseId: React.Dispatch<React.SetStateAction<string>>;
  typesOfCars: IType[];
  setTypeOfCars: React.Dispatch<React.SetStateAction<IType[]>>;
  hasALicense: string;
  setHasALicense: React.Dispatch<React.SetStateAction<string>>;
  licenseType: string;
  setLicenseType: React.Dispatch<React.SetStateAction<string>>;
  licenseIssueDate: string;
  setLicenseIssueDate: React.Dispatch<React.SetStateAction<string>>;
  licenseExpiryDate: string;
  setLicenseExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  licenseNumber: string;
  setLicenseNumber: React.Dispatch<React.SetStateAction<string>>;
  yearsOfExperienceOnLicense: string;
  setYearsOfExperienceOnLicense: React.Dispatch<React.SetStateAction<string>>;
  licenseClass: string;
  setLicenseClass: React.Dispatch<React.SetStateAction<string>>;
  handleLicenseFrontImageUpload: (e: any) => void;
  driverLicenseFrontImageUrl: string;
  handleLicenseBackImageUpload: (e: any) => void;
  driverLicenseBackImageUrl: string;
}

export interface AvailabiltyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  mondayActive: boolean;
  setMondayActive: React.Dispatch<React.SetStateAction<boolean>>;
  tuesdayActive: boolean;
  setTuesdayActive: React.Dispatch<React.SetStateAction<boolean>>;
  wednesdayActive: boolean;
  setWednesdayActive: React.Dispatch<React.SetStateAction<boolean>>;
  thursdayActive: boolean;
  setThursdayActive: React.Dispatch<React.SetStateAction<boolean>>;
  fridayActive: boolean;
  setFridayActive: React.Dispatch<React.SetStateAction<boolean>>;
  saturdayActive: boolean;
  setSaturdayActive: React.Dispatch<React.SetStateAction<boolean>>;
  sundayActive: boolean;
  setSundayActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  loading: boolean;
  uploadingToFirebase: boolean;
  currentImageLoaderPrompt: number;
}
