// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`
}

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        API_ENDPOINT: process.env.API_ENDPOINT || '',

        GOOGLE_ADSENSE_CLIENT_ID: process.env.GOOGLE_ADSENSE_CLIENT_ID || '',
        GOOGLE_ADSENSE_MIDDLE_SLOT: process.env.GOOGLE_ADSENSE_MIDDLE_SLOT || '',
        GOOGLE_ADSENSE_LEFT_SLOT: process.env.GOOGLE_ADSENSE_LEFT_SLOT || '',
        GOOGLE_ADSENSE_RIGHT_SLOT: process.env.GOOGLE_ADSENSE_RIGHT_SLOT || '',

        GOOGLE_ANALYTICS_TRACK_ID: process.env.GOOGLE_ANALYTICS_TRACK_ID || ''
    },
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                path: false,
                os: false,
            },
        }
        return config
    },
    images: {
        domains: ['pbs.twimg.com', 'abs.twimg.com'],
    },
}
