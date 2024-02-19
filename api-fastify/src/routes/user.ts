import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { TUser, UserSchema } from '../schemas/user'
import { IdentifierSchema, TIdentifier } from '../schemas/common'

export default async function user(fastify: FastifyInstance): Promise<void> {
    fastify.post<{ Body: TUser; Response: TIdentifier }>(
        '/',
        {
            schema: {
                body: UserSchema,
                response: {
                    200: IdentifierSchema,
                },
            },
        },
        create,
    )

    fastify.get<{ Params: TIdentifier; Response: TUser }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: UserSchema,
                },
            },
        },
        find,
    )

    fastify.delete<{ Params: TIdentifier }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
            },
        },
        remove,
    )

    fastify.patch<{ Params: TIdentifier; Response: TUser }>(
        '/',
        {
            schema: {
                params: IdentifierSchema,
                response: {
                    200: UserSchema,
                },
            },
        },
        update,
    )

    async function find(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TUser }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            friends: 1,
        })
    }

    async function create(this: FastifyInstance, req: FastifyRequest<{ Body: TUser; Response: TIdentifier }>, rep: FastifyReply) {
        //const { params } = req

        rep.status(200).send({
            id: '1',
        })
    }

    async function remove(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier }>, rep: FastifyReply) {
        //const { params } = req
        rep.status(200).send({})
    }

    async function update(this: FastifyInstance, req: FastifyRequest<{ Params: TIdentifier; Response: TUser }>, rep: FastifyReply) {
        //const { params } = req
        rep.status(200).send({
            name: '1',
            email: 'line@hotmail.com',
            image: 'google.com',
            following: 1,
            followers: 2,
        })
    }
}
