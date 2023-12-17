import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'cn-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent {}