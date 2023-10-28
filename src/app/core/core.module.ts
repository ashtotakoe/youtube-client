import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { HeaderModule } from './header/header.module'

@NgModule({
  imports: [HeaderModule, HttpClientModule],
  exports: [HeaderModule],
})
export class CoreModule {}
