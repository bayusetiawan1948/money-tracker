import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatCurrency = (value: string | number) => {
  const num = isNaN(Number(value)) ? 0 : Number(value);

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(num);
};

export const getInitials = (fullname: string) => {
  const words = fullname.trim().split(/\s+/);

  return words[0].slice(0, 2).toUpperCase();
};
