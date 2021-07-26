import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  total: number;
  limit: number;
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
}
