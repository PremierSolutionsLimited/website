export const duplicateCheck = (message) => {
  const n = message.indexOf("{");
  const n1 = message.indexOf("}");
  const stringobj = message.slice(n + 1, n1);
  const arrayOfSplit = stringobj?.split(":");

  return `${arrayOfSplit[1]?.toString()} has already been taken, Enter a different ${arrayOfSplit[0]?.toString()}`;

  // toaster.notify(
  //     `${arrayOfSplit[1]?.toString()} is already been taken,`,
  //     {
  //         description: `Enter a new ${arrayOfSplit[0]?.toString()}`,
  //     }
  // );
};
