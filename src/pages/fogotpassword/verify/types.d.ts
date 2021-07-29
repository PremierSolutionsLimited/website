import React from "react";

export interface VerifyCodeComponentProp {
  verificationCode: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
}
