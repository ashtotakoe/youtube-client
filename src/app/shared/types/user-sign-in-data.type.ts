import type { UserSignUpData } from '../models/user-sign-up-data.model'

export type UserSignInData = Omit<UserSignUpData, 'name'>
