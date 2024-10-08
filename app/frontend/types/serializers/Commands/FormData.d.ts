// TypesFromSerializers CacheKey 52d8d11d8a54d83c0e2610000ea393b4
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandValue from '../CommandValue'

declare global {
  namespace Schema {
    interface CommandsFormData {
      id?: number
      slug?: string
      address?: string
      allow_custom_value: boolean
      command_values: CommandValue[]
      description?: string
      payload_type: "integer" | "float" | "string" | "blob" | "time" | "symbol" | "character" | "boolean"
      server_id: number
      title: string
    }
  }
}
