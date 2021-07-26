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

export interface ChangePasswordInputProp {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordOutputProp {
  updateClientPassword: {
    client: {
      _id: string;
    };
    token: string;
  };
}
