import type { UserRegistrationData } from '../models/user-data.model'
import type { BaseWithNull } from '../types/base-with-null.type'

export const convertToUserRegistrationData = (data: BaseWithNull<UserRegistrationData>): UserRegistrationData => ({
  name: data.name ?? '',
  email: data.email ?? '',
  password: data.password ?? '',
})
