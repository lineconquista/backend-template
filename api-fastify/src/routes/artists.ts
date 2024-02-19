import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { IdentifierSchema, TIdentifier } from '../schemas/common'
import { ArtistListSchema, TArtistList } from '../schemas/artist'

export const autoPrefix = '/:id/artists'

export default async function artists(fastify: FastifyInstance): Promise<void> {
    //paginação
    fastify.get<{ Params: TIdentifier; Response: TArtistList }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: ArtistListSchema,
                },
            },
        },
        list,
    )

    async function list(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TArtistList }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            friends: 1,
        })
    }
}
