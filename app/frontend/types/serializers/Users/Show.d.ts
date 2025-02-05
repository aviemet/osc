// TypesFromSerializers CacheKey c96922a2fab8ab64e5b5a9257d510e56
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type IUserPreferences from '../../IUserPreferences'
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersShow {
      id: number
      active: boolean
      created_at?: string | Date
      email: string
      roles: Role[]
      updated_at?: string | Date
      user_preferences: IUserPreferences
    }
  }
}
