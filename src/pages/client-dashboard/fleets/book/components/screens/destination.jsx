import React, { Fragment, useState, useEffect } from "react";
//import { GET_LOCATIONS } from "../../../../../../services/graphql/fleet";
//import { useQuery } from "@apollo/client";
//import { DestinationComponentProp } from "./types";
//import GoogleMap from "../dropoff-map";
import { Combobox } from "@headlessui/react";
import {
  SearchIcon,
  ExclamationCircleIcon,
  LocationMarkerIcon
} from "@heroicons/react/outline";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import {DataLoader} from "../../../../../../shared/loaders"
// const locations = [
//   "Achimota",
//   "Haatso",
//   "University of Ghana Legon",
//   "37 Military Hospital",
//   "Kotoka Airport",
//   "Accra Mall",
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const libraries = ["places"];
// const options = {
//   componentRestrictions: { country: "gh" },
// };

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

   const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    region: "gh",
  });

  // const {
  //   data: locations,
  //   loading,
  //   error,
  // } = useQuery(GET_LOCATIONS, {
  //   variables: {
  //     search: {
  //       query: query,
  //       fields: ["name"],
  //     },
  //   },
  // });

  // const filteredLocations =
  //   query === ""
  //     ? locations
  //     : locations.filter((location) => {
  //         return location.toLowerCase().includes(query.toLowerCase());
  //       });

  const addToDropOffLocations = (query) => {
    setDropOffLocations([...dropOffLocations, query]);
  };

  const removeFromDropOffLocations = (location) => {
    setDropOffLocations(dropOffLocations.filter((l) => l !== location));
  };

  useEffect(() => {
    if (selectedLocation) {
      addToDropOffLocations(selectedLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation, setSelectedLocation]);

  return (
    <Fragment>
      <div className="mt-0  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto scrollContainer ">
        {/* <GoogleMap setLng={setLng} setLat={setLat} setAddress={setAddress} /> */}
        {/* <Combobox
          as="div"
          value={selectedLocation}
          onChange={setSelectedLocation}
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

            {loading ? (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Combobox.Option
                  className={
                    "relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  }
                >
                  Loading Locations...
                </Combobox.Option>
              </Combobox.Options>
            ) : error ? (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Combobox.Option
                  className={
                    "relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  }
                >
                  Error Loading Locations...
                </Combobox.Option>
              </Combobox.Options>
            ) : (
              locations?.locations?.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locations?.locations?.map((location) => (
                    <Combobox.Option
                      key={location?._id}
                      value={location?.name}
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
                            {location?.name}
                          </span>

                          {selected && (
                            <span
                              className={classNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-white" : "text-indigo-600"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )
            )}
          </div>
        </Combobox> */}
        {isLoaded ? (
          <PlacesAutomcomplete
            location={query}
            setLocation={setQuery}
            handleCreateLocation={addToDropOffLocations}
            //loading={loading}
            //error={error}
          />
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center">
              <ExclamationCircleIcon className="h-10 w-10 text-red-400" />
              <span className="text-red-400">
                Google Maps API is not loaded
              </span>
            </div>
          </div>
        )}
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
                        {"Dropoff Destination " + (locationIdx + 1)}
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

const PlacesAutomcomplete = ({ location, setLocation, handleCreateLocation, loading }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [typing, setTyping] = useState(false);

  const handleSelect = async (address) => {
    console.log(address);
    setValue(address, false);
    //setQuery(address);
    clearSuggestions();
    setTyping(false);

    const results = await getGeocode({ address });
    console.log(results);
    //const { lat, lng } = await getLatLng(results[0]);
    setLocation(address);
  };

  useEffect(() => {
    setLocation(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Fragment>
      <div className="mt-5">
        <Combobox onChange={(item) => handleSelect(item)} value={value}>
          <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col space-y-2">
            <div className="relative flex-grow">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-1 border-gray-300 bg-gray-50 pl-11 pr-4 rounded-md shadow-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-gray-100 sm:text-sm"
                placeholder="Search for location or enter location name..."
                onChange={(event) => {
                  setValue(event.target.value);
                  setTyping(true);
                }}
                displayValue={value}
                disabled={!ready}
              />
            </div>
            <div className="sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-3 border border-transparent shadow-sm font-medium rounded-md text-white bg-customBlack-2 hover:text-gold-2 hover:border hover:border-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={() => handleCreateLocation(location)}
                disabled={loading || !value}
              >
                {loading ? (
                    <DataLoader color={"white"} size={5} />
                    ) : (
                    "Add Location"
                    )}
              </button>
            </div>
          </div>

          <div className="overflow-y-scroll">
            {status === "OK" && (
              <Combobox.Options static className="max-h-96 scroll-py-3 p-3">
                {data?.map(({ place_id, description }) => (
                  <Combobox.Option
                    key={place_id}
                    value={description}
                    className={({ active }) =>
                      classNames(
                        "flex cursor-pointer select-none rounded-xl p-3",
                        active && "bg-gray-200"
                      )
                    }
                  >
                    {({ active }) => (
                      <>
                        <div
                          className={classNames(
                            "flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold-2"
                          )}
                        >
                          <LocationMarkerIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4 flex-auto">
                          <p
                            className={classNames(
                              "text-sm font-medium",
                              active ? "text-gray-900" : "text-gray-700"
                            )}
                          >
                            {description}
                          </p>
                        </div>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
          {value !== "" && data?.length === 0 && typing && (
            <div className="py-14 px-6 text-center text-sm sm:px-14">
              <ExclamationCircleIcon
                type="outline"
                name="exclamation-circle"
                className="mx-auto h-6 w-6 text-gray-400"
              />
              <p className="mt-4 font-semibold text-gray-900">
                No locations found
              </p>
            </div>
          )}
        </Combobox>
      </div>
    </Fragment>
  );
};
