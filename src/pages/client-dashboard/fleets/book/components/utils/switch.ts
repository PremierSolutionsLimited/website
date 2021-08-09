import React from "react";

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
