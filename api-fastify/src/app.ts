import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
    fastify.register(import('@fastify/cors'))
    fastify.register(import('@fastify/helmet'))

    fastify.get('/health', async (_request, reply) => {
        reply.send({ status: true })
    })

    fastify.register(
        async (fastify) => {
            fastify.register(autoLoad, {
                dir: join(__dirname, 'routes'),
                dirNameRoutePrefix: false,
                options: Object.assign({}, opts),
            })
        },
        { prefix: '/api/v1/user' },
    )
}
