import React, { Fragment, Dispatch, SetStateAction, useState } from "react";
import { TimePicker, InputNumber } from "antd";
import type { Moment } from "moment";
import moment from "moment";

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
  startTime?: Date;
  setStartTime: Dispatch<SetStateAction<Date>>;
  duration?: string;
  setDuration: Dispatch<SetStateAction<string>>;
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

  console.log("STARTS: ", startTimes)

  const [displayFixedTime, setDisplayFixedTime] = useState<any>("");
  const [displayFixedDuration, setDisplayFixedDuration] = useState<any>("");

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
          new Date(dates[index].setHours(hours, minutes))
        );
        return newEndTimes;
      }
      return newEndTimes;
    });
  };

  console.log("Dates: ", dates);

  const setFixedStartTime = (time: Moment | null, _timeString: string) => {
    //set the same time for all the start times
    console.log("Before: ", startTimes);
    setDisplayFixedTime(time)
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
        }
        else {
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
      }
      return newDurations;
    });
  };

  const setFixedDuration = (value: number) => {
    //set the same duration for all the 
    setDisplayFixedDuration(value)
    setDurations((prev) => {
      const newDurations: any = [...prev];
      if (value) {
        if (newDurations.length > 0) {
          newDurations.forEach((_startTime: any, index: number) => {
            newDurations[index] = value.toString();
          });
        }
        else {
          for (let i = 0; i < dates?.length; i++) {
            newDurations[i] = value.toString();
          }
        }
      }
      return newDurations;
    });
  };

  return (
    <Fragment>
      {(fixedStart || fixedDuration) && (
        <div className="flex justify-center">
          <div className="grid grid-cols-12 gap-4">
            {fixedStart && (
              <div className="col-span-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="mr-2 text-sm font-medium leading-5 text-gray-900">
                      Start Time
                    </span>
                  </div>
                  <div className="flex-grow">
                    <TimePicker
                      use12Hours
                      format="h:mm A"
                      placeholder="Select Time"
                      onChange={setFixedStartTime}
                      defaultOpenValue={moment("00:00", "h:mm")}
                    />
                  </div>
                </div>
              </div>
            )}
            {fixedDuration && (
              <div className="col-span-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="mr-2 text-sm font-medium leading-5 text-gray-900">
                      Duration
                    </span>
                  </div>
                  <div className="flex-grow">
                    <InputNumber
                      min={1}
                      max={24}
                      defaultValue={1}
                      formatter={(value) => `${value} hour(s)`}
                      parser={(value: any) => value!.replace("hour(s)", "")}
                      onChange={setFixedDuration}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="p-3">
        {dates?.map((date, index) => {
          return (
            <Fragment key={index}>
              <div className="flex flex-col mb-4 border rounded-md p-4">
                <div className="flex-grow text-gold-2">
                  {new Date(date).toDateString()}
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <div className="flex items-center">
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
                            value={displayFixedTime? displayFixedTime : startTimes[index]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-center">
                      <div className="">
                        <span className="text-sm font-medium leading-5 text-gray-900">
                          Duration
                        </span>
                        <div className="flex-grow">
                          <InputNumber
                            min={1}
                            max={24}
                            defaultValue={1}
                            formatter={(value) => `${value} hour(s)`}
                            parser={(value: any) =>
                              value!.replace("hour(s)", "")
                            }
                            onChange={(value) => onChangeDuration(value, index)}
                            value={displayFixedDuration? displayFixedDuration : durations[index]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-center">
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
                          />
                        </div>
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
