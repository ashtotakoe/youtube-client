import { inject } from '@angular/core'
import { type CanMatchFn, Router, type UrlTree } from '@angular/router'
import { map, type Observable } from 'rxjs'

import { AuthService } from '../../auth/services/auth.service'
import type { UserOrGuest } from '../types/user-or-guest.type'

export const authGuard =
  (type: UserOrGuest): CanMatchFn =>
  (): Observable<boolean | UrlTree> => {
    const authService = inject(AuthService)
    const router = inject(Router)

    return authService.isUserSignedIn$.pipe(
      map((isUserSignIn: boolean) => {
        if (type === 'guest') {
          return isUserSignIn ? router.createUrlTree(['search']) : true
        }

        return isUserSignIn ? true : router.createUrlTree(['auth'])
      }),
    )
  }
