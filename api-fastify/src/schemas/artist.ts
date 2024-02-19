import { Static, Type } from '@sinclair/typebox'

const ArtistSchema = Type.Object({
    id: Type.String({ format: 'uuid' }),
    name: Type.String(),
    image: Type.String({ format: 'url' }),
    listeners: Type.Number(),
    albuns: Type.Number(),
    musics: Type.Number(),
})

const ArtistListSchema = Type.Array(ArtistSchema)

type TArtist = Static<typeof ArtistSchema>
type TArtistList = Static<typeof ArtistListSchema>

export type { TArtist, TArtistList }
export { ArtistSchema, ArtistListSchema }
