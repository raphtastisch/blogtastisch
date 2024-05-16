


# New Content:

* Books with fulltext = true should have all book-content in German
* Books with new Tags need an update of the taglist in books.ts and in both translation files
* books with full text should have a "de.mdx" and "en.mdx" in the corresponding folder
* New books need illustration and cover image in the correct folder (and only with .jpg, .png, .jpeg, or .webp format); articles need only the illustration
* check descriptionLong length for appropriate space

# Create new book
* fill out newbook in newBook.json
* run ```npx ts-node -P .\scripts\tsconfig.script.json .\scripts\createNewBook.ts 1``` for step 1; replace 1 with 2 at the end for step 2
* check result of step1 in newBook.json
* run again with step2
* check result of step2 in newBook.json
* edit tags, add new tags (see above) if necessary


# Create social media posts
run ```npx ts-node -P .\scripts\tsconfig.script.json .\scripts\createSocialMediaPost.ts 1``` for step 1; replace 1 with 2 at the end for step 2 and so on

