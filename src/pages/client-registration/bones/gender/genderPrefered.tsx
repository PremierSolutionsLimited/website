import { FC, Fragment, useState, useCallback, useRef } from "react";
import { ListLoader } from "../../../../shared/loaders";
import { useOutsideListener } from "../../../../components/hooks";
import {
  SelectGenderPreferenceComponentProp,
  IGenderPreference,
} from "../types";
// import { reduceString } from "../../../components/utils/truncate";
import Transition from "../../../../components/transitions";

const data: IGenderPreference[] = [
  {
    gender: "Male",
    value: "MALE",
  },
  {
    gender: "Female",
    value: "FEMALE",
  },
];

const SelectGenderPreferenceComponent: FC<SelectGenderPreferenceComponentProp> =
  ({ genderPreference, setGenderPreference }) => {
    const [, setSearch] = useState<string>("");
    const wrapperRef = useRef<any>(null);
    // const inputRef = useRef<any>(null);
    const [showDropDown, setShowDropDown] = useState(false);
    useOutsideListener(wrapperRef, () => setShowDropDown(false));

    //remove from array
    const removeFromArray = useCallback(
      (list: IGenderPreference) =>
        setGenderPreference(
          genderPreference?.filter((single) => single !== list)
        ),
      [genderPreference, setGenderPreference]
    );

    let isLoading;

    //listen on keyboard
    // const listenOnKeyboard = useCallback(
    //   (e: any) => {
    //     //listen on backspace
    //     if (e.keyCode === 8) {
    //       if (search === "") removeFromArray(genderPreference[genderPreference.length - 1]);
    //     }
    //   },
    //   [removeFromArray, search, genderPreference]
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
            onClick={() => setShowDropDown(true)}
            className={
              "bg-gray-100 rounded-sm px-2 h-9 flex flex-row items-center flex-wrap"
            }
          >
            {genderPreference.length === 0 && (
              <div className="text-xs flex items-start px-2 text-gray-400">Select one or more</div>
            )}
            {genderPreference?.map((list: IGenderPreference, i: number) => (
              <Fragment key={i}>
                <div
                  className={
                    "flex flex-row items-center p-1  bg-white rounded-full mr-1.5"
                  }
                >
                  <div className={"pl-2 pr-1 text-xs font-light"}>
                    {list?.gender}
                  </div>
                  <div
                    onClick={() => removeFromArray(list)}
                    className={
                      "rounded-full bg-amber-900 hover:bg-amber-800 cursor-pointer p-1"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-gold-1"
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

            {/* {genderPreference?.length === 0 && (
            <Fragment>
              <div className="text-sm text-gray-400 font-light pl-1">
                Please select a class
              </div>
            </Fragment>
          )} */}

            {/* <input
             ref={inputRef}
             genderPreference={"text"}
             onFocus={() => setShowDropDown(true)}
             value={search}
             onChange={(e) => {
               setSearch(e?.target.value);
             }}
             className="focus:ring-0 block font-light sm:text-sm w-36 border focus:outline-none focus:border-amber-900 rounded-sm py-1 px-3 "
             placeholder="Search list"
           /> */}
            {/* <button
            genderPreference="button"
            onClick={() => setShowDropDown(true)}
            className="bg-white h-6 px-4 py-2 text-xs font-light focus:outline-none rounded-full items-center justify-center flex flex-col"
          >
            Add list
          </button> */}
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
              style={{ maxHeight: "24vh" }}
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
                            No genderPreference found{" "}
                          </div>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {data?.map(
                            (
                              singlePreference: IGenderPreference,
                              i: number
                            ) => {
                              let isIn = genderPreference.find(
                                (single: IGenderPreference) =>
                                  single === singlePreference
                              );
                              return (
                                <Fragment key={i}>
                                  <div
                                    onClick={() => {
                                      if (isIn)
                                        removeFromArray(singlePreference);
                                      else
                                        setGenderPreference([
                                          ...genderPreference,
                                          singlePreference,
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
                                              "font-light items-start flex text-sm"
                                            }
                                          >
                                            {singlePreference?.gender}
                                          </span>{" "}
                                        </div>
                                        {/* <div>
                                        <span
                                          className={
                                            "text-gray-600 font-light text-xs"
                                          }
                                        >
                                          {reduceString(
                                            singlePreference?.description,
                                            80
                                          )}
                                        </span>
                                      </div> */}
                                      </div>
                                      {isIn && (
                                        <div>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gold-1"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.3"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="mt-2 text-sm font-light text-gray-900">
                          Oops, something happened, could not fetch
                          genderPreference.
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

export default SelectGenderPreferenceComponent;
