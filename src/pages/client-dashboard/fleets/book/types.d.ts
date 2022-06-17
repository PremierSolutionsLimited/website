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
  expectedEndTime?: Date;
  durationType?: string;
  pickUpLocation?: {
    type: string;
    coordinates: number[];
  };
  pickUpLocationName: string;
  dropOffLocation?: {
    type: string;
    coordinates: number[];
  };
  checklist: Checklist;
  dropOffLocationName: string;
  passengerAges: string[];
  notes?: string;
  extraPassenger?: boolean;
}

export interface BookTripOutputProp {
  createTripRequest: {
    payment: {
      authorizationUrl: string;
    };
  };
}

export interface GetTripQuoteInputProp {
  client: string;
  vehicle: string;
  tripType: string;
  expectedStartTime: Date;
  expectedEndTime: Date;
  pickUpLocation: {
    type: string;
    coordinates: number[];
  };
  pickUpLocationName: string;
  dropOffLocation: {
    type: string;
    coordinates: number[];
  };
  dropOffLocationName: string;
  passengerAges: string[];
  notes?: string;
  extraPassenger?: boolean;
  checklist: Checklist;
}

export interface GetTripQuotepOutputProp {
  getTripQuote: {
    totalCost: string;
  };
}

interface Checklist {
  registeredVehicle: boolean;
  validRoadWorthySticker: boolean;
  validInsurance: boolean;
  emergencyTriangle: boolean;
  fireExtinguisher: boolean;
  spareTyre: boolean;
  clientComments: string;
  damagesOnVehicle: DamagesInput[];
}
export interface DamagesInput {
  description: string;
  images: string[];
}
