import type { UserData } from '../models/user-data.model'
import type { BaseWithNull } from '../types/base-with-null.type'

export const convertToUserData = (data: BaseWithNull<UserData>): UserData => ({
  name: data.name ?? '',
  email: data.email ?? '',
  password: data.password ?? '',
})
