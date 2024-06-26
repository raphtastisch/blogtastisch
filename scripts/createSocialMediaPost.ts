

// Import necessary modules and functions
import OpenAI from 'openai';
import { Book, BookSocialMediaPost, Content, contentPath } from "../lib/config";
import { readJsonFile, writeJsonFile, openai } from './utils';
import path from 'path';
import fs from 'fs';
import { addImage, createTask } from './clickupAPI';
// const fs = require('fs');

/* -------------------------------------------------------------------------- */
// config
/* -------------------------------------------------------------------------- */

const systemMessage: OpenAI.ChatCompletionMessageParam = { role: 'system', content: "You are an expert in creating viral, well-crafted social media posts for books. Don't use any exotic words. Use the name of the author only once per post." };


/* -------------------------------------------------------------------------- */
// Step 1
/* -------------------------------------------------------------------------- */


/**
 * Generates a LinkedIn post text for a book.
 * @param {string} author - The author of the book.
 * @param {Content} enTexts - English content of the book including title, long description, and reason for liking the book.
 * @returns {Promise<string | null>} A promise that resolves to the LinkedIn post text or null if failed.
 */
async function createLinkedinText(author: string, enTexts: Content): Promise<string | null> {
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [systemMessage, {
            role: 'user', content: `Create a short LinkedIn post for the book "${enTexts.title}" from ${author} using the content from the descriptions and from the reason why I like the book.
Use paragraphs to structure the text, but don't use headlines. Start each paragraph with a fitting icon or emoji to make the post more engaging.

Structure:
- The post should start with an interesting or controversial sentence related to the book (a "hook"), perferably short. Use only a single sentence! If it is a question, start the second paragraph with the answer.
- Add: \n\n\n
- The second paragraph should give the first paragraph (the "hook") some content and if necessary an explanation based on the content of the book. It should end with a question that makes the reader curious about the book. Keep the question simple and don't be too pushy. This paragraph should not include the book title or the author's name. Don't use "delves" in the text. 
- Add \n\n
- The third paragraph should include the book title and the name of the author and some general information about what the book is about. Don't use the book title in any of the following paragraphs.
- Add \n\n
- The fourth paragraph should include the reason why I like the book and end with question that tempts the reader to comment on the post. 
- Add: \n\n\n
- Add a few general hashtags that are related to the book.
- Add: \n\n\n
- Add four more line breaks and then a call to action for more book recommendations on my homepage: https:  //raphaelfritz.at


Source Content:
Short description: ${enTexts.shortDescription}
Long description: ${enTexts.longDescription}
Reason why I like the book: ${enTexts.iLike}`
        }],
        model: 'gpt-4-turbo-preview',
        temperature: 0.3,
    });

    if (!chatCompletion.choices[0].message.content) {
        console.log("Error while creating a LinkedIn text", enTexts.title, author, 'Error while creating a LinkedIn Text.');
        return null;
    } else {
        return chatCompletion.choices[0].message.content;
    }
}

/**
 * Generates a WhatsApp status text for a book.
 * @param {string} author - The author of the book.
 * @param {Content} deTexts - German content of the book including title, descriptions, and reason for liking the book.
 * @returns {Promise<string | null>} A promise that resolves to the WhatsApp status text or null if failed.
 */
async function createWhatsappText(author: string, deTexts: Content): Promise<string | null> {
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [systemMessage, {
            role: 'user', content: `Erstelle einen kurzen WhatsApp-Status-Text über das Buch "${deTexts.title}" von ${author}. Verwende 2 Sätze. Der Status-Text sollte kurz, einprägsam und im lockeren Ton sein. Verwende nur die Beschreibungen und den Grund, wieso ich das Buch mag, als Grundlage für den Post. Erwähne den Buchtitel nicht im Text! Benutze am Ende ein passendes Icons oder Emoji, um den Beitrag ansprechender zu machen. Verwende auf keinen Fall Hashtags! Setze den Text nicht in Anführungszeichen.

Der Grund, warum ich das Buch mag: ${deTexts.iLike}
Kurze Beschreibung: ${deTexts.shortDescription}
Lange Beschreibung als Kontext: ${deTexts.longDescription}`
        }],
        model: 'gpt-4-turbo-preview',
        temperature: 0.3,
    });

    if (!chatCompletion.choices[0].message.content) {
        console.log("Error while creating a WhatsApp text", deTexts.title, author, 'Error while creating a WhatsApp Text.');
        return null;
    } else {
        return chatCompletion.choices[0].message.content;
    }
}

