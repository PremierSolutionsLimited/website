export const getMoney = (amount: string): string =>
  amount
    ? parseFloat(amount)
        ?.toFixed(2)
        ?.replace(/\d(?=(\d{3})+\.)/g, "$&,")
        .toString()
    : "0";
