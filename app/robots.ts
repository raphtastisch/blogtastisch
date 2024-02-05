import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            crawlDelay: 86400, // 60*60*24
            allow: "/",
        },
    };
}