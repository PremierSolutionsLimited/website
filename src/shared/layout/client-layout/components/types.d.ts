import React from "react";

export interface ClientDashBoardNavigationProps {
  href: string;
  name: string;
}

export interface UserNavigationProp {
  href: string;
  name: string;
}

export interface ChangePasswordComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
