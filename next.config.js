/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: "custom",
        path: "/github/workspace/", // or wherever you expect it to be
    },
}

module.exports = nextConfig
