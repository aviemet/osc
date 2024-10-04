// TypesFromSerializers CacheKey b201f6ee1d5f5f869a4cb959789fe581
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandValue from '../CommandValue'
import type ServersReference from '../Servers/Reference'

declare global {
  namespace Schema {
    interface CommandsProtocol {
      id: number
      address?: string
      allow_custom_value: boolean
      command_values: CommandValue[]
      created_at: string | Date
      description?: string
      payload_type: "integer" | "float" | "string" | "blob" | "time" | "symbol" | "character" | "boolean"
      server: ServersReference
      server_id: number
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}
