import { DocStatus } from './docStatus'
import { DocumentMetaData } from './metadata'

export interface TaxpayerCardInDocument {
    name: string
    value: string
    status: DocStatus
    statusDescription: string
}

export interface TaxpayerCard extends DocumentMetaData {
    isVisible: boolean
    id: string
    docNumber: string
    lastNameUA: string
    firstNameUA: string
    middleNameUA: string
    birthday: string
    creationDate: string
}
