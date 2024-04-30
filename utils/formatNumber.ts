export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat().format(number);
};
