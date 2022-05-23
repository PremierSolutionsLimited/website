import React, { Fragment, FC, Dispatch, SetStateAction } from "react";
import SingleValuable from "./singleValuable";
import { ValuableProps } from "./singleValuable";

export type TValuableType = {
  description: string;
  images: string[];
};

export interface IMainComponentProp {
  valuables: TValuableType[];
  setValuables: Dispatch<SetStateAction<TValuableType[]>>;
}

const MainComponent: FC<IMainComponentProp> = ({ valuables, setValuables }) => {
  return (
    <Fragment>
      {valuables.map((valuable, valuableIdx) => (
        <Fragment>
          <SingleValuable
            description={""}
            setDescription={function (value: SetStateAction<string>): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default MainComponent