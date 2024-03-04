import * as fs from 'fs';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { Content } from '../lib/config';

dotenv.config();

export const openai = new OpenAI({
    organization: process.env['OPENAI_ORGANIZATION'],
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});


export function readJsonFile(filePath: string): any {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(rawData);
        return jsonData;
    } catch (error) {
        console.error('Error reading the JSON file:', error);
        return null;
    }
}

export function writeJsonFile(filePath: string, data: any): void {
    try {
        const jsonData = JSON.stringify(data, null, 2); // Pretty print
        fs.writeFileSync(filePath, jsonData, 'utf-8');
        console.log('JSON file has been saved.');
    } catch (error) {
        console.error('Error writing to the JSON file:', error);
    }
}

export async function translate(content: Content): Promise<Content> {

    const stringifiedContent = JSON.stringify(content, null, 2);

    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Please translate the following information about a book from English to German. Translate the titel only if you know the official translation, otherwise use the original. Always translate iLike, shortDescription and longDescription to German!\n\n' + stringifiedContent }],
        model: 'gpt-4-turbo-preview',
        functions: [{
            name: 'translateToGerman',
            description: 'Translate from English to German',
            parameters: {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "description": "The book title. If you know it, use the official translation, otherwise use the original title.",
                    },
                    "shortDescription": {
                        "type": "string",
                        "description": "Always translated to German. Invent a short description with up to 10 words if it does not exist in the input.",
                    },
                    "longDescription": {
                        "type": "string",
                        "description": "Always translated to German.",
                    },
                    "iLike": {
                        "type": "string",
                        "description": "Always translated to German. Use the same style, thus if the original started mid sentence or used other style elements, use them in the translation too."
                    },
                    "subtitle": {
                        "type": "string",
                        "description": "The subitle of the book. If you know it, use the official translation. Leave blank if there is no subtitle given.",
                    },
                },
                "required": ["title", "shortDescription", "longDescription", "iLike"],
            }
        }],
        function_call: { name: 'translateToGerman' },
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