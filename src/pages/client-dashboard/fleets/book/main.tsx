import React, { Fragment, useState, useEffect } from "react";
import {
  BookTripComponentProp,
  BookTripInputProp,
  BookTripOutputProp,
  //GetTripQuoteInputProp,
  //GetTripQuotepOutputProp,
  //DamagesInput,
} from "./types";
import { Modal } from "../../../../components/modal/custom";
import { useMediaQuery } from "react-responsive";
import { IDurationType, IGroupType } from "./components/data/types";
import { ApolloError, useMutation } from "@apollo/client";
import {
  CREATE_TRIP,
  //GET_TRIP_QUOTE,
  GET_TRIP_COST_SUMMARY,
} from "../../../../services/graphql/fleet";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { useHistory } from "react-router-dom";
//import { getDamages } from "./utils/util";
import TripComponent from "./components/screens/trip";
import OriginComponent from "./components/screens/origin";
import DestinationComponent from "./components/screens/destination";
import CheckListComponent from "./components/screens/checklist";
import PreviewComponent from "./components/screens/preview";
import ValuablesComponent from "./components/screens/valuables";
import DamageComponent from "./components/screens/damage";
import StepComponent from "./components/bones";
import toast from "react-hot-toast";
import _ from "lodash";
import { TValuableType } from "./components/valuables/main";
import { TDamageType } from "./components/damage/main";

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

export type TTimeLogs = {
  startTime: Date;
  endTime: Date;
}[];

