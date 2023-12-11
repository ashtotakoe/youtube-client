import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, combineLatest, map, of, switchMap, withLatestFrom } from 'rxjs'

import { MatSnackBarService } from '../services/mat-snack-bar.service'
import { YoutubeHttpService } from '../youtube/services/youtube-http.service'
import { videoDetailsActions } from './actions/videos-details.actions'
import { videosPageActions } from './actions/videos-page.actions'
import { youtubeApiActions } from './actions/youtube-api.actions'
import { VideosFacade } from './services/videos.facade'

@Injectable()
export class SearchEffects {
  constructor(
    private videosFacade: VideosFacade,
    private youtubeHttpService: YoutubeHttpService,
    private actions$: Actions,
    private snackBar: MatSnackBarService,
  ) {}

  public loadVideosByQueryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videosPageActions.loadVideosViaSearch),
      switchMap(({ searchData }) => {
        return this.youtubeHttpService.getSearchResponseByQuery(searchData).pipe(
          switchMap(response => {
            this.videosFacade.updateSearchResponse(response)
            const videIds = response.items.map(({ id }) => id.videoId)

            return combineLatest([
              this.youtubeHttpService.getVideosById(videIds.join(',')).pipe(map(({ items }) => items)),
              this.videosFacade.createdVideos$,
            ]).pipe(
              map(([searchVideos, createdVideos]) => {
                const { query, isFirstPage: isFistPage } = searchData

                if (isFistPage) {
                  // eslint-disable-next-line max-nested-callbacks
                  const relatableCustomVideos = createdVideos.filter(video => video.snippet.title.includes(query))

                  return youtubeApiActions.loadVideosByQuerySuccess({
                    videos: [...relatableCustomVideos, ...searchVideos],
                  })
                }

                return youtubeApiActions.loadVideosByQuerySuccess({ videos: searchVideos })
              }),
            )
          }),
          catchError(({ message }: Error) => {
            this.snackBar.showCustomMessage(message)

            return of(youtubeApiActions.loadVideosByQueryFailure({ errorMessage: message }))
          }),
        )
      }),
    ),
  )

  public loadVideoByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(videoDetailsActions.loadVideoById),
      withLatestFrom(this.videosFacade.searchVideos$),
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

            this.snackBar.showPageNotFoundMessage()

            return youtubeApiActions.loadVideosByQueryFailure({ errorMessage: 'Video not found' })
          }),
        )
      }),
      catchError(({ message }: Error) => {
        this.snackBar.showCustomMessage(message)

        return of(youtubeApiActions.loadVideoByIdFailure({ errorMessage: message }))
      }),
    ),
  )
}
