import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap } from 'rxjs'

import { YoutubeHttpService } from '../../core/youtube/services/youtube-http.service'
import { videoDetailsActions } from './actions/videos-details.actions'
import { videosPageActions } from './actions/videos-page.actions'
import { youtubeApiActions } from './actions/youtube-api.actions'

@Injectable()
export class SearchEffects {
  constructor(
    private youtubeHttpService: YoutubeHttpService,
    private actions$: Actions,
    private store$: Store,
  ) {}

  public loadVideosByQueryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videosPageActions.loadVideosByQuery),

      switchMap(({ query }) =>
        this.youtubeHttpService.getSearchResponseByQuery(query).pipe(
          switchMap(response => {
            const videIds = response.items.map(({ id }) => (typeof id === 'string' ? id : id.videoId))

            return this.youtubeHttpService
              .getVideosById(videIds.join(','))
              .pipe(map(({ items }) => youtubeApiActions.loadVideosByQuerySuccess({ videos: items })))
          }),

          catchError(({ message }: Error) => {
            console.warn(message)

            return of(youtubeApiActions.loadVideosByQueryFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )

  public loadVideoByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videoDetailsActions.loadVideoById),
      switchMap(({ id }) =>
        this.youtubeHttpService.getVideosById(id).pipe(
          map(({ items }) => {
            if (items.length) {
              return youtubeApiActions.loadVideoByIdSuccess({ video: items[0] })
            }

            throw Error('Video not found')
          }),
        ),
      ),
      catchError(({ message }: Error) => {
        console.warn(message)

        return of(youtubeApiActions.loadVideoByIdFailure({ errorMessage: message }))
      }),
    ),
  )
}
