export const Languages = {
    Uk: 'uk',
    En: 'en',
} as const

export type Language = (typeof Languages)[keyof typeof Languages]
