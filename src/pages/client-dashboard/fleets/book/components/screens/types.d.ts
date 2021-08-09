import React from "react";
import { IDurationType, IGroupType } from "../data/types";

export interface TripComponentProp {
  selectedAgeGroup: IGroupType | undefined;
  setSelectedAgeGroup: React.Dispatch<
    React.SetStateAction<IGroupType | undefined>
  >;
  selectedDuration: IDurationType | undefined;
  setSelectedDuration: React.Dispatch<
    React.SetStateAction<IDurationType | undefined>
  >;
  durationTypeSelected: string;
  setDurationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  tripStartDate: string;
  setTripStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endTime: Date | undefined;
}
