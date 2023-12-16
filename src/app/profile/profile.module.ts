import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'

import { ProfilePageComponent } from './profile-page.component'
import { profileRoutes } from './profile.routes'

@NgModule({
  imports: [CommonModule, MatListModule, RouterModule.forChild(profileRoutes), MatCardModule],
  declarations: [ProfilePageComponent],
  providers: [],
})
export class ProfileModule {}
