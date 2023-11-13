import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, type Observable, throwError } from 'rxjs'

import type { YoutubeResponse } from '../../../app/shared/models/youtube-response.model'
import { searchHttpParams } from '../consts/search-http-params.const'
import { videoHttpParams } from '../consts/video-http-params.const'
import { YoutubeApiTypes } from '../enums/youtube-api-types.enum'
import { API_URL } from '../tokens/api.token'
import { PRIVATE_API_KEY } from '../tokens/private-api-key.token'

@Injectable({ providedIn: 'root' })
export class YoutubeHttpService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private readonly api: string,
    @Inject(PRIVATE_API_KEY) private readonly privateApiKey: string,
  ) {}

  public getSearchResponseByQuery(query: string): Observable<YoutubeResponse> {
    return this.http
      .get<YoutubeResponse>(`${this.api}${YoutubeApiTypes.Search}`, {
        params: {
          ...searchHttpParams,
          key: this.privateApiKey,
          q: query,
        },
      })
      .pipe(catchError(({ message }: Error) => throwError(() => new Error(message))))
  }

  public getVideosById(id: string | string[]): Observable<YoutubeResponse> {
    return this.http
      .get<YoutubeResponse>(`${this.api}${YoutubeApiTypes.Videos}`, {
        params: {
          ...videoHttpParams,
          key: this.privateApiKey,
          id: Array.isArray(id) ? id.join(',') : id,
        },
      })
      .pipe(catchError(({ message }: Error) => throwError(() => new Error(message))))
  }
}
