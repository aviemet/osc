// TypesFromSerializers CacheKey b25c3b198d4b40cab176b4a584629591
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface CommandsOptions {
      id: number
      address?: string
      allow_custom_value: boolean
      description?: string
      payload_type: "integer" | "float" | "string" | "blob" | "time" | "symbol" | "character" | "boolean"
      server_id: number
      slug: string
      title: string
    }
  }
}
