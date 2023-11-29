import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { isDevMode, NgModule } from '@angular/core'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { StoreFeatureNames } from './core/enums/store-feature-names.enum'
import { authInterceptor } from './core/youtube/interceptors/auth.interceptor'
import { SearchEffects } from './search/search-store/search.effects'
import { videosReducer } from './search/search-store/search.reducer'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(StoreFeatureNames.Search, videosReducer),
    EffectsModule.forFeature([SearchEffects]),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
})
export class AppModule {}
