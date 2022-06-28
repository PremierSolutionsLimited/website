import React, { Fragment, FC } from "react";
import { MinusCircleIcon, CheckIcon, XIcon } from "@heroicons/react/outline";

export interface ValuableProps {
  description?: string;
  setDescription?: (value: any) => void;
  images?: string[];
  setImages?: (value: any) => void;
  update?: boolean;
  reportedBy?: "Driver" | "Client";
  handleRemove: () => void;
  setConfirm?: (value: boolean) => void;
}

const SingleValuable: FC<ValuableProps> = ({
  description,
  setDescription,
  handleRemove,
  update,
  reportedBy,
  setConfirm
}) => {
  return (
    <Fragment>
      <div className="col-span-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4">
            <input
              placeholder="Enter name/description of item"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none bg-white focus:ring-gray-500 focus:border-gray-400 sm:text-sm"
              value={description}
                onChange={(e) => setDescription && setDescription(e.target.value)}
              required
            />
          </div>
          {update ? (
            reportedBy === "Driver" ? (
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  title="Confirm"
                  onClick={() => setConfirm && setConfirm(true)}
                  className="border border-green-600 text-green-600 rounded-md flex justify-center items-center hover:bg-gray-100"
                >
                  <CheckIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  title="Deny"
                  onClick={() => setConfirm && setConfirm(false)}
                  className="border border-red-600 text-red-600 rounded-md flex justify-center items-center hover:bg-gray-100"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                title="Remove"
                onClick={handleRemove}
                className="col-span-1 border border-red-600 text-red-600 rounded-md flex justify-center items-center hover:bg-gray-100"
              >
                <MinusCircleIcon className="h-6 w-6" />
              </button>
            )
          )
          :
          <button
            type="button"
            title="Remove"
            onClick={handleRemove}
            className="col-span-1 border border-red-600 text-red-600 rounded-md flex justify-center items-center hover:bg-gray-100"
          >
            <MinusCircleIcon className="h-6 w-6" />
          </button>
}
        </div>
      </div>
    </Fragment>
  );
};

export default SingleValuable;
