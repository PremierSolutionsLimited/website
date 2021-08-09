import { Fragment, useState } from "react";
import { BookTripComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { ageGroup1, duration } from "./components/data/age";
import TripComponent from "./components/screens/trip";
import OriginComponent from "./components/screens/origin";
import DestinationComponent from "./components/screens/destination";
import StepComponent from "./components/bones";

const MainComponent: React.FC<BookTripComponentProp> = ({
  show,
  setShow,
  selectedCar,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });
  const [tab, setTab] = useState<string>("trip");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(ageGroup1[0]);
  const [durationType, setDurationType] = useState(duration[0]);

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
          <span className={"font-medium text-md mt-5"}>Book a trip</span>
          <div className=" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5">
            <div className="sm:col-span-2 ">
              <div className={"mt-5 top-20 sticky overflow-y-none"}>
                <StepComponent tab={tab} />
              </div>
            </div>
            <div className="sm:col-span-3 ml-10 ">
              {tab === "trip" && (
                <Fragment>
                  <TripComponent
                    selectedAgeGroup={selectedAgeGroup}
                    setSelectedAgeGroup={setSelectedAgeGroup}
                    selectedDuration={durationType}
                    setSelectedDuration={setDurationType}
                  />
                </Fragment>
              )}
              {tab === "origin" && (
                <Fragment>
                  <OriginComponent />
                </Fragment>
              )}
              {tab === "destination" && (
                <Fragment>
                  <DestinationComponent />
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
