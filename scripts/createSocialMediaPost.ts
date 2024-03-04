// import OpenAI from 'openai';
// import { Book, BookSocialMediaPost, Content } from "@/lib/config";
// import { readJsonFile, writeJsonFile, openai, translate } from './utils';

// const bookData = readJsonFile("./content/books.json");
// const existingSocialMediaPosts = readJsonFile("./content/socialMediaPosts.json");

// const slugs = existingSocialMediaPosts.map((post: BookSocialMediaPost) => post.slug);

// const filteredBookData = bookData.filter((book: any) => !slugs.includes(book.slug));




// async function createLinkedinText(author: string, enTexts: Content): Promise<string | null> {

//     const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
//         messages: [{
//             role: 'user', content: `Create a linkedin post for the book "${enTexts.title}" from ${author}.
        
//         As input use the long description and the reason why I like the book. The posts should be structured with an interesting and catchy sentence at the beginning that is related to the book. The rest of the post should then mainly include the content from the long description. Finishing with the reason why I like the book. Add a call to action at the end that more book recommendations can be found on my homepage.

//         Long Description: ${enTexts.longDescription}

//         Reason why I like the book: ${enTexts.iLike}`

//         }],
//         model: 'gpt-4-turbo-preview',
//         temperature: 0.3,

//     });

//     // console.log(chatCompletion.choices[0].message.content);

//     if (!chatCompletion.choices[0].message.content) {
//         throw new Error('Error while creating a Linkedin Text undefined');
//     }
//     else {
//         return chatCompletion.choices[0].message.content
//     }
// }



// filteredBookData.map((book: Book) => {
//     const newPost: BookSocialMediaPost = {
//         slug: book.slug,
//         linkedinText: "",
//         whatsappText: "",
//         facebookText: "",
//         linkedinPosted: false,
//         whatsappPosted: false,
//         facebookPosted: false,
//         picturePrompts: []
//     }
//     existingSocialMediaPosts.push(newPost);
// })
// y




// // Social media generator muss viele gesichter drin haben