"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageMapping = exports.locales = exports.backupImagePaths = exports.contentPath = exports.contentFolder = exports.defaultWrittenBy = exports.categories = void 0;
exports.categories = ["books", "articles"];
exports.defaultWrittenBy = "Raphael Fritz";
exports.contentFolder = "data";
exports.contentPath = ["public", "data"]; // is linked to gether, no different paths!
exports.backupImagePaths = {
    books: {
        illustration: "/backup/bookIllustration.png",
        cover: "/backup/bookCover.png"
    },
    articles: {
        illustration: "/backup/articleIllustration.png",
        cover: "/backup/articleCover.png"
    }
};
exports.locales = ['en', 'de'];
exports.languageMapping = { "en": "en_US", "de": "de_DE" };
