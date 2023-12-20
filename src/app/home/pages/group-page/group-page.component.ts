import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { HomeFacade } from '../../home-store/services/home.facade'

@Component({
  selector: 'cn-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPageComponent implements OnInit {
  public currentChat$ = this.homeFacade.currentChat$
  public isLoading$ = this.homeFacade.isLoading$

  constructor(
    private homeFacade: HomeFacade,
    private route: ActivatedRoute,
  ) {}

  public deleteGroup(): void {
    console.log('group deleted')
  }

  public ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('id')

    if (groupId) {
      this.homeFacade.loadGroupChat(groupId)
    }
  }
}
