import React, { FC, Fragment, useEffect, useState } from "react";
import {
  RateDriverComponentProp,
  RateDriverInputProp,
  RateDriverOutputProp,
} from "./types";
import { BasicModal } from "../../../../components/modal";
import { CircleSpinner } from "react-spinners-kit";
import { useMediaQuery } from "react-responsive";
import { ApolloError, useMutation } from "@apollo/client";
import {
  RATE_DRIVER,
  REPORT_INCIDENT,
} from "../../../../services/graphql/history";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import _ from "lodash";
import { ChevronDownIcon } from "@heroicons/react/outline";

const MainComponent: FC<RateDriverComponentProp> = ({
  show,
  setShow,
  trip,
  refetch,
}) => {
  const [tripRating, setTripRating] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [incidentTitle, setIncidentTitle] = useState<string>("");
  const [incidentDescription, setIncidentDescription] = useState<string>("");
  const [showIncidentReporting, setShowIncidentReporting] =
    useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  useEffect(() => {
    if (trip?.clientRated) {
      setTripRating(trip?.clientRating?.toString() as string);
      setReview(trip?.clientReview as string);
    }
  }, [trip]);

  const [invokeRateDriver, { loading }] = useMutation<
    RateDriverOutputProp,
    RateDriverInputProp
  >(RATE_DRIVER);

  const [invokeReportIncident, { loading: loadingReporting }] =
    useMutation(REPORT_INCIDENT);

  const ratingChanged = (newRating: any) => {
    setTripRating(newRating);
  };

  const reset = () => {
    setTripRating("");
    setReview("");
  };

  const resetIncident = () => {
    setIncidentTitle("");
    setIncidentDescription("");
  };

  //reset incident if new trip is selected
  useEffect(() => {
    resetIncident();
  }, [trip]);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!tripRating) {
      return toast.error("Please choose rating");
    }
    if (!trip?.clientRated) {
      invokeRateDriver({
        variables: {
          tripId: trip?._id as string,
          rating: parseFloat(tripRating),
          review: review,
        },
      })
        .then(() => {
          refetch();
          setShow(false);
          reset();
          toast.success("Driver rated successfully");
        })
        .catch((e: ApolloError) => {
          return toast.error(
            _.startCase(_.lowerCase(e.graphQLErrors[0]?.message))
          );
        });
    }
    if (showIncidentReporting) {
      if (!incidentTitle) {
        return toast.error("Please enter incident title");
      }
      if (!incidentDescription) {
        return toast.error("Please enter incident description");
      }
      invokeReportIncident({
        variables: {
          input: {
            tripId: trip?._id as string,
            title: incidentTitle,
            content: incidentDescription,
            type: "GENERAL"
          },
        },
      })
        .then(() => {
          refetch();
          setShow(false);
          resetIncident();
          toast.success("Incident reported successfully");
        })
        .catch((e: ApolloError) => {
          return toast.error(
            _.startCase(_.lowerCase(e.graphQLErrors[0]?.message))
          );
        });
    }
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-0 grid grid-cols-1 overflow-y-scroll scrollContainer gap-y-4 gap-x-2 sm:grid-cols-6">
            <div className="sm:col-span-6 flex flex-col justify-center items-center">
              <div className="block text-sm pb-0 font-medium leading-5 text-gray-700">
                Rate Driver
              </div>
              <div className="mt-1 rounded-none shadow-none">
                <ReactStars
                  size={30}
                  value={tripRating}
                  onChange={ratingChanged}
                  count={5}
                  disabled={trip?.clientRated}
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="first_name"
                className="block text-sm pb-1 font-medium leading-5 text-gray-500"
              >
                Review
              </label>
              <div className="mt-1 rounded-none shadow-none">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  value={review}
                  disabled={trip?.clientRated}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setReview(e.target.value)
                  }
                  placeholder={"Your review of the driver..."}
                  className={
                    "rounded-md focus:outline-none border border-gray-300 h-full font-light w-full p-3 bg-white focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                  }
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-6 text-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    setShowIncidentReporting(!showIncidentReporting)
                  }
                  className="text-sm text-gold-2 underline flex items-center focus:outline-none"
                >
                  Click Here To Report an Incident
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            {showIncidentReporting && (
              <>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm pb-1 font-medium leading-5 text-gray-500"
                  >
                    Title
                  </label>
                  <div className="mt-1 rounded-none shadow-none">
                    <input
                      type="text"
                      required
                      value={incidentTitle}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setIncidentTitle(e.target.value)
                      }
                      placeholder={"Title of incident"}
                      className={
                        "rounded-md focus:outline-none border border-gray-300 h-full font-light w-full p-3 bg-white focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                      }
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm pb-1 font-medium leading-5 text-gray-500"
                  >
                    Details of incident
                  </label>
                  <div className="mt-1 rounded-none shadow-none">
                    <textarea
                      name=""
                      id=""
                      rows={3}
                      required
                      value={incidentDescription}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setIncidentDescription(e.target.value)
                      }
                      placeholder={"Enter details here..."}
                      className={
                        "rounded-md focus:outline-none border border-gray-300 h-full font-light w-full p-3 bg-white focus:ring-gold-1  focus:shadow-outline-purple focus:border-gold-1"
                      }
                    ></textarea>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="pt-2 border-t border-gray-200 mt-5  flex justify-end">
            <span className="inline-flex rounded-none shadow-sm mr-2 ">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="inline-flex rounded-lg items-center px-6 py-2 border border-gold-1 text-sm leading-5 font-light text-gold-1 hover:text-gold-1 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                <span className="mx-1">Close</span>
              </button>
            </span>
            <span className="inline-flex rounded-none shadow-sm ">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex flex-row w-32 justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:shadow-outline-gray focus:border-gold-1 active:bg-gold-1 transition duration-150 ease-in-out"
              >
                {loading ? (
                  <Fragment>
                    <CircleSpinner loading color="#fff" size={13} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="mx-1">Submit</span>
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
