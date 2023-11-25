import type { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { type Observable, tap } from 'rxjs'

import { PRIVATE_API_KEY } from '../tokens/private-api-key.token'

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const privateApiKey = inject(PRIVATE_API_KEY)

  const modifiedRequest = req.clone({
    params: req.params.set('key', privateApiKey),
  })

  return next(modifiedRequest)
}
