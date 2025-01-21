import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
  return twMerge(clsx(inputs));
  
}




