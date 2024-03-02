import OpenAI from 'openai';
import { Book, Content } from '../lib/config';
import { readJsonFile, writeJsonFile, openai } from './utils';



// spellcheck iLike as simple string -> string call
async function spellcheck(content: string): Promise<string> {


    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Please correct spelling and grammar for the given text. Dont fix grammatical errors that sem to be made on purpose to make the sentence briefer and more interesting.\n\n' + content }],
        model: 'gpt-4-turbo-preview',
        temperature: 0.2,

    });

    if (!chatCompletion.choices[0].message.content) {
        throw new Error('No result for GPT query');
    }
    else {
        return chatCompletion.choices[0].message.content
    }
}


const data = readJsonFile('./content/books_new.json');

Promise.all(data.map(async (book: Book) => {

    console.log("book en", book.en);
    console.log("book en ilike", book.en!.iLike);

    if (book.en && book.en.iLike) {

        const result = await spellcheck(book.en!.iLike!);
        console.log("result", result)
        book.en.iLike = result
        return book;
    }
    else {
        console.log('No checking')
        return book;
    }
})).then((newData) => {

    console.log("New data", newData);
    writeJsonFile('./content/books_new_spellchecked.json', newData);
})

