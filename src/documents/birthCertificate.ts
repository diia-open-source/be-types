import { BirthCertificateSource } from '../generated/documents/documentData'

import { DocumentMetaData } from './metadata'

export enum ChildGender {
    Male = 'чоловіча',
    Female = 'жіноча',
}

export enum ParenthoodKey {
    RequestByMother = '3',
    RequestByReRepresentative = '4',
    RequestByMotherAccordingToPartOne = '6',
    RequestByReRepresentativeAccordingToPartOne = '7',
}

export interface BirthCertificate extends DocumentMetaData {
    source: BirthCertificateSource
    id: string
    document: Document
    documents?: Document[]
    child: Child
    parents: Parents
    act: Act
}

export interface Document {
    serie: string
    serieOriginal: string
    number: string
    serieNumber: string
    department: string
    issueDate: string
}

export interface Child {
    lastName: string
    firstName: string
    middleName: string
    gender: ChildGender
    rnokpp?: string
    birthDate: string
    birthPlace: string
    birthState: string
    currentRegistrationPlaceUA?: string
    citizenship?: string
}

export interface Parents {
    father: Parent
    mother: Parent
}

export interface Parent {
    fullName: string
    birthDate: string
    citizenship: string
    rnokpp?: string
}

export interface Act {
    name: string
    registrationPlace: string
    number: string
    date: string
    parenthood: ParenthoodKey | string
}
