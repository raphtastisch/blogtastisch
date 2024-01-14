// const nextConfig = {};
// /** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/,
//     options: {
//         remarkPlugins: [],
//         rehypePlugins: [],
//         providerImportSource: '@mdx-js/react',
//     },
// });

// module.exports = nextConfig;

// module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// });

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)