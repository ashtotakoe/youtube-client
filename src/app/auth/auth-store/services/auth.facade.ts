import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { signInPageActions } from '../actions/sign-in-page.actions'
import { signUpPageActions } from '../actions/sing-up-page.actions'
import { isLoadingSelector } from '../selectors'
import type { UserRegistrationData } from 'src/app/shared/models/user-data.model'
import type { UserLoginData } from 'src/app/shared/types/user-login-data.type'

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public isLoading$ = this.store.select(isLoadingSelector)

  constructor(private store: Store) {}

  public signUp(userRegistrationData: UserRegistrationData): void {
    this.store.dispatch(signUpPageActions.signUp({ userRegistrationData }))
  }

  public signIn(userLoginData: UserLoginData): void {
    this.store.dispatch(signInPageActions.signIn({ userLoginData }))
  }
}
