import React from "react";

export interface SendCodeComponentProp {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
