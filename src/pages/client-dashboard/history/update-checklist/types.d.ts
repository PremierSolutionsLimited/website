import React from "react";
import { TripHistory } from "../main/types";

export interface UpdateChecklistComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  trip?: TripHistory;
  refetch: () => void;
}

export interface UpdateTripChecklistInputProp {
  input: {
    tripId: string;
    damagesOnVehicle?: any[];
    valuablesInVehicle?: any[];
    clientComments?: string;
  }
}

export interface UpdateTripChecklistOutputProp {
  updateTripChecklist: {
    _id: string;
    code: string;
  };
}
