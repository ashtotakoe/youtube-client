import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import { YoutubeHttpService } from '../../core/youtube/services/youtube-http.service'
import { videoDetailsActions } from './actions/videos-details.actions'
import { videosPageActions } from './actions/videos-page.actions'
import { youtubeApiActions } from './actions/youtube-api.actions'
import { SearchFacade } from './services/search.facade'

@Injectable()
export class SearchEffects {
  constructor(
    private searchFacade: SearchFacade,
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
            const videIds = response.items.map(({ id }) => id.videoId)

            return this.youtubeHttpService
              .getVideosById(videIds.join(','))
              .pipe(map(({ items }) => youtubeApiActions.loadVideosByQuerySuccess({ videos: items })))
          }),

          catchError(({ message }: Error) => of(youtubeApiActions.loadVideosByQueryFailure({ errorMessage: message }))),
        ),
      ),
    ),
  )

  public loadVideoByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videoDetailsActions.loadVideoById),
      withLatestFrom(this.searchFacade.searchVideos$),
      switchMap(([{ id }, searchVideos]) => {
        const cashedVideo = searchVideos.find(video => video.id === id)

        if (cashedVideo) {
          return of(youtubeApiActions.loadVideoByIdSuccess({ video: cashedVideo }))
        }

        return this.youtubeHttpService.getVideosById(id).pipe(
          map(({ items }) => {
            if (items.length) {
              return youtubeApiActions.loadVideoByIdSuccess({ video: items[0] })
            }

            throw Error('Video is not found')
          }),
        )
      }),
      catchError(({ message }: Error) => of(youtubeApiActions.loadVideoByIdFailure({ errorMessage: message }))),
    ),
  )
}
