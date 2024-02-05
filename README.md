


# New Content:

* Books with fulltext = true should have all book-content in German
* Books with ned Tags need an update of the taglist in books.ts and in both translation files
* books with full text should have a "de.mdx" and "en.mdx" in the corresponding folder
* New books need illustration and cover image in the correct folder (and only with .jpg, .png, .jpeg, or .webp format); articles need only the illustration
* check descriptionLong length for appropriate space



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