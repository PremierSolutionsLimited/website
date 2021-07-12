import React from "react";

// for gender select
export interface SelectGenderPreferenceComponentProp {
  genderPreference: IGenderPreference[];
  setGenderPreference: React.Dispatch<
    React.SetStateAction<IGenderPreference[]>
  >;
}

export interface IGenderPreference {
  gender: string;
}

export interface MainComponentProp {
  emergencyContact: EmergencyInputProp[];
  setEmergencyContact: React.Dispatch<
    React.SetStateAction<EmergencyInputProp[]>
  >;
}
// for emergency select
export interface SingleEmergencySelectProps {
  name: string;
  setName: (newName: string) => void;
  relationship: string;
  setRelationShip: (newRelationship: string) => void;
  telephone: string;
  setTelephone: (newTelephone: string) => void;
  phone: string;
  setPhone: (newPhone: string) => void;
  address: string;
  setAddress: (newAddress: string) => void;
}

export interface EmergencyInputProp {
  name: string;
  relationship: string;
  telephone: string;
  phone: string;
  address: string;
}
