export const getUniqueStrings = (languagOptions: string[]): string[] => {
  return languagOptions.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};
