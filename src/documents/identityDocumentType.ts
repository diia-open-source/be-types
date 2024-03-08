import { DocumentType } from './documentType'

export enum IdentityDocumentType {
    InternalPassport = DocumentType.InternalPassport,
    ForeignPassport = DocumentType.ForeignPassport,
    ResidencePermitPermanent = DocumentType.ResidencePermitPermanent,
    ResidencePermitTemporary = DocumentType.ResidencePermitTemporary,
}
