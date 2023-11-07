import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, type Observable, of } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public getVideos(): Observable<SearchResponse | null> {
    return this.http.get<SearchResponse>('assets/mock/mock-results.json').pipe(catchError(() => of(null)))
  }
}
