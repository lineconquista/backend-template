import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { IdentifierSchema, TIdentifier } from '../schemas/common'
import { MusicListSchema, TMusicList } from '../schemas/music'

export const autoPrefix = '/:id/musics'

export default async function musics(fastify: FastifyInstance): Promise<void> {
    //paginação
    fastify.get<{ Params: TIdentifier; Response: TMusicList }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: MusicListSchema,
                },
            },
        },
        list,
    )

    async function list(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TMusicList }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            friends: 1,
        })
    }
}
