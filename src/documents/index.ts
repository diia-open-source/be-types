import { HttpStatusCode } from '../http'

export * from './authDocument'

export * from './docStatus'

export * from './metadata'

export * from './ticker'

export * from './localization'

export { NameValue, NameValueWithCode } from '../generated/documents/nameValue'

export { AuthDocument } from '../generated/documents/authDocument'

export { OwnerType, ownerTypeFromJSON, ownerTypeToJSON, ownerTypeToNumber, DocumentBaseData } from '../generated/documents/documentData'

export enum CustomStatusCode {
    WaitingCovidCertificate = 2019,
}

export type DocumentStatusCode = HttpStatusCode | CustomStatusCode
