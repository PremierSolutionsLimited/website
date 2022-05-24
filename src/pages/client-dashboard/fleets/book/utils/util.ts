import { DamagesInput } from "../types";

export const getDamages = (status: boolean, description?: string) => {
  let result: DamagesInput[] = [];
  result.push({
    description: description || "",
    images: [],
  });

  return result;
};
