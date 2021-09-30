import { lazy } from "react";
import { RouteProp } from "./types";
import { DASHBOARD, MY_FLEET, SETTINGS, HISTORY, REQUESTS } from "./constants";

const Dashboard = lazy(
  () => import("../../../../pages/client-dashboard/dashboard")
);
const MyFleetComponent = lazy(
  () => import("../../../../pages/client-dashboard/fleets")
);
const HistoryComponent = lazy(
  () => import("../../../../pages/client-dashboard/history")
);
const SettingsComponent = lazy(
  () => import("../../../../pages/client-dashboard/settings")
);
const TripRequestsComponent = lazy(
  () => import("../../../../pages/client-dashboard/triprequest")
);

const routes: RouteProp[] = [
  {
    component: Dashboard,
    name: "Dashboard",
    path: DASHBOARD,
    exact: true,
  },
  {
    component: MyFleetComponent,
    name: "My Fleets",
    path: MY_FLEET,
    exact: true,
  },
  {
    component: HistoryComponent,
    name: "History Management",
    path: HISTORY,
    exact: true,
  },
  {
    component: TripRequestsComponent,
    name: "Trip Requests Management",
    path: REQUESTS,
    exact: true,
  },

  {
    component: SettingsComponent,
    name: "Settings",
    path: SETTINGS,
    exact: true,
  },
];

export default routes;
