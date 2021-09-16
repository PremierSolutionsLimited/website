import React, { Fragment } from "react";
import { OriginComponentProp } from "./types";
import GoogleMap from "../pickup-map";

export default function Origin({
  setTab,
  setLng,
  setLat,
  setAddress,
}: OriginComponentProp) {
  return (
    <Fragment>
      <div className="mt-0  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto  scrollContainer ">
        <GoogleMap setLng={setLng} setLat={setLat} setAddress={setAddress} />
      </div>
      <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
        <span className="inline-flex rounded-none shadow-sm mr-2 ">
          <button
            type="button"
            onClick={() => setTab("trip")}
            className="inline-flex rounded-lg items-center px-6 py-2 border border-pink-600 text-sm leading-5 font-light text-pink-600 hover:text-pink-600 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Back</span>
          </button>
        </span>
        <span className="inline-flex rounded-none shadow-sm ">
          <button
            type="button"
            onClick={() => setTab("destination")}
            className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-gray focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
          >
            <span className="mx-1">Next</span>
          </button>
        </span>
      </div>
    </Fragment>
  );
}
