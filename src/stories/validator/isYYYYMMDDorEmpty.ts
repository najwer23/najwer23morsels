import { isYYYYMMDD } from './isYYYYMMDD';

export const isYYYYMMDDOrEmpty = (inputDate: string): boolean => inputDate === '' || isYYYYMMDD(inputDate);
