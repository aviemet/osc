// TypesFromSerializers CacheKey 1c9066f3858be681676c2ca283b48f0d
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type IUserPreferences from '../../IUserPreferences'
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersIndex {
      id: number
      active: boolean
      created_at: string | Date
      email: string
      roles: Role[]
      updated_at: string | Date
      user_preferences: IUserPreferences
    }
  }
}
