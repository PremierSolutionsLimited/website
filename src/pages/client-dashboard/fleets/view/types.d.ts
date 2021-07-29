import React from "react";
import { MyFleet } from "../main/types";

export interface ViewFleetComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  vehicle?: MyFleet;
}
