import { Fragment } from "react";
import { ChecklistComponentProp } from "./types";
import { Switch } from "@headlessui/react";
import toast from "react-hot-toast";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckList({
  setTab,
  //valuableItems,
  registeredVehicle,
  setRegisteredVehicle,
  dvlaRoadWorthy,
  setDVLARoadWorthy,
  insurance,
  setInsurance,
  emergencyTriangle,
  setEmergencyTriangle,
  fireExtinguisher,
  setFireExtinguisher,
  spareTyre,
  setSpareTyre,
  clientComments,
  setClientComments,
  handleSubmitTripQuote,
  loading,
}: ChecklistComponentProp) {

  const handleGoToNext = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!registeredVehicle){
      return toast.error("You cannot proceed without a registered vehicle")
    }
    if (!dvlaRoadWorthy){
      return toast.error("You cannot proceed without DVLA roadworthy")
    }
    if (!insurance){
      return toast.error("You cannot proceed without insurance")
    }
    if (!emergencyTriangle){
      return toast.error("You cannot proceed without an emergency triangle")
    }
    if (!fireExtinguisher){
      return toast.error("You cannot proceed without a fire extinguisher")
    }
    if (!spareTyre){
      return toast.error("You cannot proceed without a spare tyre")
    }
    setTab("valuables")
  }

  return (
    <Fragment>
      <div className="pt-0  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto divide-y divide-gray-200">
        <div className="px-4 sm:px-6">
          <ul className="mt-2 divide-y divide-gray-200">
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm font-medium text-gray-900"
                  passive
                >
                  Registered Vehicle
                </Switch.Label>
              </div>
              <Switch
                checked={registeredVehicle}
                onChange={setRegisteredVehicle}
                className={classNames(
                  registeredVehicle ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    registeredVehicle ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm font-medium text-gray-900"
                  passive
                >
                  Valid DVLA Road Worthy Sticker
                </Switch.Label>
              </div>
              <Switch
                checked={dvlaRoadWorthy}
                onChange={setDVLARoadWorthy}
                className={classNames(
                  dvlaRoadWorthy ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    dvlaRoadWorthy ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm  font-medium text-gray-900"
                  passive
                >
                  Valid Insurance
                </Switch.Label>
              </div>
              <Switch
                checked={insurance}
                onChange={setInsurance}
                className={classNames(
                  insurance ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    insurance ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm  font-medium text-gray-900"
                  passive
                >
                  Emergency Triangle
                </Switch.Label>
              </div>
              <Switch
                checked={emergencyTriangle}
                onChange={setEmergencyTriangle}
                className={classNames(
                  emergencyTriangle ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    emergencyTriangle ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm  font-medium text-gray-900"
                  passive
                >
                  Fire Extinguisher
                </Switch.Label>
              </div>
              <Switch
                checked={fireExtinguisher}
                onChange={setFireExtinguisher}
                className={classNames(
                  fireExtinguisher ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    fireExtinguisher ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
            <Switch.Group
              as="li"
              className="py-3 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <Switch.Label
                  as="p"
                  className="text-sm  font-medium text-gray-900"
                  passive
                >
                  Spare Tyre
                </Switch.Label>
              </div>
              <Switch
                checked={spareTyre}
                onChange={setSpareTyre}
                className={classNames(
                  spareTyre ? "bg-green-500" : "bg-gray-200",
                  "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    spareTyre ? "translate-x-5" : "translate-x-0",
                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>
          </ul>
        </div>
        <div className="sm:col-span-6 mx-5 pt-3">
          <label
            htmlFor="first_name"
            className="block text-sm pb-1 font-medium leading-5 text-gray-700"
          >
            Comments
          </label>
          <div className="mt-1 rounded-none shadow-none">
            <textarea
              name=""
              id=""
              rows={2}
              required
              value={clientComments}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setClientComments(e.target.value)
              }
              placeholder={"Client Comments"}
              className={
                "rounded-md focus:outline-none border border-gray-300 h-full font-light w-full p-3 bg-white focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
              }
            ></textarea>
          </div>
        </div>
      </div>
      <div className="pt-2 mx-5 border-t border-gray-200 mt-5  flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2 ">
          <button
            type="button"
            onClick={() => setTab("destination")}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Back</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            onClick={handleGoToNext}
            //disabled={loading}
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">
              Next
            </span>
          </button>
        </span>
      </div>
    </Fragment>
  );
}
