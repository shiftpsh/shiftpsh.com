export const extractNumber = (text: string) => {
  const match = text.match(/(\d+)/);
  if (!match) {
    throw new Error("Failed to extract number");
  }
  return +match[1];
};
