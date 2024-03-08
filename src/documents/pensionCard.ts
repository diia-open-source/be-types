import { DocumentMetaData } from './metadata'

export enum PensionCardType {
    Electronic = 'EPP',
    Paper = 'PPP',
}

export enum PensionCardGender {
    Male = 'Ч',
    Female = 'Ж',
}

export interface PensionCard extends DocumentMetaData {
    id: string
    docNumber: string
    docType: PensionCardType
    lastNameUA: string
    firstNameUA: string
    middleNameUA?: string
    pensionType: string
    pensionCaseNumber: string
    birthday: string
    gender: PensionCardGender
    issueDate: string
    expirationDate: string
    photo: string
}
