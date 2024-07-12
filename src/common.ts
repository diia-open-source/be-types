import { ActionVersion } from './actions/actionVersion'
import { PlatformType } from './generated/platformType'
import { ActionSession, SessionType } from './session'

export enum IdentifierPrefix {
    EResident = 'e-resident',
    EResidentApplicant = 'e-resident-applicant',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericObject = Record<string, any>

export interface AlsData {
    logData?: LogData
    headers?: ActHeaders
    session?: ActionSession
}

export interface ActHeaders {
    actionVersion: ActionVersion
    traceId: string

    acceptLanguage?: string
    platformType?: PlatformType
    mobileUid?: string
    appVersion?: string
    platformVersion?: string
    serviceCode?: string
    [key: string]: string | undefined
}

export interface ActArguments {
    params?: GenericObject
    session?: ActionSession
    headers?: ActHeaders
}

export type LogData = {
    traceId?: string
    sessionOwnerId?: string
    userIdentifier?: string
    sessionType?: SessionType
    serviceCode?: string
    flags?: string[]
}
