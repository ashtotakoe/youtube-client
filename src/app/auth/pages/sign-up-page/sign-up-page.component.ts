import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'cn-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {}
