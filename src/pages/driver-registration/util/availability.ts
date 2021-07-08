export const getAvailableDays = (
  MONDAY: boolean,
  TUESDAY: boolean,
  WEDNESDAY: boolean,
  THURSDAY: boolean,
  FRIDAY: boolean,
  SATURDAY: boolean,
  SUNDAY: boolean
) => {
  let driverAvailability: any = {
    MONDAY: MONDAY,
    TUESDAY: TUESDAY,
    WEDNESDAY: WEDNESDAY,
    THURSDAY: THURSDAY,
    FRIDAY: FRIDAY,
    SATURDAY: SATURDAY,
    SUNDAY: SUNDAY,
  };

  let values: any = [];
  for (let val in driverAvailability) {
    if (driverAvailability[val]) {
      values.push(val);
    }
  }

  return values;
};
