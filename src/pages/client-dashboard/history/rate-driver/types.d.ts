import React from "react";
import { TripHistory } from "../main/types";

export interface RateDriverComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  trip?: TripHistory;
  refetch: () => void;
}

export interface RateDriverInputProp {
  tripId: string;
  rating: number;
  review: string;
}

export interface RateDriverOutputProp {
  clientRateTrip: {
    _id: string;
  };
}
