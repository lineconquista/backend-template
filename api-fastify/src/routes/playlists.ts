import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { IdentifierSchema, TIdentifier } from '../schemas/common'
import { PlaylistListSchema, PlaylistSchema, TPlaylist, TPlaylistList } from '../schemas/playlist'

export const autoPrefix = '/:id/playlists'

export default async function playlists(fastify: FastifyInstance): Promise<void> {
    //paginação
    fastify.get<{ Params: TIdentifier; Response: TPlaylistList }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: PlaylistListSchema,
                },
            },
        },
        list,
    )

    fastify.get<{ Params: TIdentifier; Response: TPlaylist }>(
        '/:playlistId',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: PlaylistSchema,
                },
            },
        },
        find,
    )

    async function list(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TPlaylistList }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            friends: 1,
        })
    }

    async function find(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TPlaylist }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            friends: 1,
        })
    }
}
