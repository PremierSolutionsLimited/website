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
    token: string;
    client: {
      _id: string;
      username: string;
    };
  };
}

export interface VerifyCodeInput {
  username: string;
  medium: string;
  code: string;
}

export interface VerifyCodeOutput {
  verifyClientCode: {
    token: string;
    client: {
      _id: string;
      username: string;
    };
  };
}
