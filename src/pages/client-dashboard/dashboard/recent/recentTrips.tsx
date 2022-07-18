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
  pickUpLocationName: string;
  dropOffLocationName: string;
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
      <div className="bg-white flex flex-col space-y-5 pt-5 sm:pt-6 shadow-sm rounded-lg overflow-hidden border border-gray-300">
        <div className="flex flex-col px-4 sm:px-6">
          <div>
            <div className="flex justify-between gap-2 items-top">
              <div className="flex justify-start items-center">
                <div
                  className=" bg-gold-1 rounded-full p-3"
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
                  <div className="p-1 flex justify-center flex-shrink border border-dashed border-gray-700 rounded-md bg-customBlack-2">
                    <p className="text-lg md:text-xl font-semibold text-white">
                      GHC {data?.finalCost?.finalCost || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border text-gray-800 ${
                    data?.status === "COMPLETED"
                      ? "border-green-500 text-green-600"
                      : data?.status === "IN_PROGRESS"
                      ? "border-blue-600 text-blue-700"
                      : data?.status === "CANCELLED"
                      ? "border-red-600 text-red-700"
                      : data?.status === "PREPARED" 
                      ? "border-indigo-600 text-indigo-700"
                      : "border-yellow-500 text-gold-1"
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
          <div className="mt-4 flex justify-between text-lg">
            <div className="text-gray-700">
              {new Date(data?.createdAt).toDateString()}
            </div>
            <h2 className="font-medium text-gray-500 text-sm border-b border-gold-1">
              {data?.tripType?.name}
            </h2>
          </div>
          <div className="mt-5 flex justify-start items-center">
            <div className={"w-0.5"}>
              <LocationMarkerIcon className={"h-5 w-5 -ml-2 text-gold-1"} />
              <div className={"h-20 rounded-lg w-0.5 -mt-2 bg-gold-1"} />
              <div className={"h-2 w-2 rounded-full -ml-0.5 bg-gold-1 -mt-1"} />
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
              <div className={"col-span-2"}>
                <h1 className={"font-light ml-4"}>From</h1>
                <span className={"font-medium ml-4"}>
                  {loadPickup ? "loading..." : data?.pickUpLocationName}
                </span>
              </div>
              <div className={"col-span-2"}>
                <h1 className={"font-light ml-4"}>To</h1>
                <span className={"font-medium ml-4"}>
                  {loadDropoff ? "loading..." : dropoff || data?.dropOffLocationName}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-5 bg-gold-1 border border-gold-1 rounded-md py-3 px-2">
            <div className="flex justify-between text-gray-100">
              <div className="flex">
                <IoTime className="h-5 w-5 mr-1 text-customBlack-2"/>
                Start Time:
              </div>
              <p className="text-black">
                {data?.startTime
                  ? moment(data?.startTime).format("D/MM/YYYY, h:mm a")
                  : "Not Started Yet"}
              </p>
            </div>
            <div className="flex justify-between text-gray-100">
              <div className="flex">
                <IoTimeOutline className="h-5 w-5 mr-1 text-customBlack-2" />
                End Time:
              </div>
              <p className="text-black">
                {data?.endTime
                  ? moment(data?.endTime).format("D/MM/YYYY, h:mm a")
                  : "Not Ended Yet"}
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 p-4 bottom-0">
          <div className="text-sm">
            <div
              onClick={() => push("/app/history")}
              className="font-medium text-gray-800 cursor-pointer hover:animate-bounce"
            >
              {" "}
              <p className="hover:text-gold-1">View all</p><span className="sr-only"> Trips History</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecentTrips;
