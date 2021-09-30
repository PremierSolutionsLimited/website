import { ClientDashBoardNavigationProps, UserNavigationProp } from "./types";
import {
  DASHBOARD,
  MY_FLEET,
  HISTORY,
  REQUESTS,
  SETTINGS,
} from "../navigation/constants";

export const ClientDashBoardNavigation: ClientDashBoardNavigationProps[] = [
  {
    name: "Dashboard",
    href: DASHBOARD,
  },
  {
    name: "My Fleet",
    href: MY_FLEET,
  },
  {
    name: "Trip Requests",
    href: REQUESTS,
  },
  {
    name: "History",
    href: HISTORY,
  },
  {
    name: "Settings",
    href: SETTINGS,
  },
];

export const userNavigation: UserNavigationProp[] = [
  { name: "Your profile", href: "#" },
  {
    name: "Update password",
    href: "#",
  },
];
