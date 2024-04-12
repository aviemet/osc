// TypesFromSerializers CacheKey edbfeedd4c762e9cdcdc18b3f28c1dac
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandValue from '../CommandValue'

declare global {
  namespace Schema {
    interface CommandsIndex {
      id: number
      address?: string
      allow_custom_value: boolean
      command_values: CommandValue[]
      created_at: string | Date
      description?: string
      payload_type?: number
      server_id: number
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}
