import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { signInPageActions } from '../actions/sign-in-page.actions'
import { signUpPageActions } from '../actions/sing-up-page.actions'
import { isLoadingSelector, isUserAuthorizedSelector } from '../selectors'
import type { UserSignUpData } from 'src/app/shared/models/user-sign-up-data.model'
import type { UserSignInData } from 'src/app/shared/types/user-sign-in-data.type'

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public isLoading$ = this.store.select(isLoadingSelector)
  public isUserAuthorized = this.store.select(isUserAuthorizedSelector)

  constructor(private store: Store) {}

  public signUp(userSignInData: UserSignUpData): void {
    this.store.dispatch(signUpPageActions.signUp({ userSignInData }))
  }

  public signIn(userSignInData: UserSignInData): void {
    this.store.dispatch(signInPageActions.signIn({ userSignInData }))
  }
}
