import { IGenderPreference } from "../bones/types";

export const getGenderPreference = (gender: IGenderPreference[]) => {
  return gender?.reduce(
    (accumulator: string[], currentValue: IGenderPreference) => {
      let values = currentValue?.gender;
      accumulator.push(values);
      return accumulator;
    },
    []
  );
};
