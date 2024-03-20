import type { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { defer, type Observable, retry } from 'rxjs'

import { PRIVATE_API_KEY } from '../tokens/private-api-key.token'
import { RESERVE_API_KEYS } from '../tokens/reserve-api-keys.token'

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const apiKeys = [inject(PRIVATE_API_KEY), ...inject(RESERVE_API_KEYS)]

  let index = -1

  const handle = (): HttpRequest<unknown> => {
    index += 1

    const modifiedRequest = req.clone({
      params: req.params.set('key', apiKeys[index] ?? 'key was not found'),
    })

    return modifiedRequest
  }

  return defer(() => next(handle())).pipe(retry({ count: apiKeys.length - 1, delay: 150 }))
}
