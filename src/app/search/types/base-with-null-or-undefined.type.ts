export type BaseWithNull<T extends object> = {
  [P in keyof T]: T[P] | null
}
