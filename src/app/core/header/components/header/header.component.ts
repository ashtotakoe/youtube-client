import { Component, type OnDestroy } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public search = new FormControl<string>('')

  private subscribtion = this.search.valueChanges.subscribe(console.log)

  public ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }
}
