import React from "react";
import { TripHistory } from "../main/types";

export interface RateDriverComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  trip?: TripHistory;
}
