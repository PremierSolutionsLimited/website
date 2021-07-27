import React from "react";
import { MyFleet } from "../main/types";

export interface UpdateVehicleComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  selectedVehicle?: MyFleet;
}

export interface UpdateVehicleInputProp {
  vehicleId: string;
  class: string;
  transmissionType: string;
  color: string;
  images: string[];
  model: string;
  make: string;
  registrationNumber: string;
}

export interface UpdateVehicleOutputProp {
  updateVehicle: {
    _id: string;
  };
}
