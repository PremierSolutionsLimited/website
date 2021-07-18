import {
  HomeIcon,
  MapIcon,
  CollectionIcon,
  CogIcon,
} from "@heroicons/react/outline";

export interface ClientDashBoardNavigationProps {
  route: string;
  name: string;
  icon: any;
}

export const ClientDashBoardNavigation: ClientDashBoardNavigationProps[] = [
  {
    name: "Dashboard",
    route: "/app/",
    icon: HomeIcon,
  },
  {
    name: "My Fleet",
    route: "/app/myfleet",
    icon: MapIcon,
  },
  {
    name: "History",
    route: "/app/history",
    icon: CollectionIcon,
  },
  {
    name: "Settings",
    route: "/app/settings",
    icon: CogIcon,
  },
];
