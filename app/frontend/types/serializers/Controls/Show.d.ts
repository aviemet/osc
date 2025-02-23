// TypesFromSerializers CacheKey e81f3516f4adac05308c1a02d39ffa98
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Command from '../Command'
import type Protocol from '../Protocol'

declare global {
  namespace Schema {
    interface ControlsShow {
      id: number
      color?: string
      command?: Command
      command_id?: number
      control_type: "button" | "slider" | "spacer"
      created_at: string | Date
      max_value?: string | number
      min_value?: string | number
      order: number
      protocol?: Protocol
      protocol_id?: number
      screen_id: number
      title: string
      updated_at: string | Date
      value?: string | number
    }
  }
}
