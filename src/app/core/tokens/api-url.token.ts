import { InjectionToken } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const API_URL = new InjectionToken<string>('api url', {
  providedIn: 'root',
  factory: () => 'https://tasks.app.rs.school/angular/',
})
