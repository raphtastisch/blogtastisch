"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readJsonFile(filePath) {
    try {
        var rawData = fs.readFileSync(filePath, 'utf-8');
        var jsonData = JSON.parse(rawData);
        return jsonData;
    }
    catch (error) {
        console.error('Error reading the JSON file:', error);
        return null;
    }
}
var data = readJsonFile('./content/books.json');
// console.log(data);
var newData = data.map(function (book) {
    var newBook = {
        slug: book.slug,
        date: book.date,
        writtenBy: book.writtenBy,
        category: book.category,
        author: book.author,
        tags: book.tags,
        iLike: book.iLike,
        hasFullText: book.hasFullText,
        releaseDate: book.releaseDate,
        initialReleaseUrl: book.initialReleaseUrl,
        initialReleaseName: book.initialReleaseName,
        imagePath: book.imagePath,
        amazonLink: book.amazonLink,
        de: {
            title: book.titleDE,
            subtitle: book.subtitleDE,
            shortDescription: book.shortDescriptionDE,
            longDescription: book.longDescriptionDE,
            iLike: undefined
        },
        en: {
            title: book.title,
            subtitle: book.subtitle,
            shortDescription: book.shortDescription,
            longDescription: book.longDescription,
            iLike: book.iLike
        }
    };
    return newBook;
});
function writeJsonFile(filePath, data) {
    try {
        var jsonData = JSON.stringify(data, null, 2); // Pretty print
        fs.writeFileSync(filePath, jsonData, 'utf-8');
        console.log('JSON file has been saved.');
    }
    catch (error) {
        console.error('Error writing to the JSON file:', error);
    }
}
writeJsonFile('./content/books_new.json', newData);
