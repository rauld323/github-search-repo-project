export const validateLanguageString = (inputString: string) => {
  if (inputString) {
    return inputString;
  } else {
    return "N/A";
  }
};

export const replaceNullWithNA = (arr: string[]) => {
  return arr.map((item) => (item === null ? "N/A" : item));
};
