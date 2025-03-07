import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let navigateFn: (path: string, opts?: { replace?: boolean }) => void;

export const setNavigate = (nav: typeof navigateFn) => {
  navigateFn = nav;
};

export const navigate = (to: string, opts?: { replace?: boolean }) => {
  if (navigateFn) {
    navigateFn(to, opts);
  } else {
    console.warn('Navigate no inicializado');
  }
};
