import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
