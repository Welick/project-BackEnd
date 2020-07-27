const env = process.env.NODE || 'development'

const config = {
    development: {
        port: process.env.PORT || 8080,
        dbUrl: 'mongodb://localhost:27017/smurfs-project',
        jwtSecret: 'my jwt secret',
        authCookieName: 'auth_token'
    },
    production: {}
}

module.exports = config[env]