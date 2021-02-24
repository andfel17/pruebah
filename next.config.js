const withPlugins = require('next-compose-plugins')

const nextConfig = {
    images: {
        domains: ['img.kwhentais.com','hentaila.com','i.imgur.com','*.tmdb.org','www.themoviedb.org']
    },
    env: {
        NAME: 'KwHentais',
        URL: 'https://api.kwhentais.com',
        APIURL: 'https://api.kwhentais.com/api/',
        STREAMURL: 'https://api.kwhentais.com/stream/',
        GA_TRACKING_ID: 'UA-166020954-1',
        DISQUS_SHORTNAME: 'animeonmoe'
    },
}

module.exports = withPlugins([], nextConfig)
