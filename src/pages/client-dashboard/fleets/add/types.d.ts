import React from "react";

export interface AddCarComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
