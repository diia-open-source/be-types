import { DocumentBaseData, OwnerType } from '../generated/documents/documentData.js'
import { DocStatus } from './docStatus.js'

export interface BaseDocument {
    baseData: DocumentBaseData

    /** @deprecated */
    id: string
    /** @deprecated */
    docNumber: string
    /** @deprecated */
    docStatus: DocStatus
    /** @deprecated */
    docSubtype?: string
    /** @deprecated */
    subtype?: string
    /** mixed format @deprecated */
    issueDate?: string
    /** mixed format @deprecated */
    expirationDate?: string
    /** @deprecated */
    registrationDate?: Date
    /** @deprecated */
    ownerType?: OwnerType
    /** @deprecated */
    fullNameHash?: string
}
