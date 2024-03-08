import { SetRequired } from 'type-fest'

import { DocumentCommon } from './metadata'

export enum EducationDocumentType {
    AttestationOfCompleteGeneralSecondaryEducation = 'attestationOfCompleteGeneralSecondaryEducation',
    CertificateOfBasicGeneralSecondaryEducation = 'certificateOfBasicGeneralSecondaryEducation',
    CertificateOfStateApprovedWorkingQualification = 'certificateOfStateApprovedWorkingQualification',
    DiplomaOfSkilledWorker = 'diplomaOfSkilledWorker',
    DiplomaOfJuniorSpecialist = 'diplomaOfJuniorSpecialist',
    DiplomaOfBachelor = 'diplomaOfBachelor',
    DiplomaOfSpecialist = 'diplomaOfSpecialist',
    DiplomaOfMaster = 'diplomaOfMaster',
    CertificateOfBasicGeneralSecondaryEducationUnderSpecialProgram = 'certificateOfBasicGeneralSecondaryEducationUnderSpecialProgram',
    DiplomaOfDoctorOfPhilosophy = 'diplomaOfDoctorOfPhilosophy',
    CertificateOfCompleteGeneralSecondaryEducation = 'certificateOfCompleteGeneralSecondaryEducation',
    CertificateOfBasicSecondaryEducation = 'certificateOfBasicSecondaryEducation',
    CertificateOfBasicSecondaryEducationWithSpecialConditions = 'certificateOfBasicSecondaryEducationWithSpecialConditions',
    DiplomaOfJuniorBachelor = 'diplomaOfJuniorBachelor',
    DiplomaOfProfessionalJuniorBachelor = 'diplomaOfProfessionalJuniorBachelor',
    DiplomaOfDoctorOfArts = 'diplomaOfDoctorOfArts',
}

export interface EducationDocument extends SetRequired<DocumentCommon<EducationDocumentType>, 'subtype'> {
    number: string
    series: string
    subtypeName: string
    subtypeNameEn?: string
    accreditationInstitutionName?: string
    accreditationInstitutionNameEn?: string
    additionalAwardInfo?: string
    additionalAwardInfoEn?: string
    beginningUniversityName?: string
    beginningUniversityNameEn?: string
    beginningUniversityYear?: string
    birthDate: Date
    bossFullName: string
    bossFullNameEn?: string
    bossPositionTitle: string
    bossPositionTitleEn?: string
    educationEndDate: Date
    educationUniversityName: string
    educationUniversityNameEn?: string
    lastName: string
    lastNameEn?: string
    firstName: string
    firstNameEn?: string
    isDuplicate: boolean
    issuedByUniversityName: string
    issuedByUniversityNameEn?: string
    middleName: string
    middleNameEn?: string
    professionText?: string
    qualificationName?: string
    qualificationNameEn?: string
    scientificCouncilUniversityName?: string
    scientificCouncilUniversityNameEn?: string
    scientificDegreeDate?: Date
    specialityName?: string
    specialityNameEn?: string
    specializationName?: string
    specializationNameEn?: string
    studyProgramName?: string
    studyProgramNameEn?: string
    fieldOfStudy?: string
    fieldOfStudyEn?: string
}
