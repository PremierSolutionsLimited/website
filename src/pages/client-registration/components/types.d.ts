import React from "react";
import { EmergencyInputProp } from "../bones/types";

export interface PersonalComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarInfoComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface EmergencyComponentProp {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  emergencyContact: EmergencyInputProp[];
  setEmergencyContact: React.Dispatch<
    React.SetStateAction<EmergencyInputProp[]>
  >;
}
