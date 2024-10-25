import React from "react";
import { TripHistory } from "../main/types";
export interface HistoryDataViewComponentProp {
  onView: (dataFromCard: any) => void;
  onRateDriver: (dataFromCard: any) => void
  onUpdateChecklist: (dataFromCard: any) => void;
  data: TripHistory[];
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
}

export interface HistoryCardComponentProp {
  onView: (dataFromCard: any) => void;
  onRateDriver: (dataFromCard: any) => void;
  onUpdateChecklist: (dataFromCard: any) => void;
  history: TripHistory;
}
