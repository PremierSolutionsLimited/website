import React from "react";

export interface SelectClassComponentProp {
  classSelect: IClassSelectList[];
  setClassSelect: React.Dispatch<React.SetStateAction<IClassSelectList[]>>;
}

export interface IClassSelectList {
  name: string;
  description: string;
}
