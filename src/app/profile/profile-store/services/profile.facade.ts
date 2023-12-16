import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { profilePageActions } from '../actions/profile-page.actions'

@Injectable()
export class ProfileFacade {
  constructor(private store: Store) {}

  public loadProfileData(): void {
    this.store.dispatch(profilePageActions.loadProfileData())
  }
}
