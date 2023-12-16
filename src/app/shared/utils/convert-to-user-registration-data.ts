import type { UserSignUpData } from '../models/user-sign-up-data.model'
import type { BaseWithNull } from '../types/base-with-null.type'

export const convertToUserRegistrationData = (data: BaseWithNull<UserSignUpData>): UserSignUpData => ({
  name: data.name ?? '',
  email: data.email ?? '',
  password: data.password ?? '',
})
