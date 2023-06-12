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
  tripCostItems,
  registeredVehicle,
}: PreviewComponentProp) => {
  return (
    <Fragment>
      <div className="h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto divide-y divide-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Total Trip Cost Estimate
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              GH₵ {getMoney(totalTripCost)}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Breakdown of Trip Cost Estimate
            </dt>
            <dd className="mt-1 space-y-1 text-sm text-gray-900">
              {tripCostItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-600 rounded-md p-2"
                >
                  <div className="flex justify-start space-x-1 items-center">
                    <div className="font-light text-gold-2">
                      Unit: {item?.unit}
                    </div>
                  </div>
                  <div className="flex justify-start space-x-1 items-center">
                    <div className="font-light text-gold-2">
                      Title: {item?.title}
                    </div>
                  </div>
                  <div className="flex justify-start space-x-1 items-center">
                    <div className="font-light text-gold-2">
                      Rate: {item?.rate}
                    </div>
                  </div>
                  <div className="flex justify-start space-x-1 items-center">
                    <div className="font-light text-gold-2">
                      Cost: {item?.cost}
                    </div>
                  </div>
                </div>
              ))}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">Trip Time Logs</dt>
            <div className="mt-1 space-y-1">
              {timeLogs?.map((timeLog, index) => (
                <div key={index} className="flex items-center">
                  <div className="font-light text-gold-2">
                    {moment(timeLog.startTime).format("MMMM Do YYYY")}
                  </div>
                  <div className="mx-1">:</div>
                  <div>{`${moment(timeLog.startTime).format(
                    "h:mm a"
                  )} - ${moment(timeLog.endTime).format("h:mm a")}`}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">Age Groups</dt>
            <div className="flex flex-wrap mt-1 space-x-2">
              {selectedAgeGroup?.map((item: IGroupType, itemIdx: number) => (
                <dd
                  key={itemIdx}
                  className="border rounded-md border-gray-200 p-2 text-sm text-gray-900"
                >
                  {item?.name}
                </dd>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">Origin</dt>
            <dd className="mt-1 text-sm text-gray-900">{originAddress}</dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">Destinations</dt>
            {destinationNames.map((item: string, itemIdx: number) => (
              <dd key={itemIdx} className="mt-1 text-sm text-gray-900">
                {item}
              </dd>
            ))}
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Registered Vehicle
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {registeredVehicle ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Road Worthy Sticker
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {dvlaRoadWorthy ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Valid Insurance
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {insurance ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Emergency Triangle
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {emergencyTriangle ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Fire Extinguisher
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {fireExtinguisher ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">Spare Tyre</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {spareTyre ? "Yes" : "No"}
            </dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Damage on Vehicle?
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {damageOnVehicle?.length > 0 ? "Yes" : "No"}
            </dd>
          </div>
          {damageOnVehicle?.length > 0 && (
            <div className="col-span-1">
              <dt className="text-sm font-light text-gray-700">
                Damage Description
              </dt>
              <dd className="mt-1 space-y-2 text-sm text-gray-900">
                {damageOnVehicle?.map((item: TDamageType, itemIdx: number) => (
                  <div
                    key={itemIdx}
                    className="border rounded-md border-gray-200 p-2"
                  >
                    {item?.description}
                  </div>
                ))}
              </dd>
            </div>
          )}
          <div className="col-span-1">
            <dt className="text-sm font-light text-gray-700">
              Valuables In Vehicle?
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {valuableItems?.length > 0 ? "Yes" : "No"}
            </dd>
          </div>
          {valuableItems?.length > 0 && (
            <div className="col-span-1">
              <dt className="text-sm font-light text-gray-700">
                Item Name/Description
              </dt>
              <dd className="mt-1 space-y-2 text-sm text-gray-900">
                {valuableItems?.map((item: TValuableType, itemIdx: number) => (
                  <div
                    key={itemIdx}
                    className="border rounded-md border-gray-200 p-2"
                  >
                    {item?.description}
                  </div>
                ))}
              </dd>
            </div>
          )}
          {clientComments && (
            <div className="col-span-1">
              <dt className="text-sm font-light text-gray-700">Comments</dt>
              <dd className="mt-1 text-sm text-gray-900">{clientComments}</dd>
            </div>
          )}
        </div>
      </div>

      <div className="pt-2 border-t border-gray-200 mt-5 flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2">
          <button
            type="button"
            onClick={() => setTab("damage")}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Back</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm">
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
