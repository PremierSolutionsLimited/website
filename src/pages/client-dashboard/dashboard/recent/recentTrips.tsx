import React, { Fragment, FC } from "react";
import { IoCarSportSharp, IoTime, IoTimeOutline } from "react-icons/io5";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { useLocationName } from "../../../../components/hooks/useLocationName";
import { useHistory } from "react-router-dom";
import moment from "moment";

type TripType = {
  _id: string;
  vehicle: {
    color: string;
    model: string;
    make: string;
  };
  tripType: {
    name: string;
  };
  status: string;
  from: string;
  to: string;
  createdAt: Date;
  finalCost: {
    finalCost: number;
  };
  startTime: Date;
  endTime: Date;
  pickUpLocation: {
    coordinates: string;
  };
  dropOffLocation: {
    coordinates: string;
  };
};

interface ITripProps {
  data: TripType;
}

const RecentTrips: FC<ITripProps> = ({ data }) => {
  const { push } = useHistory();
  const [pickup, setPickup] = React.useState(null);
  const [dropoff, setDropoff] = React.useState("");
  const { loading: loadPickup, fetchLocationName: fetchPickup } =
    useLocationName();
  const { loading: loadDropoff, fetchLocationName: fetchDropoff } =
    useLocationName();

  React.useEffect(() => {
    const getLat = async () => {
      return await fetchPickup(
        data?.pickUpLocation?.coordinates[1],
        data?.pickUpLocation?.coordinates[0]
      );
    };
    (async () => {
      if (data) {
        setPickup(await getLat());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    const getLat = async () => {
      return await fetchDropoff(
        data?.dropOffLocation?.coordinates[1],
        data?.dropOffLocation?.coordinates[0]
      );
    };
    (async () => {
      if (data) {
        setDropoff(await getLat());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <Fragment>
      <div className="bg-white flex flex-col space-y-5 pt-5 sm:pt-6 shadow rounded-lg overflow-hidden">
        <div className="flex flex-col px-4 sm:px-6">
          <div>
            <div className="flex justify-between items-top">
              <div className="flex justify-start">
                <div
                  className=" bg-gray-500 rounded-md p-3"
                  style={{ height: "50px" }}
                >
                  <IoCarSportSharp
                    className={`h-6 w-6 ${
                      data?.vehicle?.color ? data?.vehicle?.color : "text-white"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col ml-4 ">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    {data?.vehicle?.make + " " + data?.vehicle?.model}
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">
                      GHC {data?.finalCost?.finalCost || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-500 ${
                    data?.status === "COMPLETED"
                      ? "text-green-500"
                      : data?.status === "IN_PROGRESS"
                      ? "text-blue-500"
                      : data?.status === "CANCELLED"
                      ? "text-red-600"
                      : "text-yellow-400"
                  }`}
                >
                  <svg
                    className={`mr-1.5 h-2 w-2 `}
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx={4} cy={4} r={3} />
                  </svg>
                  {data?.status}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-lg ">
            <div className="text-gray-700">
              {new Date(data?.createdAt).toLocaleDateString()}
            </div>
            <h2 className="font-medium text-blue-600">
              {data?.tripType?.name}
            </h2>
          </div>
          <div className="relative sm:grid sm:grid-cols-2 sm:gap-4 mt-5">
            <div className={"col-span-2"}>
              <h1 className={"font-light ml-4"}>From</h1>
              <span className={"font-medium ml-4"}>
                {loadPickup ? "loading..." : pickup}
              </span>
            </div>
            <div className={"col-span-2"}>
              <h1 className={"font-light ml-4"}>To</h1>
              <span className={"font-medium ml-4"}>
                {loadDropoff ? "loading..." : dropoff}
              </span>
            </div>
            <div className={"absolute left-2 sm:left-2 w-0.5"}>
              <LocationMarkerIcon className={"h-5 -ml-3.5 w-5 text-gold-1"} />
              <div className={"h-20 rounded-lg -ml-1 w-0.5 -mt-2 bg-gold-1"} />
              <div className={"h-2 w-2 rounded-full -ml-1.5 bg-gold-1 -mt-1"} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-5">
            <div className="flex justify-between text-gray-700">
              <div className="flex">
                <IoTime className="h-5 w-5 mr-1" />
                Start Time:
              </div>
              <p className="text-gold-2">
                {data?.startTime
                  ? moment(data?.startTime).format("D/MM/YYYY, h:mm a")
                  : "Not Started Yet"}
              </p>
            </div>
            <div className="flex justify-between text-gray-700">
              <div className="flex">
                <IoTimeOutline className="h-5 w-5 mr-1" />
                End Time:
              </div>
              <p className="text-gold-2">
                {data?.endTime
                  ? moment(data?.endTime).format("D/MM/YYYY, h:mm a")
                  : "Not Ended Yet"}
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gray-50 p-4 ">
          <div className="text-sm">
            <div
              onClick={() => push("/app/history")}
              className="font-medium text-indigo-600 hover:text-gold-1 cursor-pointer"
            >
              {" "}
              View all<span className="sr-only"> Trips History</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecentTrips;
