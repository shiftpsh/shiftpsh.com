import { m } from "framer-motion";

export const formatNumber = (number: number, decimalPlaces = 0): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(number);
};

export const formatFilesize = (bytes: number): string => {
  if (bytes < 1000) return `${bytes}B`;
  if (bytes < 1e4) return `${formatNumber(bytes / 1e3, 1)}KB`;
  if (bytes < 1e6) return `${formatNumber(bytes / 1e3)}KB`;
  if (bytes < 1e7) return `${formatNumber(bytes / 1e6, 1)}MB`;
  return `${formatNumber(bytes / 1e6)}MB`;
};
