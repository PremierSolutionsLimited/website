import React from "react";
import { EmergencyInputProp, IGenderPreference } from "../bones/types";

export interface PersonalComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  nationality: string;
  setNationality: React.Dispatch<React.SetStateAction<string>>;
  placeOfResidence: string;
  setPlaceOfResidence: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  handleImageUpload: (e: any) => void;
  clientImageUrl: string;
}

export interface OtherInfoComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  digitalAddress: string;
  setDigitalAddress: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  idType: string;
  setIdType: React.Dispatch<React.SetStateAction<string>>;
  idNumber: string;
  setIdNumber: React.Dispatch<React.SetStateAction<string>>;
  idIssueDate: string;
  setIdIssueDate: React.Dispatch<React.SetStateAction<string>>;
  idExpiryDate: string;
  setIdExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  genderPreference: IGenderPreference[];
  setGenderPreference: React.Dispatch<
    React.SetStateAction<IGenderPreference[]>
  >;
}

export interface EmergencyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  emergencyContact: EmergencyInputProp[];
  setEmergencyContact: React.Dispatch<
    React.SetStateAction<EmergencyInputProp[]>
  >;
  completingApplication: boolean;
  uploadingToFirebase: boolean;
  handleHandleCompleteRegistration: (
    e: React.FormEvent<HTMLButtonElement>
  ) => void;
}
