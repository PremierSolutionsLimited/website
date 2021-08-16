import React, { Fragment, useState } from "react";
import {
  BookTripComponentProp,
  BookTripInputProp,
  BookTripOutputProp,
} from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { IDurationType, IGroupType } from "./components/data/types";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_TRIP } from "../../../../services/graphql/fleet";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { useHistory } from "react-router-dom";
import TripComponent from "./components/screens/trip";
import OriginComponent from "./components/screens/origin";
import DestinationComponent from "./components/screens/destination";
import StepComponent from "./components/bones";
import toast from "react-hot-toast";
import _ from "lodash";

// get ids of selected regions in array
export const getPassengers = (selectedAgeGroup: IGroupType[]) => {
  return selectedAgeGroup.reduce(
    (accumulator: string[], currentValue: IGroupType) => {
      let ids = currentValue?.group;
      accumulator.push(ids);
      return accumulator;
    },
    []
  );
};

const MainComponent: React.FC<BookTripComponentProp> = ({
  show,
  setShow,
  selectedCar,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const currentClient = useCurrentClient();
  const { push } = useHistory();
  const [tab, setTab] = useState<string>("trip");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<IGroupType[]>([]);
  const [durationType, setDurationType] = useState<IDurationType | undefined>();
  const [durationTypeSelected, setDurationTypeSelected] =
    useState<string>("Hours");
  const [duration, setDuration] = useState<string>("");
  const [requestType, setRequesType] = useState<string>("");
  const [tripStartDate, setTripStartDate] = useState<string>("");
  const [endTime, setEndTime] = useState<Date | undefined>();

  const [pickupLat, setPickupLat] = useState<string>("");
  const [pickupLng, setPickupLng] = useState<string>("");
  const [pickupAddress, setPickupAddress] = useState<string>("");

  const [dropOffLat, setDropOffLat] = useState<string>("");
  const [dropOffLng, setDropOffLng] = useState<string>("");
  const [dropOffAddress, setDropOffAddress] = useState<string>("");

  const [invokeBookTripRequest, { loading }] = useMutation<
    BookTripOutputProp,
    BookTripInputProp
  >(CREATE_TRIP);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let passengerAges: string[] = getPassengers(selectedAgeGroup);

    invokeBookTripRequest({
      variables: {
        client: currentClient?._id as string,
        vehicle: selectedCar?._id as string,
        tripType: requestType,
        expectedStartTime: new Date(tripStartDate),
        expectedEndTime: endTime as Date,
        pickUpLocation: {
          type: "Point",
          coordinates: [+pickupLng, +pickupLat],
        },
        pickUpLocationName: pickupAddress,
        dropOffLocation: {
          type: "Point",
          coordinates: [+dropOffLng, +dropOffLat],
        },
        dropOffLocationName: dropOffAddress,
        passengerAges: passengerAges,
      },
    })
      .then(() => {
        toast.success("Trip booked successfully");
        setShow(false);
        return push("/app/history");
      })
      .catch((e: ApolloError) => {
        console.log("error", e);

        toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)));
      });
  };

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 55}
        canClose={false}
      >
        <div className="p-8 ">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <span className={"font-medium text-md mt-5"}>
            Book a trip with your "{selectedCar?.make}"
          </span>
          <div className=" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5 md:grid-cols-5">
            <div className="sm:col-span-2 md:col-span-2 hidden sm:hidden md:block ">
              <div className={"mt-5 top-20 sticky overflow-y-none"}>
                <StepComponent tab={tab} />
              </div>
            </div>
            <div className="sm:col-span-5 md:col-span-3 ml-0 sm:ml-0 md:ml-5 ">
              {tab === "trip" && (
                <Fragment>
                  <TripComponent
                    selectedAgeGroup={selectedAgeGroup}
                    setSelectedAgeGroup={setSelectedAgeGroup}
                    selectedDuration={durationType}
                    setSelectedDuration={setDurationType}
                    durationTypeSelected={durationTypeSelected}
                    setDurationTypeSelected={setDurationTypeSelected}
                    duration={duration}
                    setDuration={setDuration}
                    tripStartDate={tripStartDate}
                    setTripStartDate={setTripStartDate}
                    setEndTime={setEndTime}
                    endTime={endTime}
                    requestType={requestType}
                    setRequestType={setRequesType}
                    setShow={setShow}
                    setTab={setTab}
                  />
                </Fragment>
              )}
              {tab === "origin" && (
                <Fragment>
                  <OriginComponent
                    setLat={setPickupLat}
                    setLng={setPickupLng}
                    setAddress={setPickupAddress}
                    setTab={setTab}
                  />
                </Fragment>
              )}
              {tab === "destination" && (
                <Fragment>
                  <DestinationComponent
                    setTab={setTab}
                    setLat={setDropOffLat}
                    setLng={setDropOffLng}
                    setAddress={setDropOffAddress}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
