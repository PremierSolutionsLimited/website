import React from "react";

export interface FleetDataViewComponentProp {
  onView: (dataFromCard: any) => void;
  onUpdate: (dataFromCard: any) => void;
  data: any;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
}

export interface FleetCardComponentProp {
  onView: (dataFromCard: any) => void;
  onUpdate: (dataFromCard: any) => void;
  data: any;
}
