

export const removeFileExtensionString = (str: string): string => {
  if (!str) return str;
  return str.split(".")[0];
}
