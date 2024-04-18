// TypesFromSerializers CacheKey 45bf338f9225529edf8d593064244fb6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandsFormData from '../Commands/FormData'
import type ProtocolsCommand from '../ProtocolsCommand'

declare global {
  namespace Schema {
    interface ProtocolsEdit {
      id: number
      commands: CommandsFormData[]
      created_at: string | Date
      description?: string
      protocols_commands: ProtocolsCommand[]
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}
