import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { profilePageActions } from '../actions/profile-page.actions'
import { selectIsLoading, selectProfileData } from '../profile.selectors'

@Injectable()
export class ProfileFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public profileData$ = this.store.select(selectProfileData)

  constructor(private store: Store) {}

  public loadProfileData(): void {
    this.store.dispatch(profilePageActions.loadProfileData())
  }

  public changeUserName(name: string): void {
    this.store.dispatch(profilePageActions.changeUserName({ name }))
  }
}
