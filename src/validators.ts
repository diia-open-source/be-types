/**
 * If T has keys NOT in I, those keys are mapped to 'never'.
 * This forces a compiler error if extra methods exist.
 */
export type StrictInterface<T, I> = {
    [K in keyof T]: K extends keyof I ? T[K] : never
}
