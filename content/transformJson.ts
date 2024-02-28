import { Book } from '../lib/config';
import * as fs from 'fs';

function readJsonFile(filePath: string): any {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(rawData);
        return jsonData;
    } catch (error) {
        console.error('Error reading the JSON file:', error);
        return null;
    }
}

const data = readJsonFile('./content/books.json');

// console.log(data);


const newData: Book[] = data.map((book: Book) => {
    const newBook: Book = {
        slug:book.slug,
        date:book.date,
        writtenBy:book.writtenBy,
        category:book.category,
        author:book.author,
        tags:book.tags,
        iLike:book.iLike,
        hasFullText:book.hasFullText,
        releaseDate:book.releaseDate,
        initialReleaseUrl:book.initialReleaseUrl,
        initialReleaseName:book.initialReleaseName,
        imagePath:book.imagePath,
        amazonLink:book.amazonLink,
        de: {
            title:book.titleDE,
            subtitle:book.subtitleDE,
            shortDescription:book.shortDescriptionDE,
            longDescription:book.longDescriptionDE,
            iLike:undefined
        },
        en: {
            title:book.title,
            subtitle:book.subtitle,
            shortDescription:book.shortDescription,
            longDescription:book.longDescription,
            iLike:book.iLike
        }
    }

    return newBook;
})


function writeJsonFile(filePath: string, data: any): void {
    try {
        const jsonData = JSON.stringify(data, null, 2); // Pretty print
        fs.writeFileSync(filePath, jsonData, 'utf-8');
        console.log('JSON file has been saved.');
    } catch (error) {
        console.error('Error writing to the JSON file:', error);
    }
}

writeJsonFile('./content/books_new.json', newData);