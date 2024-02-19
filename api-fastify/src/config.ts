export default {
    apiHost: process.env.API_HOST ?? '0.0.0.0',
    apiPort: process.env.API_PORT ?? '8080',
    logLevel: process.env.LOG_LEVEL,
    dbUri: process.env.DB_URI,
    sslCA: process.env.SSL_CA,
}
