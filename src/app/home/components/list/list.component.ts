import { ChangeDetectionStrategy, Component, EventEmitter, Input, type OnInit, Output } from '@angular/core'
import { combineLatest, map, Observable, of } from 'rxjs'

import type { Group } from '../../models/group.model'
import type { User } from '../../models/user.model'

@Component({
  selector: 'cn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() public isGroupList!: boolean
  @Input() public isLoading$!: Observable<boolean>
  @Input() public countdownName!: string

  @Input() public users$: Observable<User[]> = of([])
  @Input() public groups$: Observable<Group[]> = of([])

  @Output() public dialogOpened = new EventEmitter<void>()
  @Output() public listRefreshed = new EventEmitter<void>()

  public items$!: Observable<{ groups: Group[]; users: User[] }>

  public refreshList(): void {
    this.listRefreshed.emit()
  }

  public openDialog(): void {
    this.dialogOpened.emit()
  }

  public trackByIndex(index: number): number {
    return index
  }

  public ngOnInit(): void {
    this.items$ = combineLatest([this.groups$, this.users$]).pipe(map(([groups, users]) => ({ groups, users })))
  }
}
