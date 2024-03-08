import { RelationshipActRecordSubtype } from '../generated/documents/documentData'
import { Gender } from '../generated/token/gender'

import { DocumentCommon } from './metadata'

export enum ArOpName {
    Registration = '1',
    Deleting = '2',
    Canceling = '3',
    Editing = '4',
}

export interface BaseActRecord {
    arRegDate: Date
    opDate: Date
    arOpName: ArOpName
    name: string
    number?: number
    date?: Date
    registrationPlace?: string
    isRestore: number
    arVerificationSt?: number
    numberLink?: string
    dateLink?: string
    composeOrgLink?: string
    certificates: ArCertificate[]
}

export interface ArUserDetails {
    gender: Gender
    oldLastName?: string
    lastName?: string
    firstName?: string
    middleName?: string
    rnokpp?: string
    birthDate?: Date
    citizenship?: ArCitizenship
    citizenshipAnother?: string
    docType?: ArDocType
    docName?: string
    seriesNumber?: string
    docDate?: Date
    docOrgName?: string
    birthState?: string
    birthRegion?: string
    birthDistrict?: string
    birthLocalityType?: string
    birthLocality?: string
    addressDetails: ArUserAddressDetails
}

export interface ArUserAddressDetails {
    state?: string
    region?: string
    district?: string
    localityType?: string
    locality?: string
    street?: string
    house?: string
    buildingPart?: string
    buildingPartType?: ArBuildingPartType
    apartment?: string
}

export interface PartnerDetails extends ArUserDetails {
    familyStatus?: string
    marriageNumber?: number
}

export interface RelationshipActRecord extends BaseActRecord, DocumentCommon<RelationshipActRecordSubtype> {
    reasonDivorce?: string
    rcCourtDecision?: string
    courtName?: string
    partnerFirst: PartnerDetails
    partnerSecond: PartnerDetails
}

export interface ArCertificate {
    status?: number
    serie?: string
    serieOriginal?: string
    number?: string
    serieNumber?: string
    department?: string
    issueDate?: Date
}

export enum ArDocType {
    UkrainianCitizenPassport = '1',
    DiplomaticPassport = '2',
    CertificateOfUkrainianCitizenship = '3',
    SeamanIdentityDocument = '4',
    ReturnToUkraineIdentityDocument = '5',
    CrewMemberIdentityDocument = '6',
    TemporaryUkrainianCitizenIdentityDocument = '7',
    OtherDocument = '8',
    UkrainianServicePassport = '9',
    BirthCertificate = '10',
}

export enum ArCitizenship {
    PersonWithoutCitizenship = '82',
    UkrainianCitizenMale = '83',
    UkrainianCitizenFemale = '84',
    Other = '85',
}

export enum ArBuildingPartType {
    Corpus = '1',
    Sector = '2',
}

export interface NameChangeActRecord extends BaseActRecord, ArUserDetails, DocumentCommon {
    oldFirstName?: string
    oldMiddleName?: string
}
