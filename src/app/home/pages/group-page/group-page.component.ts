import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { HomeFacade } from '../../home-store/services/home.facade'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'

@Component({
  selector: 'cn-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPageComponent {
  public currentChat$ = this.homeFacade.currentChat$
  public isLoading$ = this.homeFacade.isLoading$

  public countdownName = CountdownNames.RefreshChat

  public groupId = this.route.snapshot.paramMap.get('id')
  constructor(
    private homeFacade: HomeFacade,
    private route: ActivatedRoute,
  ) {}

  public deleteGroup(groupId: string): void {
    this.homeFacade.deleteGroup(groupId)
  }

  public refreshChat(): void {
    if (this.groupId) {
      this.homeFacade.loadGroupChat({ groupId: this.groupId, isRefresh: true })
    }
  }

  public sendMessage(message: string): void {
    if (this.groupId) {
      this.homeFacade.sendMessage({ groupId: this.groupId, message })
    }
  }
}
