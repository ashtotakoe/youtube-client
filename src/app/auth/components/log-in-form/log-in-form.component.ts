import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'yt-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInFormComponent {}
