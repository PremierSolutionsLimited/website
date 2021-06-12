import _ from "lodash";

// used to truncate texts taht us overflowing
export const reduceString = (text: string, length: number): string =>
  _.truncate(text, {
    length: 80,
  });
