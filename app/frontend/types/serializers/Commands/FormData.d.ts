// TypesFromSerializers CacheKey 76b0d235bc793b507e89d60ba25f4596
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
      payload_type?: number
      server_id: number
      title: string
    }
  }
}