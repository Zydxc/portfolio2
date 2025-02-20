

export const convertMonthToWord = (dateString: string): string => {
  const [month, year] = dateString.split("-");
  const monthMap: { [key: string]: string } = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  const monthName = monthMap[month];
  return `${monthName} ${year}`;

};




export const removeFileExtensionString = (str: string): string => {
  if (!str) return str;
  return str.split(".")[0];
};
