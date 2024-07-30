import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const portfolio_categories: {
  [key: number]: string;
} = {
  8: "Branding",
  9: "UI/UX",
  10: "Web Development",
  11: "Video Production",
};
