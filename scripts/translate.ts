import OpenAI from 'openai';
// import dotenv from 'dotenv';
import { Book, Content } from '../lib/config';
import { readJsonFile, writeJsonFile, openai, translate } from './utils';
// dotenv.config();

// const openai = new OpenAI({
//     organization: process.env['OPENAI_ORGANIZATION'],
//     apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });





// function stringifyContent(content: any): string {
//     return JSON.stringify(content, null, 2);
// }

// const testContent = {
//     "title": "How to Win Friends and Influence People",
//     "shortDescription": "A timeless guide to interpersonal skills and success.",
//     "longDescription": "A landmark book in the field of self-help and personal development. It provides practical advice on improving communication skills, building relationships, and influencing others. Carnegie's principles, based on understanding human nature, have helped millions achieve personal and professional success.",
//     "iLike": "A classic with timeless lessions for better communication and improved personal relationships."
// }








// // wrap in try-catch to retry
// translate(testContent).then((chatCompletion) => {
//     console.log(chatCompletion)
// })

// spellcheck('A classic with timeless lessions for better communication and improved personal relationships.').then((chatCompletion) => { console.log(chatCompletion) })


const data = readJsonFile('./content/books_new_spellchecked.json');

Promise.all(data.map(async (book: Book) => {

    // console.log("book en", book.en);
    // console.log("book en ilike", book.en!.iLike);

    if (book.en && book.en.iLike && !(book.de && book.de.title)) {

        const result = await translate(book.en);
        console.log("result", result)
        book.de = result
        return book;
    }
    else {
        console.log('No checking')
        return book;
    }
})).then((newData) => {

    // console.log("New data", newData);
    writeJsonFile('./content/books_new_translated.json', newData);
})
