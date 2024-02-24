// TypesFromSerializers CacheKey 1f9a002838b3f1c40c6298f3daaebff6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface UsersFormData {
      id?: number
      active: boolean
      confirmation_sent_at?: string | Date
      confirmation_token?: string
      confirmed_at?: string | Date
      current_sign_in_at?: string | Date
      current_sign_in_ip?: string
      email: string
      encrypted_password: string
      failed_attempts: number
      invitation_accepted_at?: string | Date
      invitation_created_at?: string | Date
      invitation_limit?: number
      invitation_sent_at?: string | Date
      invitation_token?: string
      invitations_count: number
      invited_by_id?: number
      invited_by_type?: string
      last_sign_in_at?: string | Date
      last_sign_in_ip?: string
      locked_at?: string | Date
      remember_created_at?: string | Date
      reset_password_sent_at?: string | Date
      reset_password_token?: string
      sign_in_count: number
      unconfirmed_email?: string
      unlock_token?: string
      user_preferences: Record<string, string>
    }
  }
}
