/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {protocol:"https",
            hostname:"www.the-allen-group.com"}
        ],
    }
}

module.exports = nextConfig
