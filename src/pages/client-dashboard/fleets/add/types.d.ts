import React from "react";

export interface AddCarComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
}

export interface VehicleClassesInputProp {
  filter?: {
    _id: string;
    name: string;
  };
}

export interface VehicleClassOutputProp {
  vehicleClasses: VehicleClasses[];
  vehicleClassesLength: number;
}

export interface VehicleClasses {
  _id: string;
  name: string;
  description: string;
  licenseClasses: string[];
  icon: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface AddVehicleInputProp {
  client: string;
  class: string;
  transmissionType: string;
  color: string;
  images: string[];
  model: string;
  make: string;
  registrationNumber: string;
}

export interface AddVehicleOutputProp {
  createVehicle: {
    _id: string;
  };
}
