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

const newBookData = readJsonFile('../lib/content/newBook.json');
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

function step1() {

    createEnTexts(newBookData.newBook.en.title, newBookData.newBook.author).then((content) => {
        const newBookWithEnTexts = JSON.parse(JSON.stringify(newBookData.newBook))
        // newBookWithEnTexts.en = { ...newBookData.newBook.en }
        newBookWithEnTexts.en.shortDescription = content.shortDescription;
        newBookWithEnTexts.en.longDescription = content.longDescription;
        newBookWithEnTexts.tags = content.tags;
        // Make sure to return the updated object if you need to use it outside
        return newBookWithEnTexts;
    }).then((newBookWithEnTexts: any) => {
        // This console.log will wait until the createEnTexts promise resolves
        console.log("newBookWithEnTexts", newBookWithEnTexts);

        newBookData.newBookWithEnTexts = newBookWithEnTexts;
        writeJsonFile('./content/newBook.json', newBookData);

        console.log("step 1 finished")
        console.log("after step 1:", newBookData)
    });
}


// Setp 2: translate all english texts to german and add them
function step2() {
    translate(newBookData.newBookWithEnTexts.en).then((content: Content) => {
        const newBookFinished = JSON.parse(JSON.stringify(newBookData.newBookWithEnTexts));

        newBookFinished.de.shortDescription = content.shortDescription;
        newBookFinished.de.longDescription = content.longDescription;
        newBookFinished.de.iLike = content.iLike;

        return newBookFinished
    }).then((newBookFinished: Book) => {
        console.log("newBookFinished", newBookFinished);
        newBookData.newBookFinished = newBookFinished;
        writeJsonFile('./content/newBook.json', newBookData);
    })

}


// run either or, otherwise you get a race condition
// step1()
step2()


// TO add
//     imagePath?: string;
// category ?: Category;



// const data = readJsonFile('./content/books_new_spellchecked.json');

// writeJsonFile('./content/books_new_translated.json', data);