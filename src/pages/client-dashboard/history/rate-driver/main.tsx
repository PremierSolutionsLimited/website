import React, { FC, Fragment, useState } from "react";
import { RateDriverComponentProp } from "./types";
import { BasicModal } from "../../../../components/modal";
import { CircleSpinner } from "react-spinners-kit";
import { useMediaQuery } from "react-responsive";
import ReactStars from "react-rating-stars-component";

const MainComponent: FC<RateDriverComponentProp> = ({
  show,
  setShow,
  trip,
}) => {
  const [tripRating, setTripRating] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  let loading;

  console.log(tripRating);

  const ratingChanged = (newRating: any) => {
    setTripRating(newRating);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 80 : 30}
      >
        <div className="p-8  ">
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
          <div className="mt-0 grid grid-cols-1 overflow-y-scroll scrollContainer gap-y-4 gap-x-2 sm:grid-cols-6">
            <div className="sm:col-span-2" />

            <div className="sm:col-span-3">
              {/* <label
                htmlFor="first_name"
                className="block text-sm pb-0 font-medium leading-5 text-gray-700"
              >
                Ratings
              </label> */}
              <div className="mt-1 rounded-none shadow-none">
                <ReactStars
                  size={30}
                  value={tripRating}
                  onChange={ratingChanged}
                  count={5}
                />
              </div>
            </div>
            <div className="sm:col-span-1" />

            <div className="sm:col-span-6">
              <label
                htmlFor="first_name"
                className="block text-sm pb-1 font-medium leading-5 text-gray-700"
              >
                Review Driver
              </label>
              <div className="mt-1 rounded-none shadow-none">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  required
                  value={review}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setReview(e.target.value)
                  }
                  placeholder={"Review"}
                  className={
                    "rounded-md focus:outline-none border border-gray-300 h-full font-light w-full p-3 bg-white focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                  }
                ></textarea>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
            <span className="inline-flex rounded-none shadow-sm mr-2 ">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="inline-flex rounded-lg items-center px-6 py-2 border border-pink-600 text-sm leading-5 font-light text-pink-600 hover:text-pink-600 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
            <span className="inline-flex rounded-none shadow-sm ">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-gray focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
              >
                {loading ? (
                  <Fragment>
                    <CircleSpinner loading color="#fff" size={13} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="mx-1">Rate Driver</span>
                  </Fragment>
                )}
              </button>
            </span>
          </div>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
