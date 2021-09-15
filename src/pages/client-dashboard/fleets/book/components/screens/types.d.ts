import React from "react";
import { IDurationType, IGroupType } from "../data/types";

export interface TripComponentProp {
  selectedAgeGroup: IGroupType[];
  setSelectedAgeGroup: React.Dispatch<React.SetStateAction<IGroupType[]>>;
  selectedDuration: IDurationType | undefined;
  setSelectedDuration: React.Dispatch<
    React.SetStateAction<IDurationType | undefined>
  >;
  durationTypeSelected: string;
  setDurationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  requestType: string;
  setRequestType: React.Dispatch<React.SetStateAction<string>>;
  tripStartDate: string;
  setTripStartDate: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endTime: Date | undefined;
}

export interface GetTypesInput {
  filter: {
    deleted: {
      eq: boolean;
    };
  };
}

export interface GetTypesOutput {
  tripTypes: {
    name: string;
    _id: string;
  }[];
  tripTypesLength: number;
}

export interface OriginComponentProp {
  setLng: React.Dispatch<React.SetStateAction<string>>;
  setLat: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface DestinationComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setLng: React.Dispatch<React.SetStateAction<string>>;
  setLat: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

export interface ChecklistComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  dvlaRoadWorthy: boolean;
  setDVLARoadWorthy: React.Dispatch<React.SetStateAction<boolean>>;
  insurance: boolean;
  setInsurance: React.Dispatch<React.SetStateAction<boolean>>;
  emergencyTriangle: boolean;
  setEmergencyTriangle: React.Dispatch<React.SetStateAction<boolean>>;
  fireExtinguisher: boolean;
  setFireExtinguisher: React.Dispatch<React.SetStateAction<boolean>>;
  spareTyre: boolean;
  setSpareTyre: React.Dispatch<React.SetStateAction<boolean>>;
  damageOnVehicle: boolean;
  setDamageOnVehicle: React.Dispatch<React.SetStateAction<boolean>>;
  crackedWindScreens: boolean;
  setCrackedWindScreens: React.Dispatch<React.SetStateAction<boolean>>;
  otherDamages: boolean;
  setOtherDamages: React.Dispatch<React.SetStateAction<boolean>>;
  otherDamagesDescription: string;
  setOtherDamagesDescription: React.Dispatch<React.SetStateAction<string>>;
  clientComments: string;
  setClientComments: React.Dispatch<React.SetStateAction<string>>;
}

export interface PreviewComponentProp {
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}
