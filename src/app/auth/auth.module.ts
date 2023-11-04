import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AuthRoutingModule } from './auth-routing.module'
import { LogInFormComponent } from './components/log-in-form/log-in-form.component'
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component'

@NgModule({
  declarations: [LogInFormComponent, LogInPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
