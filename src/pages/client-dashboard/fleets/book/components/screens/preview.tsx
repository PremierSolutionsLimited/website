import { Fragment } from "react";
import { CircleSpinner } from "react-spinners-kit";
import { PreviewComponentProp } from "./types";
import { IGroupType } from "../data/types";
import { getMoney } from "../../../../../../shared/ui-modules/broker";
import moment from "moment";

const PreviewComponent = ({
  handleSubmit,
  setTab,
  loading,
  tripEndDate,
  tripStartDate,
  selectedAgeGroup,
  selectedDuration,
  durationTypeSelected,
  duration,
  requestType,
  originAddress,
  destinationAddress,
  dvlaRoadWorthy,
  insurance,
  emergencyTriangle,
  fireExtinguisher,
  spareTyre,
  damageOnVehicle,
  clientComments,
  totalTripCost,
  registeredVehicle,
}: PreviewComponentProp) => {
  return (
    <Fragment>
      <dl className="grid grid-cols-1  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto gap-x-4 gap-y-8 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Trip Cost</dt>
          <dd className="mt-1 text-sm text-gray-900">
            GH₵ {getMoney(totalTripCost)}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-light text-gray-700">Trip Start Date</dt>

          <dd className="mt-1 text-sm text-gray-900">
            {" "}
            {moment(tripStartDate).format("MMMM Do, YYYY")}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-light text-gray-700">Trip End Date</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {" "}
            {moment(tripEndDate).format("MMMM Do, YYYY  hh:mm A")}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Duration Type</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {selectedDuration?.name}
          </dd>
        </div>
        <div className="sm:col-span-3">
          <dt className="text-sm font-light text-gray-700"> Age Groups</dt>
          <div className="flex flex-row flex-wrap items-center">
            {selectedAgeGroup?.map((item: IGroupType, itemIdx: number) => (
              <Fragment key={itemIdx}>
                <dd className="mt-2 mr-2 border rounded-md border-gray-200 p-2 text-sm text-gray-900">
                  {item?.name}
                </dd>
              </Fragment>
            ))}
          </div>
        </div>

        {/* <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Request Type</dt>
          <dd className="mt-1 text-sm text-gray-900">{0}</dd>
        </div> */}
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            {" "}
            Number of {selectedDuration?.name}
          </dt>
          <dd className="mt-1 text-sm text-gray-900">{duration}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-light text-gray-700">Origin</dt>
          <dd className="mt-1 text-sm text-gray-900">{originAddress}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-light text-gray-700">Destination</dt>
          <dd className="mt-1 text-sm text-gray-900">{destinationAddress}</dd>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            Registered Vehicle
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {registeredVehicle ? "Yes" : "No"}{" "}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            Road Worthy Sticker
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {dvlaRoadWorthy ? "Yes" : "No"}{" "}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Valid Insurance</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {insurance ? "Yes" : "No"}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            {" "}
            Emergency Triangle
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {emergencyTriangle ? "Yes" : "No"}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            {" "}
            Fire Extinguisher
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {fireExtinguisher ? "Yes" : "No"}
          </dd>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Spare Tyre</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {spareTyre ? "Yes" : "No"}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">
            Damage on Vehicle
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {damageOnVehicle ? "Yes" : "No"}
          </dd>
        </div>
        {clientComments && (
          <Fragment>
            <div className="sm:col-span-3">
              <dt className="text-sm font-light text-gray-700"> Comments</dt>
              <dd className="mt-1 text-sm text-gray-900">{clientComments}</dd>
            </div>
          </Fragment>
        )}
      </dl>

      <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2 ">
          <button
            type="button"
            onClick={() => setTab("checklist")}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Back</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="inline-flex w-20 flex-row justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            {loading ? (
              <Fragment>
                <CircleSpinner loading color="#fff" size={13} />
              </Fragment>
            ) : (
              <Fragment>
                <span className="mx-1">Book Trip</span>
              </Fragment>
            )}
          </button>
        </span>
      </div>
    </Fragment>
  );
};

export default PreviewComponent;
