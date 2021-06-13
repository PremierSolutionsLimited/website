import React from "react";

export interface SelectGenderPreferenceComponentProp {
  genderPreference: IGenderPreference[];
  setGenderPreference: React.Dispatch<
    React.SetStateAction<IGenderPreference[]>
  >;
}

export interface IGenderPreference {
  gender: string;
}
