import React, { Fragment, FC, Dispatch, SetStateAction } from "react";
import SingleDamage from "./singleDamage";


export type TDamageType = {
  description?: string;
  images?: string[];
  reporterResponse?: {
    description?: string
    images?: string[]
  }
  confrimerResponse?: boolean
  reportedBy?: "Driver" | "Client"
};

// export type TUpdateDamageType = {
//   reporterResponse: TDamageType
//   confrimerResponse: boolean
//   reportedBy: "Driver" | "Client"
// }

export interface IMainComponentProp {
  damage: TDamageType[];
  setDamage: Dispatch<SetStateAction<TDamageType[]>>;
  update?: boolean
}

const MainComponent: FC<IMainComponentProp> = ({ damage, setDamage, update }) => {
  const handleAddDamage = () => {
    if (!update) {
      setDamage([
        ...damage,
        {
          description: "",
          images: [],
        },
      ]);
    }
    else {
      setDamage([
        ...damage,
        {
          reporterResponse: {
            description: "",
            images: [],
          },
          confrimerResponse: false,
          reportedBy: "Client"
        },
      ]);
    }
  };
  return (
    <Fragment>
      <Fragment>
        <div style={{ width: "100%" }} className={"pl-3"}>
          <div className="flex items-center justify-between flex-row">
            <div />
            {damage?.length > 0 && (
              <React.Fragment>
                <div className={"text-sm text-gray-700 my-2"}>
                  {" "}
                  Damage : {damage?.length}
                </div>
              </React.Fragment>
            )}
          </div>
          <button
            //disabled={damage?.length === 5 ? true : false}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={handleAddDamage}
            className={
              " flex justify-center shadow-none  focus:outline-none items-center py-2 rounded-md bg-gold-2 hover:bg-customBlack-2"
            }
          >
            <div className={"flex flex-row items-center"}>
              <svg viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
              </svg>
              <span className={"ml-2 text-white font-light"}>
                Add {damage?.length === 0 ? "" : "another"}
                {" "}damage
              </span>
            </div>
          </button>
        </div>
      </Fragment>
      <div className="overflow-y-auto grid grid-cols-4 gap-5 mt-5 pt-3 pb-4">
        {damage?.map((valuable, index) => {
          return (
            <SingleDamage
              key={index}
              update={update}
              description={!update? valuable.description : valuable?.reporterResponse?.description}
              setDescription={(value) => {
                if (!update) {
                  damage[index].description = value;
                  setDamage([...damage]);
                }
                else {
                  if (damage[index].reporterResponse) {
                    damage[index].reporterResponse = {
                      ...damage[index].reporterResponse,
                      description: value
                    }
                    setDamage([...damage]);
                  }
                  else {
                    damage[index].reporterResponse = {
                      description: value,
                      images: [],
                    };
                    setDamage([...damage]);
                  }
                }
                //damage[index].reporterResponse? damage[index].reporterResponse={description: value, images: [] } : damage[index].description = value;
                setDamage([...damage]);
              }}
              images={valuable.images}
              setImages={(value) => {
                if (!update) {
                  damage[index].images = value;
                  setDamage([...damage]);
                }
                else {
                  if (damage[index].reporterResponse) {
                    damage[index].reporterResponse = {
                      ...damage[index].reporterResponse,
                      images: [
                        value
                      ]
                    }
                    setDamage([...damage]);
                  }
                  else {
                    damage[index].reporterResponse = {
                      description: "",
                      images: [value],
                    };
                    setDamage([...damage]);
                  }
                }
              }}
              handleRemove={() => {
                damage.splice(index, 1);
                setDamage([...damage]);
              }}
              setConfirm={(value: boolean | undefined) => {
                if (update) {
                  damage[index].confrimerResponse = value;
                  setDamage([...damage]);
                }
                
              }}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default MainComponent;
