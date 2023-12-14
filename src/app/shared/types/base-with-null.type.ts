export type BaseWithNull<T> = {
  [P in keyof T]: T[P] | null
}
