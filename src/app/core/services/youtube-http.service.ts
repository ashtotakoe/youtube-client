import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'

@Injectable({ providedIn: 'root' })
export class YoutubeHttpService {
  constructor(private http: HttpClient) {}

  public fetchData(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>('assets/mock/mock-results.json')
  }
}
