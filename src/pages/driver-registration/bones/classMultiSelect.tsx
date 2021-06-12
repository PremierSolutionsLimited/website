import { FC, Fragment, useState, useCallback, useRef } from "react";
import { ListLoader } from "../../../shared/loaders";
import { useOutsideListener } from "../../../components/hooks";
import { SelectClassComponentProp, IClassSelectList } from "./types";
import Transition from "../../../components/transitions";
import _ from "lodash";

// used to truncate texts taht us overflowing
const reduceString = (description: string): string =>
  _.truncate(description, {
    length: 80,
  });

const SelectClassComponent: FC<SelectClassComponentProp> = ({
  classSelect,
  setClassSelect,
}) => {
  const [, setSearch] = useState<string>("");
  const wrapperRef = useRef<any>(null);
  // const inputRef = useRef<any>(null);
  const [showDropDown, setShowDropDown] = useState(false);
  useOutsideListener(wrapperRef, () => setShowDropDown(false));

  //remove from array
  const removeFromArray = useCallback(
    (list: IClassSelectList) =>
      setClassSelect(classSelect?.filter((single) => single !== list)),
    [classSelect, setClassSelect]
  );

  let isLoading;
  let data: any;

  //listen on keyboard
  // const listenOnKeyboard = useCallback(
  //   (e: any) => {
  //     //listen on backspace
  //     if (e.keyCode === 8) {
  //       if (search === "") removeFromArray(classSelect[classSelect.length - 1]);
  //     }
  //   },
  //   [removeFromArray, search, classSelect]
  // );

  // registered for listening to keyboard
  //   useEffect(() => {
  //     inputRef.current.addEventListener("keydown", listenOnKeyboard, false);
  //     return () => {
  //       // inputRef?.current?.removeEventListener("keydown", listenOnKeyboard, false);
  //     };
  //   }, [listenOnKeyboard]);

  return (
    <Fragment>
      <div ref={wrapperRef} className={"relative w-full"}>
        <div
          className={
            "bg-gray-100 rounded-sm p-2 flex flex-row items-center flex-wrap"
          }
        >
          {classSelect?.map((list: IClassSelectList, i: number) => (
            <Fragment key={i}>
              <div
                className={
                  "flex flex-row items-center m-1 p-1 bg-gray-200 rounded-full"
                }
              >
                <div className={"pl-2 pr-1 text-xs font-light"}>
                  {list?.name}
                </div>
                <div
                  onClick={() => removeFromArray(list)}
                  className={
                    "rounded-full bg-amber-900 hover:bg-amber-800 cursor-pointer p-1"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Fragment>
          ))}
          {/* <input
             ref={inputRef}
             type={"text"}
             onFocus={() => setShowDropDown(true)}
             value={search}
             onChange={(e) => {
               setSearch(e?.target.value);
             }}
             className="focus:ring-0 block font-light sm:text-sm w-36 border focus:outline-none focus:border-amber-900 rounded-sm py-1 px-3 "
             placeholder="Search list"
           /> */}
          <button
            type="button"
            onClick={() => setShowDropDown(true)}
            className="bg-white h-6 px-4 py-2 text-xs font-light focus:outline-none rounded-full items-center justify-center flex flex-col"
          >
            Add list
          </button>
        </div>
        <Transition
          show={showDropDown}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="opacity-0"
        >
          <div
            style={{ maxHeight: "30vh" }}
            className={
              "absolute w-full z-20 mt-1 overflow-auto scrollContainer border bg-white shadow-lg"
            }
          >
            {isLoading ? (
              <Fragment>
                <div className="flex flex-col items-center justify-center p-3">
                  <ListLoader />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                {data ? (
                  <Fragment>
                    {data?.length === 0 ? (
                      <Fragment>
                        <div className="flex flex-col items-center justify-center p-3">
                          No classSelect found{" "}
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        {data?.map(
                          (singleBenefit: IClassSelectList, i: number) => {
                            let isIn = classSelect.find(
                              (single: IClassSelectList) =>
                                single === singleBenefit
                            );
                            return (
                              <Fragment key={i}>
                                <div
                                  onClick={() => {
                                    if (isIn) removeFromArray(singleBenefit);
                                    else
                                      setClassSelect([
                                        ...classSelect,
                                        singleBenefit,
                                      ]);
                                    setSearch("");
                                  }}
                                  className={
                                    "p-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                  }
                                >
                                  <div className="flex flex-row items-start justify-between">
                                    <div className={"flex flex-col "}>
                                      <div>
                                        <span
                                          className={
                                            "font-medium items-start flex text-sm"
                                          }
                                        >
                                          {singleBenefit?.name}
                                        </span>{" "}
                                      </div>
                                      <div>
                                        <span
                                          className={
                                            "text-gray-600 font-light text-xs"
                                          }
                                        >
                                          {reduceString(
                                            singleBenefit?.description
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    {isIn && (
                                      <div>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5 text-amber-900"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Fragment>
                            );
                          }
                        )}
                      </Fragment>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="flex flex-col items-center justify-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.3"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="mt-2 text-sm font-light text-gray-900">
                        Oops, something happened, could not fetch classSelect.
                      </div>
                    </div>
                  </Fragment>
                )}
              </Fragment>
            )}
          </div>
        </Transition>
      </div>
    </Fragment>
  );
};

export default SelectClassComponent;
