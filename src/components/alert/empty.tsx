/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

interface Props {
  buttonMessage?: string;
  emptyMessage: string;
  onClickButton: () => void;
  page: string;
  hideButton?: boolean;
}
const EmptyAlert = ({
  onClickButton,
  page,
  emptyMessage,
  buttonMessage,
  hideButton,
}: Props) => {
  return (
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>

      <h3 className="mt-2 text-sm font-medium text-gray-900">No {page}</h3>
      <p className="mt-1 text-sm text-gray-500">{emptyMessage}</p>
      {hideButton ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>
          <div className="mt-6">
            <button
              type="button"
              onClick={onClickButton}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gold-1 hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-2"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {buttonMessage}
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export { EmptyAlert };
