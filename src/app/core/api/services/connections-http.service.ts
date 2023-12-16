import { HttpClient, type HttpErrorResponse, type HttpResponse } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, type Observable, throwError } from 'rxjs'

import { ConnectionsApiSlugs } from '../../enums/connections-api-slugs.enum'
import { ErrorMessages } from '../../enums/error-messages.enum'
import type { ConnectionsApiError } from '../models/connections-api-error.model'
import { API_URL } from '../tokens/api-url.token'
import type { UserProfileData } from 'src/app/profile/models/user-profile-data.model'
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
            errorMessage = (JSON.parse(error) as ConnectionsApiError).message
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
            errorMessage = (JSON.parse(error) as ConnectionsApiError).message
          }

          return throwError(() => new Error(errorMessage ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }

  public getUserProfile(): Observable<UserProfileData> {
    return this.httpClient.get<UserProfileData>(`${this.apiUrl}${ConnectionsApiSlugs.Profile}`).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        const { message } = error as ConnectionsApiError

        return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
      }),
    )
  }
}
