import { inject } from '@angular/core'
import { type ActivatedRouteSnapshot, type ResolveFn, Router } from '@angular/router'
import { type Observable, of, tap } from 'rxjs'

import { SearchFacade } from '../search-store/services/search.facade'

export const detailsResolver: ResolveFn<string | null> = (route: ActivatedRouteSnapshot): Observable<string | null> => {
  const searchFacade = inject(SearchFacade)
  const router = inject(Router)
  const { errorMessage$ } = searchFacade

  const id = route.paramMap.get('id')

  if (!id) {
    return of(null)
  }

  searchFacade.loadVideoById(id)

  return errorMessage$.pipe(
    tap(errorMessage => {
      if (errorMessage) {
        router.navigate(['/', 'not-found']).catch(({ message }: Error) => message)
      }
    }),
  )
}
