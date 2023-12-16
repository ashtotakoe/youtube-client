import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { signUpPageActions } from '../actions/sing-up-page.actions'
import type { UserData } from 'src/app/shared/models/user-data.model'

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store) {}

  public signUp(userData: UserData): void {
    this.store.dispatch(signUpPageActions.signUp({ userData }))
  }
}
