import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
import { CountdownService } from 'src/app/shared/services/countdown.service'

@Component({
  selector: 'cn-group-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent implements OnInit {
  public groups$ = this.homeFacade.groups$.pipe()
  constructor(
    private countdownService: CountdownService,
    private homeFacade: HomeFacade,
  ) {}

  public refreshGroups(): void {
    this.countdownService.startCountdown()
    this.homeFacade.loadGroups({ isCashed: false })
  }

  public ngOnInit(): void {
    this.homeFacade.loadGroups({ isCashed: true })
  }
}
