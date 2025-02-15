// TypesFromSerializers CacheKey d4662ee2608c8c6512711a432d1a0149
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Command from '../Command'
import type Protocol from '../Protocol'

declare global {
  namespace Schema {
    interface ControlsOptions {
      id: number
      col_span?: number
      color?: string
      command: Command
      command_id?: number
      control_type: string
      max_value?: string | number
      min_value?: string | number
      order: number
      protocol: Protocol
      protocol_id?: number
      row_span?: number
      screen_id: number
      title: string
      value?: string | number
    }
  }
}
