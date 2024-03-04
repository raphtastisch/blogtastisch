// import { Book } from '../../lib/config';
// import * as fs from 'fs';

// import { readJsonFile, writeJsonFile } from './../utils';

// const data = readJsonFile('./content/books.json');

// // console.log(data);


// const newData: Book[] = data.map((book: Book) => {
//     const newBook: Book = {
//         slug:book.slug,
//         date:book.date,
//         writtenBy:book.writtenBy,
//         category:book.category,
//         author:book.author,
//         tags:book.tags,
//         iLike:book.iLike,
//         hasFullText:book.hasFullText,
//         releaseDate:book.releaseDate,
//         initialReleaseUrl:book.initialReleaseUrl,
//         initialReleaseName:book.initialReleaseName,
//         imagePath:book.imagePath,
//         amazonLink:book.amazonLink,
//         de: {
//             // title:book.titleDE,
//             // subtitle:book.subtitleDE,
//             // shortDescription:book.shortDescriptionDE,
//             // longDescription:book.longDescriptionDE,
//             iLike:undefined
//         },
//         en: {
//             title:book.title,
//             subtitle:book.subtitle,
//             shortDescription:book.shortDescription,
//             longDescription:book.longDescription,
//             iLike:book.iLike
//         }
//     }

//     return newBook;
// })



// writeJsonFile('./content/books_new.json', newData);