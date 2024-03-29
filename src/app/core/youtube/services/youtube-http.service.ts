import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { catchError, type Observable, throwError } from 'rxjs'

import type { SearchData } from '../../../shared/models/search-data.model'
import type { SearchItem, VideoData } from '../../../shared/models/video-data.model'
import type { YoutubeResponse } from '../../../shared/models/youtube-response.model'
import { searchHttpParams } from '../consts/search-http-params.const'
import { videoHttpParams } from '../consts/video-http-params.const'
import { YoutubeApiTypes } from '../enums/youtube-api-types.enum'
import { API_URL } from '../tokens/api.token'

@Injectable({ providedIn: 'root' })
export class YoutubeHttpService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private readonly api: string,
  ) {}

  public getSearchResponseByQuery({ query, pageToken }: SearchData): Observable<YoutubeResponse<SearchItem>> {
    const params = { ...searchHttpParams }

    if (query) {
      Object.assign(params, { q: query })
    }

    if (pageToken) {
      Object.assign(params, { pageToken })
    }

    return this.http
      .get<YoutubeResponse<SearchItem>>(`${this.api}${YoutubeApiTypes.Search}`, {
        params,
      })
      .pipe(catchError(({ message }: Error) => throwError(() => new Error(message))))
  }

  public getVideosById(id: string): Observable<YoutubeResponse<VideoData>> {
    return this.http
      .get<YoutubeResponse<VideoData>>(`${this.api}${YoutubeApiTypes.Videos}`, {
        params: {
          ...videoHttpParams,
          id,
        },
      })
      .pipe(catchError(({ message }: Error) => throwError(() => new Error(message))))
  }
}
