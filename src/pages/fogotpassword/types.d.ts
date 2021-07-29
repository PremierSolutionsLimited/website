import React from "react";

export interface ForgotPasswordComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SendCodeInput {
  username: string;
  medium: string;
}

export interface SendCodeOutput {
  sendClientCode: {
    _id: string;
  };
}
