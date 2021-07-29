import { TripHistory } from "../main/types";

export interface ViewTripComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  trip?: TripHistory;
}
