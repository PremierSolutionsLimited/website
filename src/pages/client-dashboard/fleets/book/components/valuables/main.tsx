import React, { Fragment, FC, Dispatch, SetStateAction } from "react";
import SingleValuable from "./singleValuable";

export type TValuableType = {
  description: string;
  images: string[];
};

export interface IMainComponentProp {
  valuables: TValuableType[];
  setValuables: Dispatch<SetStateAction<TValuableType[]>>;
}

const MainComponent: FC<IMainComponentProp> = ({ valuables, setValuables }) => {
  const handleAddValuable = () => {
    setValuables([
      ...valuables,
      {
        description: "",
        images: [],
      },
    ]);
  };
  return (
    <Fragment>
      <Fragment>
        <div style={{ width: "100%" }} className={"pl-3"}>
          <div className="flex items-center justify-between flex-row">
            <div />
            {valuables?.length > 0 && (
              <React.Fragment>
                <div className={"text-sm text-gray-700 my-2"}>
                  {" "}
                  Valuables : {valuables?.length}
                </div>
              </React.Fragment>
            )}
          </div>
          <button
            //disabled={valuables?.length === 5 ? true : false}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={handleAddValuable}
            className={
              " flex justify-center shadow-none  focus:outline-none items-center py-2 rounded-md bg-gold-2 hover:bg-customBlack-2"
            }
          >
            <div className={"flex flex-row items-center"}>
              <svg viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
              </svg>
              <span className={"ml-2 text-white font-light"}>
                Add {valuables?.length === 0 ? "" : "another"}
                {" "}valuable item
              </span>
            </div>
          </button>
        </div>
      </Fragment>
      <div className="overflow-y-auto grid grid-cols-4 gap-5 mt-5 pt-3 pb-4 pl-3">
        {valuables?.map((valuable, index) => {
          return (
            <SingleValuable
              key={index}
              description={valuable.description}
              setDescription={(value) => {
                valuables[index].description = value;
                setValuables([...valuables]);
              }}
              images={valuable.images}
              setImages={(value) => {
                valuables[index].images = value;
                setValuables([...valuables]);
              }}
              handleRemove={() => {
                valuables.splice(index, 1);
                setValuables([...valuables]);
              }}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default MainComponent;