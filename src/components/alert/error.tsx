import React, { FC, Fragment } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
// import ErrorAsset from "../svg/error";

interface Props {
  model: string;
  canReload: boolean;
  message: string;
  reload: () => void;
}

const ErrorAlert: FC<Props> = ({ model, canReload, message, reload }) => {
  return (
    <Fragment>
      <div className={"flex flex-col items-center"}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className={"mt-2"}>
          <span className={"text-lg font-medium"}>Can't fetch {model}</span>
        </div>
        <div className={"mb-2"}>
          <span className={" font-light"}>{message}</span>
        </div>
        {canReload && (
          <Fragment>
            <div>
              <button
                onClick={reload}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-2"
              >
                <RefreshIcon className={"h-6 w-6 mr-2 text-orange-500"} />
                <span className={"font-semibold"}> Reload</span>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

// ErrorAlert.defaultProps = {
//   message: "Some message for dey this side. So put some in the message prop",
// };

export { ErrorAlert };
