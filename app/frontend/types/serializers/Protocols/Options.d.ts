// TypesFromSerializers CacheKey bfd8850aa1c390d958cd97ec6898aee2
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandsEdit from '../Commands/Edit'

declare global {
  namespace Schema {
    interface ProtocolsOptions {
      id: number
      commands: CommandsEdit[]
      description?: string
      slug: string
      title: string
    }
  }
}
