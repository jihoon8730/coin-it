import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormater(date: number) {
  return date ? format(date, 'yyyy-MM-dd HH:mm') : '-';
}
