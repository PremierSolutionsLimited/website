import { IGroupType, IDurationType } from "./types";

export const ageGroup1: IGroupType[] = [
  { name: "Under 12 years Old", group: "GROUP1" },
  { name: "12-17 years old", group: "GROUP2" },
  { name: "18-24 years old", group: "GROUP3" },
  { name: "25-34 years old", group: "GROUP4" },
];

export const ageGroup2: IGroupType[] = [
  { name: "35-44 years old", group: "GROUP5" },
  { name: "45-54 years old", group: "GROUP6" },
  { name: "55-64 years old", group: "GROUP7" },
  { name: "65 and over", group: "GROUP H" },
];

export const duration: IDurationType[] = [
  {
    name: "Hours",
  },
  {
    name: "Days",
  },
  {
    name: "Weeks",
  },
  {
    name: "Months",
  },
];
