import React, { Fragment, useState } from "react";
import {
  BookTripComponentProp,
  BookTripInputProp,
  BookTripOutputProp,
  GetTripQuoteInputProp,
  GetTripQuotepOutputProp,
  DamagesInput,
} from "./types";
import { Modal } from "../../../../components/modal/custom";
import { useMediaQuery } from "react-responsive";
import { IDurationType, IGroupType } from "./components/data/types";
import { ApolloError, useMutation } from "@apollo/client";
import {
  CREATE_TRIP,
  GET_TRIP_QUOTE,
} from "../../../../services/graphql/fleet";
import { useCurrentClient } from "../../../../services/context/currentClient";
import { getDamages } from "./utils/util";
import TripComponent from "./components/screens/trip";
import OriginComponent from "./components/screens/origin";
import DestinationComponent from "./components/screens/destination";
import CheckListComponent from "./components/screens/checklist";
import PreviewComponent from "./components/screens/preview";
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
  const [tab, setTab] = useState<string>("trip");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<IGroupType[]>([]);
  const [durationType, setDurationType] = useState<IDurationType | undefined>();
  const [durationTypeSelected, setDurationTypeSelected] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [requestType, setRequesType] = useState<string>("");
  const [tripStartDate, setTripStartDate] = useState<any>("");
  const [endTime, setEndTime] = useState<Date | undefined>();

  const [pickupLat, setPickupLat] = useState<string>("");
  const [pickupLng, setPickupLng] = useState<string>("");
  const [pickupAddress, setPickupAddress] = useState<string>("");

  const [dropOffLat, setDropOffLat] = useState<string>("");
  const [dropOffLng, setDropOffLng] = useState<string>("");
  const [dropOffAddress, setDropOffAddress] = useState<string>("");

  // states for check list
  const [valuableItems] = useState<string[]>([]);
  const [dvlaRoadWorthy, setDVLARoadWorthy] = useState<boolean>(false);
  const [registeredVehicle, setRegisteredVehicle] = useState<boolean>(false);
  const [insurance, setInsurance] = useState<boolean>(false);
  const [emergencyTriangle, setEmergencyTriangle] = useState<boolean>(false);
  const [fireExtinguisher, setFireExtinguisher] = useState<boolean>(false);
  const [spareTyre, setSpareTyre] = useState<boolean>(false);
  const [damageOnVehicle, setDamageOnVehicle] = useState<boolean>(false);
  const [crackedWindScreens, setCrackedWindScreens] = useState<boolean>(false);
  const [otherDamages, setOtherDamages] = useState<boolean>(false);
  const [otherDamagesDescription, setOtherDamagesDescription] =
    useState<string>("");
  const [clientComments, setClientComments] = useState<string>("");

  const [totalTripCost, setTotalTripCost] = useState<string>("");

  // get trip quote
  const [invokeGetTripRequest, { loading: gettingTripRequest }] = useMutation<
    GetTripQuotepOutputProp,
    GetTripQuoteInputProp
  >(GET_TRIP_QUOTE);

  // pay for trip
  const [invokeBookTripRequest, { loading }] = useMutation<
    BookTripOutputProp,
    BookTripInputProp
  >(CREATE_TRIP);

  // handle get trip request

  const handleSubmitTripQuote = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let damagesVehicle: DamagesInput[] = getDamages(damageOnVehicle);
    let damagesWindScreen: DamagesInput[] = getDamages(crackedWindScreens);
    let otherDamagesInput: DamagesInput[] = getDamages(
      otherDamages,
      otherDamagesDescription
    );
    let passengerAges: string[] = getPassengers(selectedAgeGroup);
    invokeGetTripRequest({
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
        checklist: {
          registeredVehicle: registeredVehicle,
          validRoadWorthySticker: dvlaRoadWorthy,
          validInsurance: insurance,
          emergencyTriangle: emergencyTriangle,
          fireExtinguisher: fireExtinguisher,
          spareTyre: spareTyre,
          clientComments: clientComments,
          damagesOnVehicle: damagesVehicle,
          crackedWindscreens: damagesWindScreen,
          otherDamages: otherDamagesInput,
        },
        dropOffLocationName: dropOffAddress,
        passengerAges: passengerAges,
      },
    })
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
    let damagesVehicle: DamagesInput[] = getDamages(damageOnVehicle);
    let damagesWindScreen: DamagesInput[] = getDamages(crackedWindScreens);
    let otherDamagesInput: DamagesInput[] = getDamages(
      otherDamages,
      otherDamagesDescription
    );
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
        checklist: {
          registeredVehicle: registeredVehicle,
          validRoadWorthySticker: dvlaRoadWorthy,
          validInsurance: insurance,
          emergencyTriangle: emergencyTriangle,
          fireExtinguisher: fireExtinguisher,
          spareTyre: spareTyre,
          clientComments: clientComments,
          damagesOnVehicle: damagesVehicle,
          crackedWindscreens: damagesWindScreen,
          otherDamages: otherDamagesInput,
        },
        dropOffLocationName: dropOffAddress,
        passengerAges: passengerAges,
      },
    })
      .then(({ data }) => {
        if (data) {
          return window.location.replace(
            data?.createTripRequest?.payment?.authorizationUrl
          );
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
                  />
                </Fragment>
              )}
              {tab === "checklist" && (
                <Fragment>
                  <CheckListComponent
                    setTab={setTab}
                    handleSubmitTripQuote={handleSubmitTripQuote}
                    loading={gettingTripRequest}
                    valuableItems={valuableItems}
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
                    damageOnVehicle={damageOnVehicle}
                    setDamageOnVehicle={setDamageOnVehicle}
                    crackedWindScreens={crackedWindScreens}
                    setCrackedWindScreens={setCrackedWindScreens}
                    otherDamages={otherDamages}
                    setOtherDamages={setOtherDamages}
                    otherDamagesDescription={otherDamagesDescription}
                    setOtherDamagesDescription={setOtherDamagesDescription}
                    clientComments={clientComments}
                    setClientComments={setClientComments}
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
                    crackedWindScreens={crackedWindScreens}
                    otherDamages={otherDamages}
                    otherDamagesDescription={otherDamagesDescription}
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
