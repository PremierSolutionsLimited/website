import React from "react";

export interface SelectClassComponentProp {
  classSelect: IClassSelectList[];
  setClassSelect: React.Dispatch<React.SetStateAction<IClassSelectList[]>>;
}

export interface IClassSelectList {
  name: string;
  description?: string;
}

export interface SelectTypeComponentProp {
  type: IType[];
  setType: React.Dispatch<React.SetStateAction<IType[]>>;
}

export interface IType {
  name: string;
  description?: string;
}
