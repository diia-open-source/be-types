import { DocumentMetaData } from './metadata'

export enum RefInternallyDisplacedPersonType {
    Person = 'person',
    Accompanied = 'accompanied',
}

export interface RefInternallyDisplacedPerson extends DocumentMetaData {
    docType: RefInternallyDisplacedPersonType
    id: string
    docNumber: string
    lastName: string
    firstName: string
    middleName: string
    issueDate: string
    birthDate: string
    gender: string
    department: string
    legalRepresentative?: string
    docIdentity: {
        number: string
        issueDate: string
        department: string
    }
    address: {
        birth: string
        registration: string
        actual: string
    }
}
