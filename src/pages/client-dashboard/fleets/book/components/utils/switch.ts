import React from "react";

//
export const getFinalDateWithDateInput = (
  durationTypeSelected: string,
  duration: string,
  selectedDate: string,
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>
) => {
  switch (durationTypeSelected) {
    case "Hours":
      const tempHourDate = new Date(selectedDate);
      let finalHourDate = new Date(
        tempHourDate.getFullYear(),
        tempHourDate.getMonth(),
        tempHourDate.getDate(),
        tempHourDate.getHours() + Number(duration),
        tempHourDate.getMinutes(),
        0
      );
      setEndTime(finalHourDate);
      break;
    case "Days":
      const tempDayDate = new Date(selectedDate);
      let finalDayDate = new Date(
        tempDayDate.getFullYear(),
        tempDayDate.getMonth(),
        tempDayDate.getDate() + Number(duration),
        tempDayDate.getHours(),
        tempDayDate.getMinutes(),
        0
      );
      setEndTime(finalDayDate);

      break;

    case "Weeks":
      const tempWeekDate = new Date(selectedDate);
      let finalWeekDate = new Date(
        tempWeekDate.getFullYear(),
        tempWeekDate.getMonth(),
        tempWeekDate.getDate() + Number(+duration * 7),
        tempWeekDate.getHours(),
        tempWeekDate.getMinutes(),
        0
      );
      setEndTime(finalWeekDate);

      break;
    case "Months":
      const tempMonthsDate = new Date(selectedDate);
      let finalMonthDate = new Date(
        tempMonthsDate.getFullYear(),
        tempMonthsDate.getMonth() + Number(duration),
        tempMonthsDate.getDate(),
        tempMonthsDate.getHours(),
        tempMonthsDate.getMinutes(),
        0
      );
      setEndTime(finalMonthDate);

      break;
    default:
      return;
  }
};
//
export const getFinalDateWithDurationInput = (
  durationTypeSelected: string,
  duration: string,
  selectedDate: string,
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>
) => {
  switch (durationTypeSelected) {
    case "Hours":
      const tempHourDate = new Date(selectedDate);
      let finalHourDate = new Date(
        tempHourDate.getFullYear(),
        tempHourDate.getMonth(),
        tempHourDate.getDate(),
        tempHourDate.getHours() + Number(duration),
        tempHourDate.getMinutes(),
        0
      );
      setEndTime(finalHourDate);
      break;
    case "Days":
      const tempDayDate = new Date(selectedDate);
      let finalDayDate = new Date(
        tempDayDate.getFullYear(),
        tempDayDate.getMonth(),
        tempDayDate.getDate() + Number(duration),
        tempDayDate.getHours(),
        tempDayDate.getMinutes(),
        0
      );
      setEndTime(finalDayDate);

      break;

    case "Weeks":
      const tempWeekDate = new Date(selectedDate);
      let finalWeekDate = new Date(
        tempWeekDate.getFullYear(),
        tempWeekDate.getMonth(),
        tempWeekDate.getDate() + Number(+duration * 7),
        tempWeekDate.getHours(),
        tempWeekDate.getMinutes(),
        0
      );
      setEndTime(finalWeekDate);

      break;
    case "Months":
      const tempMonthsDate = new Date(selectedDate);
      let finalMonthDate = new Date(
        tempMonthsDate.getFullYear(),
        tempMonthsDate.getMonth() + Number(duration),
        tempMonthsDate.getDate(),
        tempMonthsDate.getHours(),
        tempMonthsDate.getMinutes(),
        0
      );
      setEndTime(finalMonthDate);

      break;
    default:
      return;
  }
};

export const getFinalDateWithDurationTypeInput = (
  index: number,
  duration: string,
  selectedDate: string,
  setEndTime: React.Dispatch<React.SetStateAction<Date | undefined>>
) => {
  switch (index) {
    case 0:
      const tempHourDate = new Date(selectedDate);
      let finalHourDate = new Date(
        tempHourDate.getFullYear(),
        tempHourDate.getMonth(),
        tempHourDate.getDate(),
        tempHourDate.getHours() + Number(duration),
        tempHourDate.getMinutes(),
        0
      );
      setEndTime(finalHourDate);
      break;
    case 1:
      const tempDayDate = new Date(selectedDate);
      let finalDayDate = new Date(
        tempDayDate.getFullYear(),
        tempDayDate.getMonth(),
        tempDayDate.getDate() + Number(duration),
        tempDayDate.getHours(),
        tempDayDate.getMinutes(),
        0
      );
      setEndTime(finalDayDate);

      break;

    case 2:
      const tempWeekDate = new Date(selectedDate);
      let finalWeekDate = new Date(
        tempWeekDate.getFullYear(),
        tempWeekDate.getMonth(),
        tempWeekDate.getDate() + Number(+duration * 7),
        tempWeekDate.getHours(),
        tempWeekDate.getMinutes(),
        0
      );
      setEndTime(finalWeekDate);

      break;
    case 3:
      const tempMonthsDate = new Date(selectedDate);
      let finalMonthDate = new Date(
        tempMonthsDate.getFullYear(),
        tempMonthsDate.getMonth() + Number(duration),
        tempMonthsDate.getDate(),
        tempMonthsDate.getHours(),
        tempMonthsDate.getMinutes(),
        0
      );
      setEndTime(finalMonthDate);

      break;
    default:
      return;
  }
};

export const getFinalTimeFromStartTimeAndDuration = (
  startTime: Date,
  duration: number
) => {
  console.log('working here too')
  const tempStartTime = new Date(startTime);
  let finalTime = new Date(
    tempStartTime.getFullYear(),
    tempStartTime.getMonth(),
    tempStartTime.getDate(),
    tempStartTime.getHours() + duration,
    tempStartTime.getMinutes(),
    0
  );
  return finalTime;
}

export const getDurationFromStartTimeAndEndTime = (
  startTime: Date,
  endTime: Date
) => {
  const tempStartTime = new Date(startTime);
  const tempEndTime = new Date(endTime);
  let duration = tempEndTime.getHours() - tempStartTime.getHours();
  return duration;
}