/**
 * Generates a creative prompt for creating an image with DALL-E based on a book.
 * @param {Content} enTexts - English content of the book including title.
 * @returns {Promise<string | null>} A promise that resolves to the image prompt or null if failed.
 */
async function createImagePrompt(enTexts: Content): Promise<string | null> {
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [{
            role: 'user', content: `Create a prompt for an image with DALL-E illustrating the book "${enTexts.title}". If possible, base the prompt on the title, otherwise come up with exactly one interesting idea to capture the essence of the book or an important concept of it. Use only the descriptions below as basis of your idea. If possible make a face a prominent part of it to make it more relatable. Don't overload the picture with lots of content. Include as few persons as possible.

Don't mention the author or the title in the prompt, just the concept or scene what should be illustrated.            
Don't return anything but the promt itself.

Context:
Short description: ${enTexts.shortDescription}
Long description: ${enTexts.longDescription}
Why i like the book: ${enTexts.iLike}`
        }], // Aim for a hyper-realistic design suitable for social media posts.
        model: 'gpt-4-turbo-preview',
        temperature: 0.3,
    });

    if (!chatCompletion.choices[0].message.content) {
        console.log("Error while creating an image prompt", enTexts.title, 'Error while creating an Image Prompt undefined');
        return null;
    } else {
        return "Create a 16:9 image in a photo-realistic style. " + chatCompletion.choices[0].message.content;
    }
}


function step1(numberResults: number, startIndex: number = 0) {


    // Load existing book data and social media posts from JSON files
    const bookData = readJsonFile("./public/books.json"); // Corrected typo in file path
    const existingSocialMediaPosts = readJsonFile("./scripts/socialMediaPosts.json");

    // Extract slugs of existing social media posts to avoid duplicates
    const slugs = existingSocialMediaPosts.map((post: BookSocialMediaPost) => post.slug);

    // Filter out books that already have social media posts
    const filteredBookData = bookData.filter((book: any) => !slugs.includes(book.slug));



    // Generate social media posts for filtered books, limiting to the first three entries
    Promise.all(filteredBookData.slice(startIndex, startIndex + numberResults).map(async (book: Book): Promise<BookSocialMediaPost | null> => {

        if (!book.en || !book.de) {
            console.log("Book has no English or German content", book.slug)
            return null; // Ensure function returns null for invalid books
        }

        const linkedinText = await createLinkedinText(book.author, book.en);
        const whatsappText = await createWhatsappText(book.author, book.de);
        const imagePrompt = await createImagePrompt(book.en);

        if (!linkedinText || !whatsappText || !imagePrompt) {
            console.log("Error while creating social media posts", book.slug)
            return null; // Ensure function returns null for failures in post creation
        }

        return {
            slug: book.slug,
            linkedinText: linkedinText,
            whatsappText: whatsappText,
            facebookText: "", // Placeholder step2
            imagePrompt: imagePrompt,
            // linkedinInClickup: false,
            // whatsappInClickup: false,
            // facebookInClickup: false,
            step1completed: true,
            step2completed: false,
            step3completed: false,
            step4completed: false,
            dueDate: null
        };
    })).then((result) => {
        // Filter out null values and append successful posts to the existing array
        const nonNullPosts = result.filter(post => post !== null);
        nonNullPosts.forEach(post => existingSocialMediaPosts.push(post));
        writeJsonFile("./scripts/socialMediaPosts.json", existingSocialMediaPosts);
    });
}


/* -------------------------------------------------------------------------- */
// Step 2 + 3
/* -------------------------------------------------------------------------- */
// Translates given text to German using OpenAI's translation model.
// @param text: string - The text to be translated.
// @returns Promise<string | null> - The translated text or null if translation fails.
async function translateTextToDe(text: string): Promise<string | null> {
    // Create a chat completion request to OpenAI's API for text translation.
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [{
            role: 'user', content: `Translate the following text to German. Use the informal way of referring to a person (e.g. "du" instead of "Sie"): ${text}`
        }],
        model: 'gpt-4-turbo-preview',
        temperature: 0.3,
    });

    // Check if the translation was successful and return the result.
    if (!chatCompletion.choices[0].message.content) {
        console.log("Error while translating text to German:", text);
        return null;
    } else {
        return chatCompletion.choices[0].message.content;
    }
}

