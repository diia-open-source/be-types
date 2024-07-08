import { HttpStatusCode } from '../http'

export * from './authDocument'

export * from './docStatus'

export * from './metadata'

export * from './ticker'

export * from './localization'

export * from '../generated/documents/nameValue'

export * from '../generated/documents/authDocument'

export * from '../generated/documents/documentData'

export enum CustomStatusCode {
    WaitingCovidCertificate = 2019,
}

export type DocumentStatusCode = HttpStatusCode | CustomStatusCode
