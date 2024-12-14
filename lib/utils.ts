import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIsOnServer() {
  return typeof window === "undefined";
}

export function getClientOrServerUrl() {
  if (checkIsOnServer()) {
    return `${process.env.BACKEND_DOMAIN}/api/v1`;
  } else {
    console.log("process in here");
    return "/api/v1";
  }
}
