// TypesFromSerializers CacheKey 7508b37fec58b96447d65307c349f16f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ControlsShow from '../Controls/Show'

declare global {
  namespace Schema {
    interface ScreensShow {
      id: number
      controls: ControlsShow[]
      created_at?: string | Date
      order: number
      slug: string
      title: string
      updated_at?: string | Date
    }
  }
}
