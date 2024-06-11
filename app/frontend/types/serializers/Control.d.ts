// TypesFromSerializers CacheKey cf1da5ebe45ddaa053070962da988ee9
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Command from './Command'
import type Protocol from './Protocol'

declare global {
  namespace Schema {
    interface Control {
      id?: number
      color?: string
      command: Command
      command_id?: number
      control_type: string
      max_value?: number
      min_value?: number
      order: number
      protocol: Protocol
      protocol_id?: number
      screen_id: number
      title: string
      value?: number
    }
  }
}
