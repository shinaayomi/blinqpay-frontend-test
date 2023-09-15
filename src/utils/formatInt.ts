const formatInt = (value: number, withSymbol?: boolean): string => {
  if (value !== undefined && value !== 0) {
    const stringValue = value?.toString();
    const amountChunk = Number(stringValue?.split(".")[0]);
    const decimalChunk = stringValue.split(".")[1]
      ? `.${stringValue.split(".")[1]}`
      : "";

    return `${withSymbol && "₦"}${amountChunk?.toLocaleString(
      "en-US"
    )}${decimalChunk}`;
  }

  return `${"₦"}0`;
};

export default formatInt;