const MainComponent: React.FC<BookTripComponentProp> = ({
  show,
  setShow,
  selectedCar,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const { currentUser: currentClient } = useCurrentClient();
  const { push } = useHistory();
  const [tab, setTab] = useState<string>("trip");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<IGroupType[]>([]);
  const [durationType, setDurationType] = useState<IDurationType | undefined>();
  const [durationTypeSelected, setDurationTypeSelected] = useState<string>("");
  const [isOvernightTrip, setIsOvernightTrip] = useState<boolean>();
  const [isOutOfTown, setIsOutOfTown] = useState<boolean>();
  const [requestType, setRequesType] = useState<string>("");
  const [tripStartDate, setTripStartDate] = useState<any>("");
  const [endTime, setEndTime] = useState<Date | undefined>();

  //trip dates and times
  const [tripDates, setTripDates] = useState<any>([]);
  const [enabledStart, setEnabledStart] = useState(false);
  const [enabledDuration, setEnabledDuration] = useState(false);
  const [startTimes, setStartTimes] = useState<Date[]>([]);
  const [durations, setDurations] = useState<string[]>([]);
  const [endTimes, setEndTimes] = useState<Date[]>([]);
  const [startTime, setStartTime] = useState<any>("");
  const [duration, setDuration] = useState<string>("");
  const [timeLogs, setTimeLogs] = useState<TTimeLogs>();

  const [pickupLat, setPickupLat] = useState<string>("");
  const [pickupLng, setPickupLng] = useState<string>("");
  const [pickupAddress, setPickupAddress] = useState<string>("");

  const [, setDropOffLat] = useState<string>("");
  const [, setDropOffLng] = useState<string>("");
  const [dropOffAddress, setDropOffAddress] = useState<string>("");
  const [dropOffLocations, setDropOffLocations] = useState<string[]>([]);

  // states for check list
  //const [valuableItems] = useState<string[]>([]);
  const [dvlaRoadWorthy, setDVLARoadWorthy] = useState<boolean>(false);
  const [registeredVehicle, setRegisteredVehicle] = useState<boolean>(false);
  const [insurance, setInsurance] = useState<boolean>(false);
  const [emergencyTriangle, setEmergencyTriangle] = useState<boolean>(false);
  const [fireExtinguisher, setFireExtinguisher] = useState<boolean>(false);
  const [spareTyre, setSpareTyre] = useState<boolean>(false);
  const [valuableItems, setValuableItems] = useState<TValuableType[]>([]);
  const [damageOnVehicle, setDamageOnVehicle] = useState<TDamageType[]>([]);
  const [clientComments, setClientComments] = useState<string>("");

  const [totalTripCost, setTotalTripCost] = useState<string>("");

  //set timelogs from startTimes and endTimes
  useEffect(() => {
    setTimeLogs(
      startTimes
        .map((startTime, index) => {
          return {
            startTime: new Date(startTime),
            endTime: endTimes[index],
          };
        })
        .filter((timeLog) => {
          return timeLog.endTime !== undefined;
        })
    );
  }, [startTimes, endTimes]);
  console.log("TIME LOGS: ", timeLogs);

  // get trip quote
  const [getTripQuote, { loading: loadingTripQuoteData }] = useMutation<any>(
    GET_TRIP_COST_SUMMARY
  );
  // const [invokeGetTripRequest, { loading: gettingTripRequest }] = useMutation<
  //   GetTripQuotepOutputProp,
  //   GetTripQuoteInputProp
  // >(GET_TRIP_QUOTE);

  // pay for trip
  const [invokeBookTripRequest, { loading }] = useMutation<
    BookTripOutputProp,
    BookTripInputProp
  >(CREATE_TRIP);

  // handle get trip request

  const handleSubmitTripQuote = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // let damagesVehicle: DamagesInput[] = getDamages(damageOnVehicle);
    // let damagesWindScreen: DamagesInput[] = getDamages(crackedWindScreens);
    // let otherDamagesInput: DamagesInput[] = getDamages(
    //   otherDamages,
    //   otherDamagesDescription
    // );
    // let passengerAges: string[] = getPassengers(selectedAgeGroup);

    getTripQuote({
      variables: {
        input: {
          timeLogs: timeLogs,
          overnightTrip: isOvernightTrip,
          outOfTownTrip: isOutOfTown,
        },
      },
    })
      // invokeGetTripRequest({
      //   variables: {
      //     client: currentClient?._id as string,
      //     vehicle: selectedCar?._id as string,
      //     tripType: requestType,
      //     expectedStartTime: new Date(tripStartDate),
      //     expectedEndTime: endTime as Date,
      //     pickUpLocation: {
      //       type: "Point",
      //       coordinates: [+pickupLng, +pickupLat],
      //     },
      //     pickUpLocationName: pickupAddress,
      //     dropOffLocation: {
      //       type: "Point",
      //       coordinates: [+dropOffLng, +dropOffLat],
      //     },
      //     checklist: {
      //       registeredVehicle: registeredVehicle,
      //       validRoadWorthySticker: dvlaRoadWorthy,
      //       validInsurance: insurance,
      //       emergencyTriangle: emergencyTriangle,
      //       fireExtinguisher: fireExtinguisher,
      //       spareTyre: spareTyre,
      //       clientComments: clientComments,
      //       damagesOnVehicle: damagesVehicle,
      //       crackedWindscreens: damagesWindScreen,
      //       otherDamages: otherDamagesInput,
      //     },
      //     dropOffLocationName: dropOffAddress,
      //     passengerAges: passengerAges,
      //   },
      // })
      .then(({ data }) => {
        if (data) {
          setTotalTripCost(data?.getTripQuote?.totalCost);
          return setTab("preview");
        }
      })
      .catch((e: ApolloError) => {
        // console.log("error", e);
        toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)));
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // let damagesVehicle: DamagesInput[] = getDamages(damageOnVehicle);
    // let damagesWindScreen: DamagesInput[] = getDamages(crackedWindScreens);
    // let otherDamagesInput: DamagesInput[] = getDamages(
    //   otherDamages,
    //   otherDamagesDescription
    // );
    let passengerAges: string[] = getPassengers(selectedAgeGroup);

    invokeBookTripRequest({
      variables: {
        input: {
          client: currentClient?._id as string,
          vehicle: selectedCar?._id as string,
          tripType: requestType,
          // expectedStartTime: new Date(tripStartDate),
          // expectedEndTime: endTime as Date,
          // durationType: durationType?.type,
          timeLogs: timeLogs,
          pickUpLocation: {
            type: "Point",
            coordinates: [+pickupLng, +pickupLat],
          },
          pickUpLocationName: pickupAddress,
          // dropOffLocation: {
          //   type: "Point",
          //   coordinates: [+dropOffLng, +dropOffLat],
          // },
          dropOffLocations: dropOffLocations,
          checklist: {
            registeredVehicle: registeredVehicle,
            validRoadWorthySticker: dvlaRoadWorthy,
            validInsurance: insurance,
            emergencyTriangle: emergencyTriangle,
            fireExtinguisher: fireExtinguisher,
            spareTyre: spareTyre,
            clientComments: clientComments,
            damagesOnVehicle: damageOnVehicle,
          },
          //dropOffLocationName: dropOffAddress,
          passengerAges: passengerAges,
          overnightTrip: isOvernightTrip,
          outOfTownTrip: isOutOfTown,
        },
      },
    })
      .then(({ data }) => {
        if (data) {
          return push("/app/requests");
        }
      })
      .catch((e: ApolloError) => {
        toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)));
      });
  };

  return (
    <Fragment>
      <Modal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 70}
        canClose={false}
      >
        <div className="p-2 ">
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
          <span className={"font-medium text-md mt-5"}>
            Book a trip with your "{selectedCar?.make} {selectedCar?.model}"
          </span>
          <div className=" grid gap-4 grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5 md:grid-cols-5">
            <div className="sm:col-span-2 md:col-span-2 hidden sm:hidden md:block ">
              <div className={"top-10 sticky overflow-y-none"}>
                <StepComponent tab={tab} />
              </div>
            </div>
            <div className="sm:col-span-5 md:col-span-3 ml-0 sm:ml-0 md:ml-5  ">
              {tab === "trip" && (
                <Fragment>
                  <TripComponent
                    selectedAgeGroup={selectedAgeGroup}
                    setSelectedAgeGroup={setSelectedAgeGroup}
                    selectedDuration={durationType}
                    setSelectedDuration={setDurationType}
                    durationTypeSelected={durationTypeSelected}
                    setDurationTypeSelected={setDurationTypeSelected}
                    isOvernightTrip={isOvernightTrip}
                    setIsOvernightTrip={setIsOvernightTrip}
                    isOutOfTown={isOutOfTown}
                    setIsOutOfTown={setIsOutOfTown}
                    tripDates={tripDates}
                    setTripDates={setTripDates}
                    enabledStart={enabledStart}
                    setEnabledStart={setEnabledStart}
                    enabledDuration={enabledDuration}
                    setEnabledDuration={setEnabledDuration}
                    duration={duration}
                    setDuration={setDuration}
                    startTimes={startTimes}
                    setStartTimes={setStartTimes}
                    durations={durations}
                    setDurations={setDurations}
                    endTimes={endTimes}
                    setEndTimes={setEndTimes}
                    startTime={startTime}
                    setStartTime={setStartTime}
                    tripStartDate={tripStartDate}
                    setTripStartDate={setTripStartDate}
                    setEndTime={setEndTime}
                    endTime={endTime}
                    //timeLogs={timeLogs}
                    //setTimeLogs={setTimeLogs}
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
                    dropOffLocations={dropOffLocations}
                    setDropOffLocations={setDropOffLocations}
                  />
                </Fragment>
              )}
              {tab === "checklist" && (
                <Fragment>
                  <CheckListComponent
                    setTab={setTab}
                    handleSubmitTripQuote={handleSubmitTripQuote}
                    loading={loadingTripQuoteData}
                    //valuableItems={valuableItems}
                    registeredVehicle={registeredVehicle}
                    setRegisteredVehicle={setRegisteredVehicle}
                    dvlaRoadWorthy={dvlaRoadWorthy}
                    setDVLARoadWorthy={setDVLARoadWorthy}
                    insurance={insurance}
                    setInsurance={setInsurance}
                    emergencyTriangle={emergencyTriangle}
                    setEmergencyTriangle={setEmergencyTriangle}
                    fireExtinguisher={fireExtinguisher}
                    setFireExtinguisher={setFireExtinguisher}
                    spareTyre={spareTyre}
                    setSpareTyre={setSpareTyre}
                    clientComments={clientComments}
                    setClientComments={setClientComments}
                  />
                </Fragment>
              )}

              {tab === "valuables" && (
                <Fragment>
                  <ValuablesComponent
                    setTab={setTab}
                    setValuableItems={setValuableItems}
                    valuableItems={valuableItems}
                  />
                </Fragment>
              )}

              {tab === "damage" && (
                <Fragment>
                  <DamageComponent
                    setTab={setTab}
                    setDamage={setDamageOnVehicle}
                    damage={damageOnVehicle}
                    loading={loadingTripQuoteData}
                    handleSubmitTripQuote={handleSubmitTripQuote}
                  />
                </Fragment>
              )}

              {tab === "preview" && (
                <Fragment>
                  <PreviewComponent
                    handleSubmit={handleSubmit}
                    totalTripCost={totalTripCost}
                    loading={loading}
                    setTab={setTab}
                    timeLogs={timeLogs}
                    destinationNames={dropOffLocations}
                    tripEndDate={endTime}
                    selectedAgeGroup={selectedAgeGroup}
                    selectedDuration={durationType}
                    durationTypeSelected={durationTypeSelected}
                    duration={duration}
                    requestType={requestType}
                    tripStartDate={tripStartDate}
                    originAddress={pickupAddress}
                    destinationAddress={dropOffAddress}
                    registeredVehicle={registeredVehicle}
                    dvlaRoadWorthy={dvlaRoadWorthy}
                    insurance={insurance}
                    emergencyTriangle={emergencyTriangle}
                    fireExtinguisher={fireExtinguisher}
                    spareTyre={spareTyre}
                    damageOnVehicle={damageOnVehicle}
                    valuableItems={valuableItems}
                    clientComments={clientComments}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default MainComponent;
