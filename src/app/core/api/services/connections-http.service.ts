/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, type HttpErrorResponse, type HttpResponse } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, type Observable, throwError } from 'rxjs'

import { ConnectionsApiSlugs } from '../../enums/connections-api-slugs.enum'
import { ErrorMessages } from '../../enums/error-messages.enum'
import type { ConnectionsApiError } from '../models/connections-api-error.model'
import { API_URL } from '../tokens/api-url.token'
import type { ConversationsResponse } from 'src/app/home/models/conversation-response.model'
import type { GroupListResponse } from 'src/app/home/models/group-list-response.model'
import type { MessageResponse } from 'src/app/home/models/message-response.model'
import type { UsersResponse } from 'src/app/home/models/users-response.model'
import { ChatTypes } from 'src/app/home/unums/chat-types.enum'
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

  public getUserProfile(): Observable<ProfileResponse> {
    return this.httpClient.get<ProfileResponse>(`${this.apiUrl}${ConnectionsApiSlugs.Profile}`).pipe(
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

  public createNewGroup(name: string): Observable<{ groupID: string }> {
    return this.httpClient
      .post<{ groupID: string }>(`${this.apiUrl}${ConnectionsApiSlugs.Groups}/create`, { name })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const { message } = error as ConnectionsApiError

          return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }

  public deleteGroup(groupID: string): Observable<HttpResponse<string>> {
    return this.httpClient
      .delete(`${this.apiUrl}${ConnectionsApiSlugs.Groups}/delete`, {
        params: {
          groupID,
        },
        responseType: 'text',
        observe: 'response',
      })
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

  public loadUsers(): Observable<UsersResponse> {
    return this.httpClient.get<UsersResponse>(`${this.apiUrl}${ConnectionsApiSlugs.Users}`).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        const { message } = error as ConnectionsApiError

        return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
      }),
    )
  }

  public loadConversations(): Observable<ConversationsResponse> {
    return this.httpClient.get<ConversationsResponse>(`${this.apiUrl}${ConnectionsApiSlugs.Conversations}/list`).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        const { message } = error as ConnectionsApiError

        return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
      }),
    )
  }

  public createConversation(userId: string): Observable<{ conversationID: string }> {
    return this.httpClient
      .post<{ conversationID: string }>(`${this.apiUrl}${ConnectionsApiSlugs.Conversations}/create`, {
        companion: userId,
      })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const { message } = error as ConnectionsApiError

          return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }

  public loadChat({
    chatId,
    chatType,
    since,
  }: {
    chatId: string
    chatType: 'group' | 'conversation'
    since?: string
  }): Observable<MessageResponse> {
    const params = {
      [chatType === ChatTypes.Group ? 'groupID' : 'conversationID']: chatId,
    }

    if (since) {
      Object.assign(params, { since })
    }

    return this.httpClient
      .get<MessageResponse>(
        `${this.apiUrl}${
          chatType === ChatTypes.Group ? ConnectionsApiSlugs.Groups : ConnectionsApiSlugs.Conversations
        }/read`,
        {
          params,
        },
      )
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const { message } = error as ConnectionsApiError

          return throwError(() => new Error(message ?? ErrorMessages.SomethingWentWrong))
        }),
      )
  }

  public sendMessage(groupID: string, message: string): Observable<HttpResponse<string>> {
    return this.httpClient
      .post(
        `${this.apiUrl}${ConnectionsApiSlugs.Groups}/append`,
        { groupID, message },
        { responseType: 'text', observe: 'response' },
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
}
