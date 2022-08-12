import React, { Fragment, useState, useEffect } from "react";
//import { DestinationComponentProp } from "./types";
//import GoogleMap from "../dropoff-map";
import {
  CheckIcon,
  SelectorIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";

const locations = [
  "Achimota",
  "Haatso",
  "University of Ghana Legon",
  "37 Military Hospital",
  "Kotoka Airport",
  "Accra Mall",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Destination({
  setTab,
  setAddress,
  setLng,
  setLat,
  dropOffLocations,
  setDropOffLocations,
}) {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState();

  const filteredLocations =
    query === ""
      ? locations
      : locations.filter((location) => {
          return location.toLowerCase().includes(query.toLowerCase());
        });

  const addToDropOffLocations = (location) => {
    setDropOffLocations([...dropOffLocations, location]);
  };

  const removeFromDropOffLocations = (location) => {
    setDropOffLocations(dropOffLocations.filter((l) => l !== location));
  };

  // useEffect(() => {
  //   if (selectedLocation) {
  //     addToDropOffLocations(selectedLocation);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedLocation]);

  return (
    <Fragment>
      <div className="mt-0  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto scrollContainer ">
        {/* <GoogleMap setLng={setLng} setLat={setLat} setAddress={setAddress} /> */}
        <Combobox
          as="div"
          value={selectedLocation}
          onChange={setSelectedLocation && addToDropOffLocations(selectedLocation)}
        >
          <Combobox.Label className="block text-base font-medium text-gray-700">
            Search For/Select Destination
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(location) => location}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredLocations.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredLocations.map((location) => (
                  <Combobox.Option
                    key={location}
                    value={location}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            "block truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {location}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-indigo-600"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
        <div>
          <div className="flow-root mt-6">
            <ul className="-my-5 divide-y divide-gray-200">
              {dropOffLocations?.map((location, locationIdx) => (
                <li key={locationIdx} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <LocationMarkerIcon className="h-8 w-8 rounded-md" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {location}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {"DropOff Destination " + (locationIdx + 1)}
                      </p>
                    </div>
                    <div>
                      <button
                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-red-700 bg-white hover:bg-gray-50"
                        onClick={() => removeFromDropOffLocations(location)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2 ">
          <button
            type="button"
            onClick={() => setTab("origin")}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Back</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            onClick={() => setTab("checklist")}
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Next</span>
          </button>
        </span>
      </div>
    </Fragment>
  );
}
