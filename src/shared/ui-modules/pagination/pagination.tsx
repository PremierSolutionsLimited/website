import React from "react";
import { PaginationProps } from "./types";
import { useHistory, useLocation } from "react-router";
import { useQueryStrings } from "../../../components/hooks";
import { addpageToRoute } from "./broker";

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  setSkip,
  skip,
}) => {
  const { push } = useHistory();
  const location = useLocation();
  const query = useQueryStrings();
  const [page, setPage] = React.useState(0);
  const [enteredPage, setEnteredPage] = React.useState(1);

  React.useEffect(() => {
    if (["", undefined, null].includes(query.get("page"))) {
      setPage(1); //set page
      setEnteredPage(1); //set entered page
      setSkip(0); // set skip
    } else {
      let pageNumber = parseInt(query.get("page") as string) as number;
      setPage(pageNumber);
      setEnteredPage(pageNumber); //set entered page
      setSkip((pageNumber - 1) * limit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, query.get("page"), setSkip]);

  return (
    <nav
      className="px-4 py-3   border-t border-gray-200 "
      aria-label="Pagination"
    >
      <div className="justify-between mt-4 flex items-center ">
        <div className="hidden sm:block">
          <p className=" text-gray-800 text-sm">
            Showing Page {enteredPage} of{" "}
            <span className="font-medium">{Math.ceil(total / limit)}</span>
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <button
            type="button"
            onClick={() => {
              let newPage = page - 1;
              setPage(newPage);
              setEnteredPage(newPage);
              push(addpageToRoute(location, newPage.toString()));
            }}
            disabled={skip === 0}
            className={`inline-flex items-center w-24 px-3 py-3 border text-sm leading-4 font-medium rounded-md text-white ${
              skip > 0
                ? "bg-white text-gray-600 hover:text-gray-400 focus:outline-none focus:border-red-700"
                : "bg-gray-200 cursor-not-allowed focus:outline-none focus:border-red-700"
            }  focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150`}
            // className="relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className={"font-light "}>Previous</span>
          </button>
          <button
            type="button"
            onClick={() => {
              let newPage = page + 1;
              setSkip(page * limit);
              setPage(newPage);
              setEnteredPage(newPage);
              push(addpageToRoute(location, newPage.toString()));
            }}
            disabled={skip + limit >= total}
            className={`items-center w-24 flex justify-center ml-4 px-3 py-3 text-sm leading-4 font-medium rounded-md border border-gray-200  ${
              skip + limit < total
                ? "bg-white text-gray-600 hover:text-gray-400 focus:outline-none focus:border-red-700"
                : "bg-gray-200 cursor-not-allowed focus:outline-none focus:border-red-700"
            }  focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150`}
            // className="ml-3 relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            <div className={"flex flex-row"}>
              <span className={"font-light mr-1"}>Next</span>

              <svg
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevrons-right"
              >
                <path d="M13 17L18 12 13 7" />
                <path d="M6 17L11 12 6 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
