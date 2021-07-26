import { ReactNode } from "react";

export interface ToolTipWithIconProp {
  message: string;
}

export interface ToolTipWithoutIconProp {
  message: string;
  children: ReactNode;
  messageClassName: string;
}
