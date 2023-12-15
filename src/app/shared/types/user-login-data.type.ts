import type { UserRegistrationData } from '../models/user-data.model'

export type UserLoginData = Omit<UserRegistrationData, 'name'>
