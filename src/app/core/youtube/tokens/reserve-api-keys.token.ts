import { InjectionToken } from '@angular/core'

import { environment } from '../../../../environments/environment'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RESERVE_API_KEYS = new InjectionToken<string[]>('reserve api keys', {
  providedIn: 'root',
  factory: () => [environment.YT_API_KEY_RESERVE_1, environment.YT_API_KEY_RESERVE_2],
})
