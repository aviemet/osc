// TypesFromSerializers CacheKey 81f579bf1d9d87399d4d92f7868867ac
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CommandsFormData from '../Commands/FormData'

declare global {
  namespace Schema {
    interface ProtocolsEdit {
      id: number
      commands: CommandsFormData[]
      created_at: string | Date
      description?: string
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}
