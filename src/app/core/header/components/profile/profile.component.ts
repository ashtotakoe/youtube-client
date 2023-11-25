import { ChangeDetectionStrategy, Component } from '@angular/core'

import { AuthService } from '../../../../auth/services/auth.service'

@Component({
  selector: 'yt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public isUserSignedIn$ = this.authService.isUserSignedIn$
  public userEmail$ = this.authService.userEmail$

  constructor(private authService: AuthService) {}

  public logOut(): void {
    this.authService.logOut()
  }
}
