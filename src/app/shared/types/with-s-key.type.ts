export type WithSKey<T> = {
  [P in keyof T]: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    S: T[P]
  }
}
