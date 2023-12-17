import type { ProfileData } from '../models/user-profile-data.model'
import type { WithSKey } from 'src/app/shared/types/with-s-key.type'

/* eslint-disable @typescript-eslint/naming-convention */

export type ProfileResponse = WithSKey<ProfileData>
