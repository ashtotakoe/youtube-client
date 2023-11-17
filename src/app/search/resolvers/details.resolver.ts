import { inject } from '@angular/core'
import { type ActivatedRouteSnapshot, type ResolveFn, Router } from '@angular/router'
import { type Observable, of, tap } from 'rxjs'

import { YoutubeFacade } from '../../core/services/youtube.facade'
import type { SearchItem } from '../../shared/models/search-item.model'

export const detailsResolver: ResolveFn<SearchItem | null> = (
  route: ActivatedRouteSnapshot,
): Observable<SearchItem | null> => {
  const searchItemsService = inject(YoutubeFacade)
  const router = inject(Router)

  const id = route.paramMap.get('id')

  if (!id) {
    return of(null)
  }

  return searchItemsService.getVideoById(id).pipe(
    tap(searchItem => {
      if (!searchItem) {
        router.navigate(['/', 'not-found']).catch(({ message }: Error) => message ?? null)
      }
    }),
  )
}
