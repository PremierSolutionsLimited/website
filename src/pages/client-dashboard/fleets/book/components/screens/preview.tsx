import { Fragment } from "react";
import { CircleSpinner } from "react-spinners-kit";
import { PreviewComponentProp } from "./types";
import { IGroupType } from "../data/types";
import { TDamageType } from "../damage/main";
import { TValuableType } from "../valuables/main";
import { getMoney } from "../../../../../../shared/ui-modules/broker";
import moment from "moment";

const PreviewComponent = ({
  handleSubmit,
  setTab,
  loading,
  timeLogs,
  tripEndDate,
  tripStartDate,
  selectedAgeGroup,
  selectedDuration,
  durationTypeSelected,
  duration,
  requestType,
  originAddress,
  destinationNames,
  destinationAddress,
  dvlaRoadWorthy,
  insurance,
  emergencyTriangle,
  fireExtinguisher,
  spareTyre,
  damageOnVehicle,
  valuableItems,
  clientComments,
  totalTripCost,
  registeredVehicle,
}: PreviewComponentProp) => {
  return (
    <Fragment>
      <dl className="pb-5 grid grid-cols-12 h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto gap-x-8 gap-y-8">
        <div className="sm:col-span-12">
          <dt className="text-sm font-light text-gray-700">Trip Cost Estimate</dt>
          <dd className="mt-1 text-sm text-gray-900">
            GH₵ {getMoney(totalTripCost)}
          </dd>
        </div>
        {/* <div className="sm:col-span-1">
          <dt className="text-sm font-light text-gray-700">Duration Type</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {selectedDuration?.name}
          </dd>
        </div> */}
        <div className="sm:col-span-6">
          <div className="text-sm font-light text-gray-700">Trip Time Logs</div>
          <div>
            {timeLogs?.map((timeLog, index) => {
              return (
                <div key={index} className="inline-flex justify-between space-x-2 items-center">
                  <div className="text-sm font-light text-gold-2">
                    {moment(timeLog.startTime).format("MMMM Do YYYY")}
                  </div>
                  {" : "}
                  <div className="mt-1 text-sm text-gray-900">
                    {`${moment(timeLog.startTime).format("h:mm a")} - ${moment(
                      timeLog.endTime
                    ).format("h:mm a")}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:col-span-6">
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
        <div className="sm:col-span-12">
          <dt className="text-sm font-light text-gray-700">Origin</dt>
          <dd className="mt-1 text-sm text-gray-900">{originAddress}</dd>
        </div>
        <div className="sm:col-span-12">
          <dt className="text-sm font-light text-gray-700">Destinations</dt>
          {destinationNames.map((item: string, itemIdx: number) => (
            <Fragment key={itemIdx}>
              <dd className="mt-1 text-sm text-gray-900">{item}</dd>
            </Fragment>
          ))}
        </div>

        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">
            Registered Vehicle
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {registeredVehicle ? "Yes" : "No"}{" "}
          </dd>
        </div>
        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">
            Road Worthy Sticker
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {dvlaRoadWorthy ? "Yes" : "No"}{" "}
          </dd>
        </div>
        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">Valid Insurance</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {insurance ? "Yes" : "No"}
          </dd>
        </div>
        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">
            {" "}
            Emergency Triangle
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {emergencyTriangle ? "Yes" : "No"}
          </dd>
        </div>
        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">
            {" "}
            Fire Extinguisher
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {fireExtinguisher ? "Yes" : "No"}
          </dd>
        </div>

        <div className="col-span-6 md:col-span-4">
          <dt className="text-sm font-light text-gray-700">Spare Tyre</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {spareTyre ? "Yes" : "No"}
          </dd>
        </div>
        {/* <div className="sm:col-span-3" /> */}
        <div className="col-span-12 md:col-span-6">
          <dt className="text-sm font-light text-gray-700">
            Damage on Vehicle?
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {damageOnVehicle?.length > 0 ? "Yes" : "No"}
          </dd>
        </div>
        {damageOnVehicle?.length > 0 && (
          <div className="sm:col-span-12">
            <dt className="text-sm font-light text-gray-700">
              {" "}
              Damage Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {damageOnVehicle?.map((item: TDamageType, itemIdx: number) => (
                <Fragment key={itemIdx}>
                  <dd className="mt-2 mr-2 border rounded-md border-gray-200 p-2 text-sm text-gray-900">
                    {item?.description}
                  </dd>
                </Fragment>
              ))}
            </dd>
          </div>
        )}
        <div className="col-span-12 md:col-span-6">
          <dt className="text-sm font-light text-gray-700">
            Valuables In Vehicle?
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {valuableItems?.length > 0 ? "Yes" : "No"}
          </dd>
        </div>
        {valuableItems?.length > 0 && (
          <div className="sm:col-span-12">
            <dt className="text-sm font-light text-gray-700">
              {" "}
              Item Name/Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {valuableItems?.map((item: TValuableType, itemIdx: number) => (
                <Fragment key={itemIdx}>
                  <dd className="mt-2 mr-2 border rounded-md border-gray-200 p-2 text-sm text-gray-900">
                    {item?.description}
                  </dd>
                </Fragment>
              ))}
            </dd>
          </div>
        )}
        {clientComments && (
          <Fragment>
            <div className="sm:col-span-6">
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
            onClick={() => setTab("damage")}
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
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
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
