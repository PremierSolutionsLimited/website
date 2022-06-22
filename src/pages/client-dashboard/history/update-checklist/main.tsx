import React, { FC, Fragment, useState, useEffect } from "react";
import {
  UpdateChecklistComponentProp,
  UpdateTripChecklistInputProp,
  UpdateTripChecklistOutputProp
} from "./types";
import { BasicModal } from "../../../../components/modal";
import { CircleSpinner } from "react-spinners-kit";
import { useMediaQuery } from "react-responsive";
import { ApolloError, useMutation } from "@apollo/client";
import { UPDATE_CHECKLIST } from "../../../../services/graphql/triprequests";
import toast from "react-hot-toast";
import _ from "lodash";
import ValuablesComponent from "../../fleets/book/components/valuables"
import DamageComponent from "../../fleets/book/components/damage"

const MainComponent: FC<UpdateChecklistComponentProp> = ({
  show,
  setShow,
  trip,
  refetch,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const [valuableItems,setValuableItems] = useState<any[]>([])
  const [damage,setDamage] = useState<any[]>([])

  useEffect(() => {
    if(trip?.checklist?.valuablesInVehicle){
      setValuableItems(trip?.checklist?.valuablesInVehicle)
    }
    if(trip?.checklist?.damagesOnVehicle){
      setDamage(trip?.checklist?.damagesOnVehicle)
    }
  }, [trip])

  console.log(valuableItems,damage)
  console.log(trip)

  const [invokeUpdateChecklist, { loading }] = useMutation<
    UpdateTripChecklistOutputProp,
    UpdateTripChecklistInputProp
  >(UPDATE_CHECKLIST);

  // const ratingChanged = (newRating: any) => {
  //   setTripRating(newRating);
  // };

  // const reset = () => {
  //   setTripRating("");
  //   setReview("");
  // };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    invokeUpdateChecklist({
      variables: {
        input: {
          tripId: trip?._id as string,
          damagesOnVehicle: valuableItems,
          valuablesInVehicle: damage,
          clientComments: trip?.checklist?.clientComments,
        }
        
      },
    })
      .then(() => {
        refetch();
        setShow(false);
        toast.success("Checklist updated successfully");
      })
      .catch((e: ApolloError) => {
        return toast.error(
          _.startCase(_.lowerCase(e.graphQLErrors[0]?.message))
        );
      });
  };
  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 80 : 40}
        height={90}
      >
        <div className="p-8 overflow-y-scroll h-full">
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="text-red-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-5 pb-5">
            <div className="col-span-4">
              <ValuablesComponent 
                valuables={valuableItems}
                setValuables={setValuableItems}
                update={true}
              />
            </div>
            <div className="col-span-4">
              <DamageComponent 
                damage={damage}
                setDamage={setDamage}
                update={true} 
              />
            </div>
          </div>
          <div className="w-full absolute bottom-3 right-5 pt-2 border-t border-gray-200 mt-5  bg-white flex justify-end">
            <span className="inline-flex rounded-none shadow-sm mr-2 ">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
            <span className="inline-flex rounded-none shadow-sm ">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                {loading ? (
                  <Fragment>
                    <CircleSpinner loading color="#fff" size={13} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="mx-1">Update Checklist</span>
                  </Fragment>
                )}
              </button>
            </span>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
