import { HttpStatusCode } from '../http.js'

export * from './authDocument.js'

export * from './docStatus.js'

export * from './metadata.js'

export * from './ticker.js'

export * from './localization.js'

export { NameValue, NameValueWithCode } from '../generated/documents/nameValue.js'

export { AuthDocument } from '../generated/documents/authDocument.js'

export { OwnerType, ownerTypeFromJSON, ownerTypeToJSON, ownerTypeToNumber, DocumentBaseData } from '../generated/documents/documentData.js'

export enum CustomStatusCode {
    WaitingCovidCertificate = 2019,
}

export type DocumentStatusCode = HttpStatusCode | CustomStatusCode
