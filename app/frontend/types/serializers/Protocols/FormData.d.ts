// TypesFromSerializers CacheKey c41d80f99f2b81c96a63b31974dabaff
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandsProtocol from '../Commands/Protocol'

declare global {
  namespace Schema {
    interface ProtocolsFormData {
      id?: number
      slug?: string
      commands: CommandsProtocol[]
      description?: string
      title: string
    }
  }
}
