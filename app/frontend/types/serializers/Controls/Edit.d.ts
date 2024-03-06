// TypesFromSerializers CacheKey f0538f55fa30a463c73ed1545a68b653
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ProtocolsEdit from '../Protocols/Edit'

declare global {
  namespace Schema {
    interface ControlsEdit {
      id: number
      control_type: string
      created_at: string | Date
      max_value?: number
      min_value?: number
      order: number
      protocol: ProtocolsEdit
      protocol_id: number
      screen_id: number
      title: string
      updated_at: string | Date
      value?: number
    }
  }
}
