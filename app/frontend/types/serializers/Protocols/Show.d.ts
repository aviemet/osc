// TypesFromSerializers CacheKey 51d92a1c0febda98424763bb16972478
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ProtocolsCommands from './Commands'

declare global {
  namespace Schema {
    interface ProtocolsShow {
      id: number
      commands: ProtocolsCommands[]
      description?: string
      slug: string
      title: string
    }
  }
}
