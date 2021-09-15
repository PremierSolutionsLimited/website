import { DamagesInput } from "../types";

export const getDamages = (status: boolean, description?: string) => {
  let result: DamagesInput[] = [];
  result.push({
    hasDamage: status,
    description: description || undefined,
    image: undefined,
  });

  return result;
};
