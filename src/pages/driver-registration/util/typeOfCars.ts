import { IType } from "../bones/types";

export const getTypeOfCars = (carTypes: IType[]) => {
  return carTypes?.reduce((accumulator: string[], currentValue: IType) => {
    let values = currentValue?.value;
    accumulator.push(values);
    return accumulator;
  }, []);
};
