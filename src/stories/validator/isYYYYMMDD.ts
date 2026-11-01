export const isYYYYMMDD = (inputDate: string): boolean => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(inputDate);
  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (month < 1 || month > 12) return false;

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeap = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  if (isLeap) monthLength[1] = 29;

  return day >= 1 && day <= monthLength[month - 1];
};
