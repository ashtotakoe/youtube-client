import { inject } from '@angular/core'
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router'

import { HomeFacade } from '../../home-store/services/home.facade'
import type { Group } from '../../models/group.model'

export const currentChatResolver: ResolveFn<Group | null> = (route: ActivatedRouteSnapshot) => {
  const homeFacade = inject(HomeFacade)
  const groupId = route.paramMap.get('id')

  if (groupId) {
    homeFacade.loadGroupChat({ groupId, isRefresh: false })
  }

  return homeFacade.currentChat$
}
