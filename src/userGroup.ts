export const UserGroups = {
    Conscripts: 'Conscripts',
    Veterans: 'Veterans',
    Drivers: 'Drivers',
    Parents: 'Parents',
    Vpo: 'VPO',
    Business: 'Business',
    Unemployed: 'Unemployed',
    CivilServant: 'CivilServant',
    General: 'General',
} as const

export type UserGroup = (typeof UserGroups)[keyof typeof UserGroups]
