import { DamagesInput } from "../types";

export const getDamages = (status: boolean, description?: string) => {
  let result: DamagesInput[] = [];
  result.push({
    hasDamage: status,
    description: description || "",
    image: "",
  });

  return result;
};
