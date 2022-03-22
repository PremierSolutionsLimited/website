import React, { Fragment } from "react";
import { DestinationComponentProp } from "./types";
import GoogleMap from "../dropoff-map";

export default function Destination({
  setTab,
  setAddress,
  setLng,
  setLat,
}: DestinationComponentProp) {
  return (
    <Fragment>
      <div className="mt-0  h-book-trip-height sm:h-book-trip-height md:h-book-trip-height overflow-y-auto scrollContainer ">
        <GoogleMap setLng={setLng} setLat={setLat} setAddress={setAddress} />
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
