import { DocumentMetaData } from './metadata'

export enum StudentCardType {
    Pupil = 1,
    Student = 2,
}

export interface StudentCard extends DocumentMetaData {
    id: string
    docNumber: string
    docType: StudentCardType | number
    lastNameUA: string
    firstNameUA: string
    middleNameUA: string
    issueDate: string
    expirationDate: string
    collegeName: string
    facultyName: string
    educationType: string
    photo: string
}
