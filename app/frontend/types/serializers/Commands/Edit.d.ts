// TypesFromSerializers CacheKey 5cc6f9bfa7a1967ff6291d22f986bbe9
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandValue from '../CommandValue'

declare global {
  namespace Schema {
    interface CommandsEdit {
      id: number
      address?: string
      allow_custom_value: boolean
      command_values: CommandValue[]
      created_at?: string | Date
      description?: string
      payload_type: "integer" | "float" | "string" | "blob" | "time" | "symbol" | "character" | "boolean"
      server_id: number
      slug: string
      title: string
      updated_at?: string | Date
    }
  }
}
