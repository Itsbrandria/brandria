import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const portfolio_categories: { [key: string]: number } = {
  Branding: 8,
  "UI/UX": 9,
  "Web Development": 10,
  "Video Production": 11,
};