// Generates an image based on the given prompt and saves it with a specified slug.
// @param prompt: string - The prompt based on which the image is generated.
// @param slug: string - A unique identifier used to name the saved image file.
// @returns Promise<boolean | null> - Returns true if the image is successfully saved, null otherwise.
async function generateImage(prompt: string, slug: string): Promise<boolean | null> {
    // Generate an image using OpenAI's DALL-E model with the provided prompt.
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt, quality: "hd", size: "1792x1024",
        response_format: "b64_json"
    });

    // console.log(image.data[0]);

    // Check if the image data is present and correctly retrieved.
    if (!image.data || !image.data[0] || !image.data[0].b64_json) {
        console.log("No b64_json data found in image response");
        return null;
    }

    // Convert the base64 encoded JSON to a buffer.
    const buffer = Buffer.from(image.data[0].b64_json, 'base64');

    // Write the buffer as an image file to the specified path using the slug.
    fs.writeFileSync(path.join(process.cwd(), "scripts", "images", slug + "_illustration.webp"), buffer);

    console.log('Image saved successfully for', slug);

    return true;
}




// Processes social media posts for step 2, translating text and generating images.
// No arguments are taken.
// No explicit return value, but it will modify the state of `existingSocialMediaPosts`.
async function step2(noSave: boolean = false): Promise<BookSocialMediaPost[]> {

    const existingSocialMediaPosts = readJsonFile("./scripts/socialMediaPosts.json");


    // Filter posts that have completed step 1 but not step 2.
    const filteredPosts = existingSocialMediaPosts.filter((post: BookSocialMediaPost) => post.step1completed && !post.step2completed);

    // Iterate over filteredPosts to translate text and generate images.
    const promises = filteredPosts.map(async (post: BookSocialMediaPost) => {
        try {
            // Generate an image based on the post's image prompt.
            await generateImage(post.imagePrompt, post.slug)

        } catch (error) {
            console.error("Error processing post for", post.slug, error);
        }

        post.step2completed = true;
    });

    // Wait for all post processing to complete.
    await Promise.all(promises);

    if (!noSave) {    // Save the updated posts to a JSON file.
        writeJsonFile("./scripts/socialMediaPosts.json", existingSocialMediaPosts);
    }

    return existingSocialMediaPosts;
}


async function step3(existingSocialMediaPosts: BookSocialMediaPost[] | null = null) {

    if (!existingSocialMediaPosts || existingSocialMediaPosts.length === 0) {
        existingSocialMediaPosts = readJsonFile("./scripts/socialMediaPosts.json");

        // if its still empty: throw an error
        if (!existingSocialMediaPosts || existingSocialMediaPosts.length === 0) {
            throw new Error("No posts found");
        }
    }

    const filteredPosts = existingSocialMediaPosts!.filter((post: BookSocialMediaPost) => post.step1completed && post.step2completed && !post.step3completed);

    const promises = filteredPosts.map(async (post: BookSocialMediaPost) => {
        try {

            // Translate LinkedIn text to German for Facebook posts.
            const facebookText = await translateTextToDe(post.linkedinText);

            // Update the post if the Facebook text was successfully translated.
            if (facebookText) {
                post.facebookText = facebookText;
            } else {
                console.log("Error while translating LinkedIn text to German for", post.slug);
            }
        } catch (error) {
            console.error("Error processing post for", post.slug, error);
        }

        post.step3completed = true;
    });

    // Wait for all post processing to complete.
    await Promise.all(promises);


    // Save the updated posts to a JSON file.
    writeJsonFile("./scripts/socialMediaPosts.json", existingSocialMediaPosts);
}

/* -------------------------------------------------------------------------- */
// Step 4
/* -------------------------------------------------------------------------- */

function getNextMonday(date: Date): Date {
    const result = new Date(date.getTime()); // Create a new Date object with the same time
    result.setDate(result.getDate() + ((1 + 7 - result.getDay()) % 7)); // Add the number of days until the next Monday
    return result;
}

