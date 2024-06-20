/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    generateEtags: true,
    poweredByHeader: false,
    compress: true,
    experimental: {
        serverMinification: false,
        optimizeServerReact: true,
        serverSourceMaps: true,
    }
};

export default nextConfig;
