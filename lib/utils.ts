import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateEthereumWallet(str: string, length: number) {
  return str.slice(0, length) + "..." + str.slice(-length);
}
