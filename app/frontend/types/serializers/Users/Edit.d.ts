// TypesFromSerializers CacheKey d824050cc029c9a7ac8cee20d61b7a05
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersEdit {
      id: number
      active: boolean
      created_at: string | Date
      email: string
      roles: Role[]
      updated_at: string | Date
    }
  }
}