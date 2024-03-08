import { HttpStatusCode } from '../http'

import { NameChangeActRecord, RelationshipActRecord } from './actRecord'
import { DocumentType } from './documentType'
import { DriverLicense } from './driverLicense'
import { EducationDocument } from './educationDocument'
import { EResidency, EResidentPassport } from './eResident'
import { DocumentsMetaData } from './metadata'
import { ForeignPassport, InternalPassport } from './passport'
import { RefInternallyDisplacedPerson } from './refInternallyDisplacedPerson'
import { ResidencePermit } from './residencePermit'
import { StudentCard } from './studentCard'
import { TaxpayerCard } from './taxpayerCard'
import { VehicleLicense } from './vehicleLicense'

export * from './authDocument'

export * from './birthCertificate'

export * from './documentType'

export * from './docStatus'

export * from './identityDocumentType'

export * from './metadata'

export * from './ticker'

export * from './localization'

export * from './refInternallyDisplacedPerson'

export * from './passport'

export * from './taxpayerCard'

export * from '../generated/documents/nameValue'

export * from './eResident'

export * from './educationDocument'

export * from './driverLicense'

export * from './vehicleLicense'

export * from './residencePermit'

export * from './pensionCard'

export * from './studentCard'

export * from './actRecord'

export * from './userDocument'

export * from '../generated/documents/documentType'

export * from '../generated/documents/authDocument'

export * from '../generated/documents/documentData'

export * from '../generated/documents/nameValue'

export * from '../generated/documents/documentInstance'

export enum CustomStatusCode {
    WaitingCovidCertificate = 2019,
}

export type DocumentStatusCode = HttpStatusCode | CustomStatusCode

export interface UnavailableDocument {
    id: string
}

export interface DocumentResponse<T> extends DocumentsMetaData {
    status: DocumentStatusCode
    data: T[]
    unavailableData?: UnavailableDocument[]
}

export type Documents<K extends keyof DocumentByType = keyof DocumentByType> = {
    [P in K]: DocumentResponse<DocumentByType[P]>
}

export interface DocumentByType extends Record<DocumentType, unknown> {
    [DocumentType.TaxpayerCard]: TaxpayerCard
    [DocumentType.StudentIdCard]: StudentCard
    [DocumentType.InternalPassport]: InternalPassport
    [DocumentType.ForeignPassport]: ForeignPassport
    [DocumentType.RefInternallyDisplacedPerson]: RefInternallyDisplacedPerson
    [DocumentType.EResidency]: EResidency
    [DocumentType.EResidentPassport]: EResidentPassport
    [DocumentType.DriverLicense]: DriverLicense
    [DocumentType.VehicleLicense]: VehicleLicense
    [DocumentType.ResidencePermitPermanent]: ResidencePermit
    [DocumentType.ResidencePermitTemporary]: ResidencePermit
    [DocumentType.EducationDocument]: EducationDocument
    [DocumentType.MarriageActRecord]: RelationshipActRecord
    [DocumentType.DivorceActRecord]: RelationshipActRecord
    [DocumentType.NameChangeActRecord]: NameChangeActRecord
}
