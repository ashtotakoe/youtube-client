import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { ProfileState } from './models/profile-state.model'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const selectProfile = createFeatureSelector<ProfileState>(StoreFeatureNames.Profile)

export const selectIsLoading = createSelector(selectProfile, state => state.isLoading)

export const selectProfileData = createSelector(selectProfile, state => state.profileData)
