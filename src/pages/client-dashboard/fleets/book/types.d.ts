import React from "react";
import { MyFleet } from "../main/types";

export interface BookTripComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCar?: MyFleet;
}

export interface BookTripInputProp {
  client: string;
  vehicle: string;
  tripType: string;
  expectedStartTime: Date;
  expectedEndTime: Date;
  pickUpLocation: {
    pickupType: string;
    pickupCordinates: number[];
  };
  pickUpLocationName: $pickupLocationName;
  dropOffLocation: {
    dropOffType: string;
    dropOffCordinates: number[];
  };
  dropOffLocationName: string;
  passengerAges: string;
  notes?: string;
  extraPassenger?: boolean;
}

export interface BookTripOutputProp {
  createTripRequest: {
    _id: string;
  };
}
