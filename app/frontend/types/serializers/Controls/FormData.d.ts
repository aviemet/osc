// TypesFromSerializers CacheKey c84b8649dc4ec104e2f042b19b9aa248
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandsFormData from '../Commands/FormData'
import type ProtocolsFormData from '../Protocols/FormData'

declare global {
  namespace Schema {
    interface ControlsFormData {
      id?: number
      color?: string
      command: CommandsFormData
      command_id?: number
      control_type: string
      max_value?: number
      min_value?: number
      order: number
      protocol: ProtocolsFormData
      protocol_id?: number
      screen_id: number
      title: string
      value?: number
    }
  }
}
