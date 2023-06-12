import React, { Fragment, Dispatch, SetStateAction } from "react";
import { TimePicker, InputNumber } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import {
  getFinalTimeFromStartTimeAndDuration,
  getDurationFromStartTimeAndEndTime,
} from "../utils/switch";

interface IProps {
  fixedStart: boolean;
  fixedDuration: boolean;
  dates: any[];
  setDates: Dispatch<SetStateAction<any[]>>;
  startTimes: Date[];
  setStartTimes: Dispatch<SetStateAction<Date[]>>;
  durations: string[];
  setDurations: Dispatch<SetStateAction<string[]>>;
  endTimes: Date[];
  setEndTimes: Dispatch<SetStateAction<Date[]>>;
  startTime?: any;
  setStartTime: Dispatch<SetStateAction<any>>;
  duration?: any;
  setDuration: Dispatch<SetStateAction<any>>;
}

const TimeAndDuration = ({
  fixedStart,
  fixedDuration,
  dates,
  setDates,
  startTime,
  setStartTime,
  duration,
  setDuration,
  endTimes,
  setEndTimes,
  startTimes,
  setStartTimes,
  durations,
  setDurations,
}: IProps) => {
  console.log("DURATIONS: ", durations);

  const onChangeStartTime = (
    time: Moment | null,
    timeString: string,
    index: number
  ) => {
    setStartTimes((prev) => {
      const newStartTimes = [...prev];
      if (time) {
        const hours = time?.hours();
        const minutes = time?.minutes();
        newStartTimes[index] = new Date(
          new Date(dates[index]).setHours(hours, minutes)
        );
        return newStartTimes;
      }
      return newStartTimes;
    });
  };

  const onChangeEndTime = (
    time: Moment | null,
    _timeString: string,
    index: number
  ) => {
    setEndTimes((prev) => {
      const newEndTimes = [...prev];
      if (time) {
        const hours = time?.hour();
        const minutes = time.minutes();
        newEndTimes[index] = new Date(
          new Date(dates[index]).setHours(hours, minutes)
        );
        return newEndTimes;
      }
      return newEndTimes;
    });
    setDurations((prev) => {
      const newDurations: any = [...prev];
      if (time && startTimes[index]) {
        console.info(time);
        console.info(typeof time.format("HH:mm"));
        const duration = getDurationFromStartTimeAndEndTime(
          startTimes[index],
          new Date(time.toDate())
        );
        newDurations[index] = duration.toString();
        return newDurations;
      }
      return newDurations;
    });
  };

  console.log("Dates: ", dates);

  const setFixedStartTime = (time: Moment | null, _timeString: string) => {
    //set the same time for all the start times
    console.log("Before: ", startTimes);
    setStartTime(time);
    setStartTimes((prev) => {
      const newStartTimes: any = [...prev];
      if (time) {
        const hours = time?.hours();
        const minutes = time?.minutes();
        if (newStartTimes.length > 0) {
          newStartTimes.forEach((_startTime: any, index: number) => {
            newStartTimes[index] = new Date(
              new Date(dates[index]).setHours(hours, minutes)
            );
          });
        } else {
          for (let i = 0; i < dates?.length; i++) {
            newStartTimes[i] = new Date(dates[i]).setHours(hours, minutes);
          }
        }
      }
      return newStartTimes;
    });
    console.log("After: ", startTimes);
  };

  const onChangeDuration = (value: number, index: number) => {
    setDurations((prev) => {
      const newDurations = [...prev];
      if (value) {
        newDurations[index] = value.toString();
        setEndTimes((prev) => {
          const newEndTimes = [...prev];
          console.log("working");
          newEndTimes[index] = getFinalTimeFromStartTimeAndDuration(
            startTimes[index],
            value
          );
          console.log(newEndTimes);
          return newEndTimes;
        });
      }
      return newDurations;
    });
  };

  const setFixedDuration = (value: number) => {
    //set the same duration for all the
    setDuration(value);
    setDurations((prev) => {
      const newDurations: any = [...prev];
      if (value) {
        if (newDurations.length > 0) {
          newDurations.forEach((_startTime: any, index: number) => {
            newDurations[index] = value.toString();
          });
        } else {
          for (let i = 0; i < dates?.length; i++) {
            newDurations[i] = value.toString();
          }
        }
      }
      return newDurations;
    });
    setEndTimes((prev) => {
      const newEndTimes: any = [...prev];
      if (value) {
        if (newEndTimes.length > 0) {
          newEndTimes.forEach((_startTime: any, index: number) => {
            newEndTimes[index] = getFinalTimeFromStartTimeAndDuration(
              startTimes[index],
              value
            );
          });
        } else {
          for (let i = 0; i < dates?.length; i++) {
            newEndTimes[i] = getFinalTimeFromStartTimeAndDuration(
              startTimes[i],
              value
            );
          }
        }
      }
      return newEndTimes;
    });
  };

  return (
    <Fragment>
      {(fixedStart || fixedDuration) && (
        <div className="flex-col space-y-2 sm:flex sm:flex-row sm:justify-center sm:space-x-4">
          {fixedStart && (
            <div className="sm:flex sm:items-center grid grid-cols-12">
              <div className="col-span-4 sm:flex-shrink-0">
                <span className="mr-2 text-sm font-medium leading-5 text-gray-900">
                  Start Time
                </span>
              </div>
              <div className="col-span-8 sm:flex-grow">
                <TimePicker
                  use12Hours
                  format="h:mm A"
                  placeholder="Select Time"
                  onChange={setFixedStartTime}
                  defaultOpenValue={moment("00:00", "h:mm")}
                  value={startTime}
                />
              </div>
            </div>
          )}
          {fixedDuration && (
            <div className="sm:flex sm:items-center grid grid-cols-12">
              <div className="col-span-4 sm:flex-shrink-0">
                <span className="text-sm font-medium leading-5 text-gray-900">
                  Duration
                </span>
              </div>
              <div className="col-span-8 sm:flex-grow">
                <InputNumber
                  min={1}
                  max={24}
                  defaultValue={1}
                  formatter={(value) => `${value} hour(s)`}
                  parser={(value: any) => value!.replace("hour(s)", "")}
                  onChange={setFixedDuration}
                  value={duration}
                  placeholder="Select Duration"
                />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="pt-3 -ml-4 sm:mx-0 sm:p-3">
        {dates?.map((date, index) => {
          return (
            <Fragment key={index}>
              <div className="flex flex-col mb-4 border rounded-md p-4 overflow-x-scroll">
                <div className="flex-grow text-gold-2">
                  {new Date(date).toDateString()}
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <div className="flex-shrink-0">
                      <span className="text-sm font-medium leading-5 text-gray-900">
                        Start Time
                      </span>
                      <div className="flex-grow">
                        <TimePicker
                          use12Hours
                          format="h:mm A"
                          placeholder="Select Time"
                          onChange={(value, dateString) =>
                            onChangeStartTime(value, dateString, index)
                          }
                          defaultOpenValue={moment("00:00", "h:mm A")}
                          value={
                            fixedStart && startTime
                              ? startTime
                              : startTimes[index]
                              ? moment(startTimes[index])
                              : null
                          }
                          disabled={fixedStart}
                          className="flex-grow w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex-shrink-1">
                      <span className="text-sm font-medium leading-5 text-gray-900">
                        Duration
                      </span>
                      <div className="flex-grow">
                        <InputNumber
                          min={1}
                          max={24}
                          defaultValue={1}
                          formatter={(value) => `${value} hour(s)`}
                          parser={(value: any) => value!.replace("hour(s)", "")}
                          onChange={(value) => onChangeDuration(value, index)}
                          value={
                            fixedDuration && duration
                              ? duration
                              : durations[index]
                          }
                          disabled={fixedDuration}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex-shrink-0">
                      <span className="text-sm font-medium leading-5 text-gray-900">
                        End Time
                      </span>
                      <div className="flex-grow">
                        <TimePicker
                          //use12Hours
                          format="h:mm A"
                          placeholder="Select Time"
                          onChange={(value, dateString) =>
                            onChangeEndTime(value, dateString, index)
                          }
                          defaultOpenValue={moment("00:00", "h:mm A")}
                          disabled={!startTimes[index] || fixedDuration}
                          value={
                            endTimes[index] ? moment(endTimes[index]) : null
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TimeAndDuration;
