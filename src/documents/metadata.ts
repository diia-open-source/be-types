import { OwnerType } from '../generated/documents/documentData'

import { DocStatus } from './docStatus'
import { DocumentTicker } from './ticker'

export interface DocumentCommon<T = string> {
    id: string
    docNumber: string
    docStatus: DocStatus
    subtype?: T
    issueDate?: Date
    expirationDate?: Date
    ownerType?: OwnerType
    fullNameHash?: string
}

/** @deprecated used for old document models. Use DocumentCommon  */
export interface DocumentMetaData {
    docStatus: DocStatus
    docNumber: string
    docSubtype?: string
    ownerType?: OwnerType
    registrationDate?: Date
    expirationDate?: string
    tickerOptions?: DocumentTicker
    fullNameHash?: string
}

export interface DocumentsMetaData {
    currentDate?: string
    expirationDate?: string
    eTag?: string
}
