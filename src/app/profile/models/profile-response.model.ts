/* eslint-disable @typescript-eslint/naming-convention */
export interface ProfileResponse {
  email: ResponseFeature
  name: ResponseFeature
  uid: ResponseFeature
  createdAt: ResponseFeature
}

interface ResponseFeature {
  S: string
}
