import { Static, Type } from '@sinclair/typebox'

const UserSchema = Type.Object({
    name: Type.String(),
    email: Type.String({ format: 'email' }),
    image: Type.Optional(Type.String({ format: 'url' })),
    playlists: Type.Number(),
    artists: Type.Number(),
    musics: Type.Number(),
    friends: Type.Number(),
})

const UserListSchema = Type.Array(UserSchema)

const UserUpdateSchema = Type.Object({
    name: Type.String(),
})

type TUser = Static<typeof UserSchema>
type TUserList = Static<typeof UserListSchema>
type TUserUpdate = Static<typeof UserUpdateSchema>

export type { TUser, TUserList, TUserUpdate }
export { UserSchema, UserListSchema, UserUpdateSchema }
