import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// just to make the ordering of books on the home page different every time
export function shuffleArray<T>(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap array[i] with array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}