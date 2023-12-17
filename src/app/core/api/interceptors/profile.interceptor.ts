import type { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'

import { ConnectionsApiSlugs } from '../../enums/connections-api-slugs.enum'
import { LocalStorageKeys } from '../../enums/local-storage-keys.enum'
import { LocalStorageService } from '../../services/local-storage.service'
import { RequestHeadersNames } from '../enums/request-headers-names.enum'

export const profileHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService)
  const slugsThatRequireCredentials = [ConnectionsApiSlugs.Logout, ConnectionsApiSlugs.Profile]

  if (slugsThatRequireCredentials.some(slug => req.url.includes(slug))) {
    const credentials = localStorageService.getPrivateCredentials()
    const email = localStorageService.getItem(LocalStorageKeys.Email)

    if (!credentials || !email) {
      return next(req)
    }

    const { uid, token } = credentials
    const headers = req.headers
      .set(RequestHeadersNames.Email, email)
      .set(RequestHeadersNames.Uid, uid)
      .set(RequestHeadersNames.Authorization, `Bearer ${token}`)

    return next(
      req.clone({
        headers,
      }),
    )
  }

  return next(req)
}
