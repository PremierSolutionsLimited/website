export const truncateText = (data: string, truncate: number) => {
  if (truncate) {
    if (data?.split("")?.length > truncate) {
      return data?.split("")?.slice(0, truncate)?.join("") + "...";
    }
    return data;
  }

  return data;
};
