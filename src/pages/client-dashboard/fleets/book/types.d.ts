import React from "react";
import { MyFleet } from "../main/types";

export interface BookTripComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCar?: MyFleet;
}
