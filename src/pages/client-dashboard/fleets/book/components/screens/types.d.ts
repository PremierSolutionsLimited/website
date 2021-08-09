import React from "react";

export interface TripComponentProp {
  selectedAgeGroup: any;
  setSelectedAgeGroup: React.Dispatch<React.SetStateAction<any>>;
  selectedDuration: any;
  setSelectedDuration: React.Dispatch<React.SetStateAction<any>>;
  durationTypeSelected: string;
  setDurationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  tripStartDate: string;
  setTripStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
