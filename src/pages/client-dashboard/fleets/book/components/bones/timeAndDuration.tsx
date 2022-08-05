import React, {
  Fragment,
  Dispatch,
  SetStateAction,
} from "react";
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

  const onChangeStartTime = (time: Moment | null, timeString: string, index: number) => {
    console.log("Time: ",time, "Timestring: ",timeString);
    setStartTimes((prev) => {
        const newStartTimes = [...prev];
        if (time) {
            const hours = time?.hours();
            const minutes = time?.minutes();
            newStartTimes[index] = new Date(new Date(dates[index]).setHours(hours, minutes));
            return newStartTimes;
        }
        return newStartTimes;
    }
    );
    
  };

  const onChangeEndTime = (time: Moment | null , timeString: string, index: number) => {
    setEndTimes((prev) => {
        const newEndTimes = [...prev];
        if (time) {
            const hours = time?.hour()
            const minutes = time.minutes()
            newEndTimes[index] = new Date(new Date(dates[index].setHours(hours, minutes)))
            return newEndTimes
        }
        return newEndTimes
    })
  }

  console.log("Dates: ",dates);

  const setFixedStartTime = (time: Moment | null, timeString: string) => {
    //set the same time for all the start times 
    
  }

  const setFixedDuration = (value: number) => {
    setDuration(value.toString());
  }
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
                      format="h:mm"
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
                            onChange={(value, dateString) => onChangeStartTime(value, dateString, index)}
                            defaultOpenValue={moment("00:00", "h:mm A")}
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
                            onChange={(value, dateString) => onChangeEndTime(value, dateString, index)}
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
