import { LazyExoticComponent } from "react";


export interface RouteProp {
    name: string;
    component: LazyExoticComponent<() => JSX.Element>;
    exact: boolean;
    path: string;
  
  }