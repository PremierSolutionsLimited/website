import { TripHistory } from "../main/types";
export interface HistoryDataViewComponentProp {
  onView: (dataFromCard: TripHistory) => void;
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
  data: TripHistory;
}
