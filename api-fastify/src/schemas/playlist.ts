import { Static, Type } from '@sinclair/typebox'
import { MusicListSchema } from './music'

const PlaylistSchema = Type.Object({
    id: Type.String({ format: 'uuid' }),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    count: Type.Number(),
    image: Type.Optional(Type.String({ format: 'url' })),
})

const PlaylistListSchema = Type.Array(Type.Union([PlaylistSchema, Type.Object({ musics: MusicListSchema })]))

type TPlaylist = Static<typeof PlaylistSchema>
type TPlaylistList = Static<typeof PlaylistListSchema>

export type { TPlaylist, TPlaylistList }
export { PlaylistSchema, PlaylistListSchema }
