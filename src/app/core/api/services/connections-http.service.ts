import { HttpClient, type HttpErrorResponse, type HttpResponse } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, type Observable, throwError } from 'rxjs'

import { ConnectionsApiSlugs } from '../../enums/connections-api-slugs.enum'
import { ErrorMessages } from '../../enums/error-messages.enum'
import { API_URL } from '../tokens/api-url.token'
import type { UserSignUpData } from 'src/app/shared/models/user-sign-up-data.model'
import type { UserSignInData } from 'src/app/shared/types/user-sign-in-data.type'

@Injectable({
  providedIn: 'root',
})
export class ConnectionsHttpService {
  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL) private apiUrl: string,
  ) {}

  public signUp({ name, email, password }: UserSignUpData): Observable<HttpResponse<string>> {
    return this.httpClient
      .post(
        `${this.apiUrl}${ConnectionsApiSlugs.Registration}`,
        {
          name,
          email,
          password,
        },
        {
          observe: 'response',
          responseType: 'text',
        },
      )
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          let errorMessage: string | undefined

          if (typeof error === 'string') {
            errorMessage = (JSON.parse(error) as { message: string; type: string }).message
          }

          return throwError(() => new Error(errorMessage ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }

  public signIn({ email, password }: UserSignInData): Observable<HttpResponse<string>> {
    return this.httpClient
      .post(
        `${this.apiUrl}${ConnectionsApiSlugs.Login}`,
        {
          email,
          password,
        },
        {
          observe: 'response',
          responseType: 'text',
        },
      )
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          let errorMessage: string | undefined

          if (typeof error === 'string') {
            errorMessage = (JSON.parse(error) as { message: string; type: string }).message
          }

          return throwError(() => new Error(errorMessage ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }
}
