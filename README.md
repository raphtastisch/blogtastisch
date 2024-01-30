
# Content Prompt:

Take the the list of books below.

 Create an object of the following style for each book that you know. If you don't know the book, just write "unknown" instead of the object.
{
    title: string;
    subtitle: string; // if there is a second part of the title, otherwise invent something fitting
    author: string; // full name, connect multiple authors with "and"
    slug: string; // a filename for this book, as short as possible
    shortDescription: string; 
    longDescription: string; // start midsentence with the verb, thus don't include the authors name, focus on what makes the book interesting or helpful. Make it about 5 sentences long.
    date: new Date("DATE_AS_STRING"); // eg. 2024-01-01
    tags?: string[]; // 4-5 relevant tags, single words in small caps, add tag "non-fiction" for each book
}, 

List of Books: