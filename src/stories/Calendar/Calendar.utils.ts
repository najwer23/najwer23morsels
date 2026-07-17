const createDate = (year: number, monthIndex: number, day: number) => {
  const date = new Date(0);
  date.setFullYear(year, monthIndex, day);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const calculateNewDayOfMonth = (inputDate: string | Date, newDayOfMonth: number): Date => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const lastDay = createDate(year, monthIndex + 1, 0).getDate();
  const adjustedNewDayOfMonth = Math.max(1, Math.min(newDayOfMonth, lastDay));
  return createDate(year, monthIndex, adjustedNewDayOfMonth);
};

export const generateYears = (inputDate: string | Date) => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const startYear = date.getFullYear() - 4;
  const endYear = date.getFullYear() + 4;
  return Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index).filter((x) => x >= 0);
};

export const changeYearInDate = (inputDate: string | Date, n: number) => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = n;
  const month = date.getMonth();
  const day = date.getDate();
  return createDate(year, month, day);
};

export const addMonths = (inputDate: string | Date, n: number) => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = date.getFullYear();
  const month = date.getMonth() + n;
  const day = date.getDate();
  const newDate = createDate(year, month, day);

  if (newDate.getDate() !== day) {
    const lastDayOfMonth = createDate(year, month + 1, 0).getDate();
    return createDate(year, month, lastDayOfMonth);
  }

  return newDate;
};

export const getDaysInMonth = (inputDate: string | Date): number => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  return createDate(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (inputDate: string | Date): number => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = createDate(year, month, 1);
  return firstDay.getDay();
};

export const getDateForInput = (inputDate: string | Date): string => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateDaysArray = (inputDate: string | Date) => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const dayOfMonth = date.getDate();
  const firstDayOfMonth = (getFirstDayOfMonth(date) + 6) % 7;
  const daysInMonth = getDaysInMonth(date);

  return Array.from({ length: daysInMonth + firstDayOfMonth }, (_, index) => {
    let dayValue = '';
    let cssClass = '';

    if (index <= firstDayOfMonth - 1) {
      dayValue = '';
      cssClass = 'blank';
    } else if (index === dayOfMonth + firstDayOfMonth - 1) {
      dayValue = String(index - firstDayOfMonth + 1);
      cssClass = 'active';
    } else {
      dayValue = String(index - firstDayOfMonth + 1);
      cssClass = 'clickable';
    }
    return {
      day: index - firstDayOfMonth + 1,
      dayValue,
      cssClass,
    };
  });
};

export const isYYYYMMDD = (inputDate: string) => {
  if (typeof inputDate === 'string') {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(inputDate);
    if (!match) return false;
  }

  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  return day > 0 && day <= monthLength[month] && inputDate.length == 10;
};
