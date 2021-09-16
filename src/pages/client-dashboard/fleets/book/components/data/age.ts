import { IGroupType, IDurationType } from "./types";

export const ageGroup1: IGroupType[] = [
  { name: "Under 12 years ", group: "GROUP1" },
  { name: "12-17 years ", group: "GROUP2" },
  { name: "18-24 years ", group: "GROUP3" },
  { name: "25-34 years ", group: "GROUP4" },
];

export const ageGroup2: IGroupType[] = [
  { name: "35-44 years ", group: "GROUP5" },
  { name: "45-54 years ", group: "GROUP6" },
  { name: "55-64 years old", group: "GROUP6" },
  { name: "65 and over", group: "GROUP6" },
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
