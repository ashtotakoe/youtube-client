/* eslint-disable @typescript-eslint/naming-convention */
interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  YT_API_KEY: string

  [key: string]: string
}
