import { Static, Type } from '@sinclair/typebox'

const MusicSchema = Type.Object({
    id: Type.String({ format: 'uuid' }),
    name: Type.String(),
    image: Type.String({ format: 'url' }),
    duration: Type.Number(),
    artist: Type.Object({
        id: Type.String({ format: 'uuid' }),
        name: Type.String(),
    }),
})

const MusicListSchema = Type.Array(MusicSchema)

type TMusic = Static<typeof MusicSchema>
type TMusicList = Static<typeof MusicListSchema>

export type { TMusic, TMusicList }
export { MusicSchema, MusicListSchema }
