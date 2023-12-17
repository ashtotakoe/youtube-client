import { HttpClient, type HttpErrorResponse, type HttpResponse } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, map, type Observable, throwError } from 'rxjs'

import { ConnectionsApiSlugs } from '../../enums/connections-api-slugs.enum'
import { ErrorMessages } from '../../enums/error-messages.enum'
import type { ConnectionsApiError } from '../models/connections-api-error.model'
import { API_URL } from '../tokens/api-url.token'
import type { GroupListResponse } from 'src/app/home/models/group-list-repsponse.model'
import type { ProfileData } from 'src/app/profile/models/user-profile-data.model'
import type { ProfileResponse } from 'src/app/profile/types/profile-response.type'
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

  public getUserProfile(): Observable<ProfileData> {
    return this.httpClient.get<ProfileResponse>(`${this.apiUrl}${ConnectionsApiSlugs.Profile}`).pipe(
      map(({ email, name, uid, createdAt }: ProfileResponse) => ({
        email: email.S,
        name: name.S,
        uid: uid.S,
        createdAt: createdAt.S,
      })),
      catchError(({ error }: HttpErrorResponse) => {
        const { message } = error as ConnectionsApiError

        return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
      }),
    )
  }

  public changeUserName(name: string): Observable<HttpResponse<string>> {
    return this.httpClient
      .put(
        `${this.apiUrl}${ConnectionsApiSlugs.Profile}`,
        { name },
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

  public logOut(): Observable<HttpResponse<string>> {
    return this.httpClient
      .delete(
        `${this.apiUrl}${ConnectionsApiSlugs.Logout}`,

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

  public loadGroups(): Observable<GroupListResponse> {
    return this.httpClient.get<GroupListResponse>(`${this.apiUrl}${ConnectionsApiSlugs.Groups}/list`).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        const { message } = error as ConnectionsApiError

        return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
      }),
    )
  }
}
