/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  YT_API_KEY: string
  YT_API_KEY_RESERVE_1: string
  YT_API_KEY_RESERVE_2: string

  [key: string]: string
}
