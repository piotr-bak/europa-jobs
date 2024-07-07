/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects () {
        return [
            {
                source: '/',
                destination: '/blog',
                permanent: true,
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ej-prod-2.fra1.digitaloceanspaces.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
