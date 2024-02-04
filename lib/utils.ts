import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post } from "./config";
import { getBooksWithFullText } from "./books";
import { articles } from "./articles";

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


export function dateToString(date: Date): string {
  return `${new Date(date)
    .getDate()
    .toString()
    .padStart(2, "0")}.${(new Date(date).getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${new Date(
        date
      ).getFullYear()}`
}


export function getPostWithGermanContent(post: Post): Post {

  // its important to copy the book, otherwise the original book would be changed
  const postCopy = { ...post }

  if (postCopy.titleDE) { postCopy.title = postCopy.titleDE }
  if (postCopy.subtitleDE) { postCopy.subtitle = postCopy.subtitleDE }
  if (postCopy.shortDescriptionDE) { postCopy.shortDescription = postCopy.shortDescriptionDE }
  if (postCopy.longDescriptionDE) { postCopy.longDescription = postCopy.longDescriptionDE }

  return postCopy
}