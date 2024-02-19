import fastify from 'fastify'
import traps from '@dnlup/fastify-traps'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import config from './config'
//import { identifier, ttl } from './validators'

const server = fastify({
    logger: {
        level: config.logLevel,
    },
    ajv: {
        customOptions: {
            strict: 'log',
            keywords: ['kind', 'modifier'],
        },
        //  plugins: [identifier, ttl],
    },
}).withTypeProvider<TypeBoxTypeProvider>()

server.register(traps)
server.register(import('./app'))
server.listen(
    {
        host: config.apiHost,
        port: Number(config.apiPort),
    },
    (err) => {
        if (err) {
            server.log.error(err)
            process.exit(1)
        }
    },
)
