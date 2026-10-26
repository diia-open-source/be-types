export const Languages = {
    Uk: 'uk',
    En: 'en',
} as const

export type Language = (typeof Languages)[keyof typeof Languages]

export interface WithLocales<T> {
    locales: Record<typeof Languages.Uk, T> & Partial<Record<Language, T>>
}
