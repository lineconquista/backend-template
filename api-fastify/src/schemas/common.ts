import { Static, Type } from '@sinclair/typebox'

const IdentifierSchema = Type.Object({
    id: Type.String({ format: 'uuid' }),
})

type TIdentifier = Static<typeof IdentifierSchema>

export type { TIdentifier }
export { IdentifierSchema }
