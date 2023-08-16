import { ReactNode } from "react";

export interface ToolTipWithIconProp {
  message: object | string;
}

export interface ToolTipWithoutIconProp {
  message: any;
  children?: ReactNode;
  messageClassName?: string;
  childrenClassName?: string;
}
