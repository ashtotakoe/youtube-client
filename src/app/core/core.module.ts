import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { HeaderModule } from './header/header.module'
import { YoutubeHttpService } from './services/youtube-http.service'

@NgModule({
  imports: [HeaderModule, HttpClientModule],
  providers: [YoutubeHttpService],
  exports: [HeaderModule],
})
export class CoreModule {}
