import { inject } from '@angular/core'
import { type ActivatedRouteSnapshot, type ResolveFn } from '@angular/router'
import { type Observable, of } from 'rxjs'

import { VideosFacade } from '../../core/videos-store/services/videos.facade'

export const detailsResolver: ResolveFn<string | null> = (route: ActivatedRouteSnapshot): Observable<string | null> => {
  const videosFacade = inject(VideosFacade)
  const id = route.paramMap.get('id')

  if (!id) {
    return of(null)
  }

  videosFacade.loadVideoById(id)

  return of(null)
}
