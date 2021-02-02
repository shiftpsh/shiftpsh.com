const numberFormat = (value: number, decimalPlaces?: number) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })
}

export { numberFormat }
