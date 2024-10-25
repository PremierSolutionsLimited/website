import React from "react";
import { IDurationType, IGroupType } from "../data/types";
import { TTimeLogs } from "../../main";

export interface TripComponentProp {
  selectedAgeGroup: IGroupType[];
  setSelectedAgeGroup: React.Dispatch<React.SetStateAction<IGroupType[]>>;
  selectedDuration: IDurationType | undefined;
  setSelectedDuration: React.Dispatch<
    React.SetStateAction<IDurationType | undefined>
  >;
  durationTypeSelected: string;
  setDurationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  isOvernightTrip?: boolean;
  setIsOvernightTrip?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  isOutOfTown?: boolean,
  setIsOutOfTown: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  requestType: string;
  setRequestType: React.Dispatch<React.SetStateAction<string>>;
  tripStartDate: any;
  setTripStartDate: React.Dispatch<React.SetStateAction<any>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  tripDates: any;
  setTripDates: React.Dispatch<React.SetStateAction<any>>;
  enabledStart: boolean;
  setEnabledStart: React.Dispatch<React.SetStateAction<boolean>>;
  enabledDuration: boolean;
  setEnabledDuration: React.Dispatch<React.SetStateAction<boolean>>;
  startTimes: Date[];
  setStartTimes: React.Dispatch<React.SetStateAction<Date[]>>;
  durations: string[];
  setDurations: React.Dispatch<React.SetStateAction<string[]>>;
  endTimes: Date[];
  setEndTimes: React.Dispatch<React.SetStateAction<Date[]>>;
  startTime: Date;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  duration: string
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  endTime: Date | undefined;
  // timeLogs: TTimeLogs | undefined;
  // setTimeLogs: React.Dispatch<React.SetStateAction<TTimeLogs | undefined>>;
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
  handleSubmitTripQuote: (e: React.FormEvent<HTMLButtonElement>) => void;
  loading: boolean;
  valuableItems?: string[];
  registeredVehicle: boolean;
  setRegisteredVehicle: React.Dispatch<React.SetStateAction<boolean>>;
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
  clientComments: string;
  setClientComments: React.Dispatch<React.SetStateAction<string>>;
}

export type TTripCostItems = {
  cost: string,
  quantity: number,
  rate: string,
  title: string
  unit: string
}

export interface PreviewComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  totalTripCost: string;
  tripCostItems: TTripCostItems[]
  selectedAgeGroup: IGroupType[];
  selectedDuration: IDurationType | undefined;
  durationTypeSelected: string;
  duration: string;
  requestType: string;
  timeLogs: TTimeLogs | undefined;
  tripStartDate: string;
  tripEndDate?: Date;
  originAddress: string;
  destinationAddress: string;
  destinationNames: string[]
  registeredVehicle: boolean;
  dvlaRoadWorthy: boolean;
  insurance: boolean;
  emergencyTriangle: boolean;
  fireExtinguisher: boolean;
  spareTyre: boolean;
  damageOnVehicle?: any;
  valuableItems?: any;
  clientComments: string;
}
