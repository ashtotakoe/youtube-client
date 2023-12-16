import { inject } from '@angular/core'
import { type CanMatchFn, Router, type UrlTree } from '@angular/router'

import { LocalStorageKeys } from '../enums/local-storage-keys.enum'
import { LocalStorageService } from '../services/local-storage.service'
import { AuthRoutePaths } from 'src/app/shared/enums/auth-route-paths.enum'

export const mustUserBeAuthorizedGuard =
  (mustUserBeAuthorized: boolean): CanMatchFn =>
  (): boolean | UrlTree => {
    const localStorageService = inject(LocalStorageService)
    const router = inject(Router)

    const isUserAuthorized =
      Boolean(localStorageService.getPrivateCredentials()) &&
      Boolean(localStorageService.getItem(LocalStorageKeys.Email))

    if (mustUserBeAuthorized) {
      return isUserAuthorized ? true : router.createUrlTree(['/', 'auth', AuthRoutePaths.SignIn])
    }

    return isUserAuthorized ? router.createUrlTree(['/', 'home']) : true
  }
