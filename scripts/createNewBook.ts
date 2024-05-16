import { readJsonFile, writeJsonFile, openai, translate } from './utils';
import OpenAI from 'openai';
import { Book, Content } from '../lib/config';



// create folder and add cover image


// {
//     "slug": "", //one word or connected with "-", folder with image should have the same name
//     "date": "", // YYYY-MM-DD
//     "author": "", // connect multiple authors with and
//     "hasFullText": false,
//     "releaseDate": "", // YYYY-MM-DD
//     "initialReleaseUrl": "", //"https://materie.at/gk/rezension-aufklaerung-jetzt/",
//     "initialReleaseName": "", //"Materie.at",
//     "amazonLink": "",
//     "de": {
//         "title": "",
//         "subtitle": "",
//     },
//     "en": {
//         "title": "",
//         "subtitle": "",
//         "iLike": "",
//     }
// }

const newBookData = readJsonFile('./scripts/newBook.json');
// console.log("newBook", newBookData.newBook)


async function createEnTexts(title: string, author: string): Promise<{ shortDescription: string, longDescription: string, tags: string[] }> {

    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Create a long and a short description as well as a list of tags for the book "${title} from ${author}. \n\nThe short description should be about 10 words.\nThe long description should start midsentence with the verb, thus don't include the authors name, focus on what makes the book interesting or helpful. Make it  4 sentences long.\nPick 5 relevant tags in small caps.` }],
        model: 'gpt-4-turbo-preview',
        functions: [{
            name: 'createDescriptions',
            parameters: {
                "type": "object",
                "properties": {
                    "shortDescription": {
                        "type": "string",
                        "description": "About 10 words long.",
                    },
                    "longDescription": {
                        "type": "string",
                        "description": "About 4 sentences long. Start midsentence with the verb. Don't include the authors name. Focus on what makes the book interesting or helpful.",
                    },
                    "tags": {
                        "type": "array",
                        "description": "Tags that describe the book. At least 5 tags are required.",
                        "items": {
                            "type": "string",
                            "description": "A tag that describes the book in small caps"
                        }
                    },
                },
                "required": ["shortDescription", "longDescription", "tags"],
            }
        }],
        function_call: { name: 'createDescriptions' },
        temperature: 0.3,

    });

    // console.log(chatCompletion.choices[0].message.content);

    if (!chatCompletion.choices[0].message.function_call || !chatCompletion.choices[0].message.function_call.arguments) {
        throw new Error('Function call is undefined');
    }
    else {
        return JSON.parse(chatCompletion.choices[0].message.function_call.arguments)
    }
}


// // Step 1: add all english texts

// async function step1():Promise<any> {

//     await createEnTexts(newBookData.newBook.en.title, newBookData.newBook.author).then((content) => {
//         const newBookWithEnTexts = JSON.parse(JSON.stringify(newBookData.newBook))
//         // newBookWithEnTexts.en = { ...newBookData.newBook.en }
//         newBookWithEnTexts.en.shortDescription = content.shortDescription;
//         newBookWithEnTexts.en.longDescription = content.longDescription;
//         newBookWithEnTexts.tags = content.tags;
//         // Make sure to return the updated object if you need to use it outside
//         return newBookWithEnTexts;
//     }).then((newBookWithEnTexts: any) => {
//         // This console.log will wait until the createEnTexts promise resolves
//         console.log("newBookWithEnTexts", newBookWithEnTexts);

//         newBookData.newBookWithEnTexts = newBookWithEnTexts;
//         writeJsonFile('./scripts/newBook.json', newBookData);

//         console.log("step 1 finished")
//         console.log("after step 1:", newBookData)

//     });
//     return true
// }

async function step1(): Promise<any> {
    const content = await createEnTexts(newBookData.newBook.en.title, newBookData.newBook.author);
    const newBookWithEnTexts = JSON.parse(JSON.stringify(newBookData.newBook));
    newBookWithEnTexts.en.shortDescription = content.shortDescription;
    newBookWithEnTexts.en.longDescription = content.longDescription;
    newBookWithEnTexts.tags = content.tags;
    console.log("newBookWithEnTexts", newBookWithEnTexts);
    newBookData.newBookWithEnTexts = newBookWithEnTexts;
    await writeJsonFile('./scripts/newBook.json', newBookData);
    console.log("step 1 finished");
    console.log("after step 1:", newBookData);
    return true;
}


// // Setp 2: translate all english texts to german and add them
// async function step2(): Promise<boolean> {
//     await translate(newBookData.newBookWithEnTexts.en).then((content: Content) => {
//         const newBookFinished = JSON.parse(JSON.stringify(newBookData.newBookWithEnTexts));

//         newBookFinished.de.shortDescription = content.shortDescription;
//         newBookFinished.de.longDescription = content.longDescription;
//         newBookFinished.de.iLike = content.iLike;

//         return newBookFinished
//     }).then((newBookFinished: Book) => {
//         console.log("newBookFinished", newBookFinished);
//         newBookData.newBookFinished = newBookFinished;
//         writeJsonFile('./scripts/newBook.json', newBookData);

//     })
//     return true
// }

async function step2(): Promise<boolean> {
    const content = await translate(newBookData.newBookWithEnTexts.en);
    const newBookFinished = JSON.parse(JSON.stringify(newBookData.newBookWithEnTexts));
    newBookFinished.de.shortDescription = content.shortDescription;
    newBookFinished.de.longDescription = content.longDescription;
    newBookFinished.de.iLike = content.iLike;
    console.log("newBookFinished", newBookFinished);
    newBookData.newBookFinished = newBookFinished;
    await writeJsonFile('./scripts/newBook.json', newBookData);
    return true;
}

// run either or, otherwise you get a race condition

async function main(run: number = 0) {
    if (run === 0 || run === 1) {
        await step1()

    }

    if (run === 0 || run === 2) {
        await step2()
    }


}
// step1()
// step2()

const run = parseInt(process.argv[2]);
//convert run to int and throw an error if it is not an int
if (isNaN(run)) {
    throw new Error('Please provide a number as an argument');
}

console.log("Running step ", run)
main(run);

// TO add
//     imagePath?: string;
// category ?: Category;



// const data = readJsonFile('./content/books_new_spellchecked.json');

// writeJsonFile('./content/books_new_translated.json', data);