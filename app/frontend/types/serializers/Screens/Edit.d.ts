// TypesFromSerializers CacheKey 3cb6ac7d23bdf9456bc646ae8639f9df
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ControlsEdit from '../Controls/Edit'

declare global {
  namespace Schema {
    interface ScreensEdit {
      id: number
      controls: ControlsEdit[]
      created_at?: string | Date
      order: number
      slug: string
      title: string
      updated_at?: string | Date
    }
  }
}