function getNextThursday(date: Date): Date {
    const result = new Date(date.getTime()); // Create a new Date object with the same time
    result.setDate(result.getDate() + ((4 + 7 - result.getDay()) % 7)); // Add the number of days until the next Thursday
    return result;
}

function getNextMondayOrThursday(date: Date): Date {
    const nextMonday = getNextMonday(date);
    const nextThursday = getNextThursday(date);

    if (nextMonday.getTime() <= nextThursday.getTime()) {
        return nextMonday;
    } else {
        return nextThursday;
    }
}


async function step4(firstDate: Date = new Date()) {
    const existingSocialMediaPosts = readJsonFile("./scripts/socialMediaPosts.json");

    // just filters it out, down stream it changes the elements in place
    const filteredPosts = existingSocialMediaPosts.filter((post: BookSocialMediaPost) => post.step2completed && post.step3completed && !post.step4completed);

    // Pre-compute due dates to avoid async issues when generating on the fly
    const dueDates: Date[] = [];
    let nextDate = firstDate;
    for (let i = 0; i < filteredPosts.length; i++) {
        nextDate = getNextMondayOrThursday(nextDate);
        // create a new object!
        dueDates.push(new Date(nextDate.getTime()));
        // go one day forward
        nextDate.setDate(nextDate.getDate() + 1);
    }

    console.log("dueDates", dueDates);

    // Use map to create an array of promises for each post processing
    const promises = filteredPosts.map(async (post: BookSocialMediaPost, index: number) => {
        const imagePath = path.join(process.cwd(), "scripts", "images", post.slug + "_illustration.webp");

        const folderPath = path.join(process.cwd(), ...contentPath, "books", post.slug);

        const filenames: string[] = fs.readdirSync(folderPath);
        const imagenameWithExtension = filenames.find((file) => file.includes("cover"));

        if (!imagenameWithExtension) {
            console.log("No cover image found for", post.slug);
            return;
        }

        const coverImagePath = path.join(folderPath, imagenameWithExtension);

        const dueDate = dueDates[index]; // Get the due date for the post

        try {
            // Create tasks and add images for Linkedin, Whatsapp, and Facebook
            const linkedinTaskId = await createTask("Post on Linkedin: " + post.slug, post.linkedinText, dueDate);
            await addImage(linkedinTaskId, imagePath);

            const whatsappTaskId = await createTask("Post on Whatsapp: " + post.slug, post.whatsappText, dueDate);
            await addImage(whatsappTaskId, coverImagePath); // show the cover image instead of the illustration

            const facebookTaskId = await createTask("Post on Facebook: " + post.slug, post.facebookText, dueDate);
            await addImage(facebookTaskId, imagePath);

            // Copy and rename the file
            const newImagePath = path.join(folderPath, "illustration.webp");
            console.log(imagePath, newImagePath)
            fs.renameSync(imagePath, newImagePath);

            // Mark post as processed
            post.dueDate = dueDate;
            post.step4completed = true;
        } catch (error) {
            // Handle any errors that might occur
            console.error("Error processing post", post.slug, error);
        }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    writeJsonFile("./scripts/socialMediaPosts.json", existingSocialMediaPosts);
}



async function callSteps(step: number) {
    if (step === 1) {
        await step1(1, 0);
    } else if (step === 2) {
        await step2(); // create Image
    } else if (step === 3) {
        await step3(); // translate for facebook
    } else if (step === 23) {
        const existingSocialMediaPosts: BookSocialMediaPost[] = await step2(true); // don't save here
        await step3(existingSocialMediaPosts);
    } else if (step === 4) {
        await step4(new Date());
    }
    else {
        console.log("Invalid step number");
    }
}




const run = parseInt(process.argv[2]);
//convert run to int and throw an error if it is not an int
if (isNaN(run)) {
    throw new Error('Please provide a number as an argument');
}

console.log("Running step ", run)
callSteps(run);



/* -------------------------------------------------------------------------- */
// npx ts-node -P .\scripts\tsconfig.script.json .\scripts\createSocialMediaPost.ts
/* -------------------------------------------------------------------------- */




// insights
/*

Make a few hook recommendations, then select one

give comment to each section (or with voice?) and let GPT edit it

run a spell check automatically after editing


*/