import { InjectionToken } from '@angular/core'

import { environment } from '../../../../environments/environment.prod'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PRIVATE_API_KEY = new InjectionToken<string>('private api key', {
  providedIn: 'root',
  factory: () => environment.YT_API_KEY,
})
