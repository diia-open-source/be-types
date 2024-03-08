export enum ActionVersion {
    V0 = 'v0',
    V1 = 'v1',
    V2 = 'v2',
    V3 = 'v3',
    V4 = 'v4',
    V5 = 'v5',
    V6 = 'v6',
    V7 = 'v7',
    V8 = 'v8',
    V9 = 'v9',
}

export interface CallActionNameVersion {
    name: string
    actionVersion?: ActionVersion
}
