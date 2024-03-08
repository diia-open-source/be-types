import { MessageActionSubtype } from '../generated/message'
import { PlatformType } from '../generated/platformType'

export enum TemplateStub {
    ViolationDate = 'VIOLATION_DATE',
    AcquirerName = 'ACQUIRER_NAME',
    OpeningDate = 'OPENING_DATE',
    ApplicationId = 'APPLICATION_ID',
    ServiceCenterName = 'SERVICE_CENTER_NAME',
    Reason = 'REASON',
    Address = 'ADDRESS',
    PhoneNumber = 'PHONE_NUMBER',
    FullName = 'FULL_NAME',
    Owner = 'OWNER',
    OrderNum = 'ORDER_NUM',
    PollTitle = 'POLL_TITLE',
    DateFrom = 'DATE_FROM',
    DateUntil = 'DATE_UNTIL',
    Specializations = 'SPECIALIZATIONS',
    DocumentName = 'DOCUMENT_NAME',
    PartnerName = 'PARTNER_NAME',
    ChildName = 'CHILD_NAME',
    BondName = 'BOND_NAME',
    Quantity = 'QUANTITY',
    Amount = 'AMOUNT',
    Image = 'IMAGE',
    Link = 'LINK',
    BrandModel = 'BRAND_MODEL',
    LicensePlate = 'LICENSE_PLATE',
    Rate = 'RATE',
    MortgageMaxAmount = 'MORTGAGE_MAX_AMOUNT',
    MortgageTerm = 'MORTGAGE_TERM',
    MortgageAdvance = 'MORTGAGE_ADVANCE',
    MortgageRepayment = 'MORTGAGE_REPAYMENT',
    PenaltyDecision = 'PENALTY_DECISION',
    ShortText = 'SHORT_TEXT',
    CaseNumber = 'CASE_NUMBER',
    DecisionNumber = 'DECISION_NUMBER',
    DecisionDate = 'DECISION_DATE',
    DecisionName = 'DECISION_NAME',
    VehicleName = 'VEHICLE_NAME',
}

export enum MessageActionType {
    Message = 'message',
    AdministrativeFees = 'administrativeFees',
    Penalties = 'penalties',
    Debts = 'debts',
    DocumentsSharing = 'documentsSharing',
    SocialAssistancePrograms = 'socialAssistancePrograms',
    NewDeviceConnecting = 'newDeviceConnecting',
    Vaccination = 'vaccination',
    ReplacementDriverLicense = 'replacementDriverLicense',
    ResidenceRegistration = 'residenceRegistration',
    ResidenceRegistrationMyself = 'residenceRegistrationMyself',
    ResidenceRegistrationThirdPerson = 'residenceRegistrationThirdPerson',
    ChildResidenceRegistration = 'childResidenceRegistration',
    VaccinationCertificate = 'vaccinationCertificate',
    PrivateEntrepreneur = 'privateEntrepreneur',
    Poll = 'poll',
    CriminalRecordCertificate = 'criminalRecordCertificate',
    Ok5Certificate = 'ok5-cert',
    Ok7Certificate = 'ok7-cert',
    ResidenceCert = 'residenceCert',
    ResidenceCertChildren = 'residenceCertChildren',
    ProperUser = 'properUser',
    DoctorConsultation = 'doctorConsultation',
    PatientConsultation = 'patientConsultation',
    UnemploymentStatus = 'unemploymentStatus',
    UnemploymentStatusCanceling = 'unemploymentStatusCanceling',
    ENot = 'eNot',
    InternallyDisplacedPerson = 'internallyDisplacedPerson',
    MilitaryDonation = 'militaryDonation',
    MilitaryBonds = 'militaryBonds',
    Mortgage = 'mortgage',
    VehicleCustomsClearance = 'vehicleCustomsClearance',
    VehicleReRegistration = 'vehicleReRegistration',
    LicensePlates = 'licensePlates',
    VehicleLicenseType = 'vehicleLicenseType',
    CourtDecision = 'courtDecision',
    CourtHearing = 'courtHearing',
    CourtServices = 'courtServices',
    CourtPenalties = 'courtPenalties',
    LedExchange = 'ledExchange',
    OfficeBadges = 'officeBadges',
    OfficePoll = 'officePoll',
    DamagedPropertyRecovery = 'damagedPropertyRecovery',
    DepositGuaranteePayments = 'depositGuaranteePayments',
    CancelInternallyDisplacedPerson = 'cancelInternallyDisplacedPerson',
    EditInternallyDisplacedPersonAddress = 'editInternallyDisplacedPersonAddress',
    DiiaId = 'diiaId',

    DocumentsReferenceInternallyDisplacedPerson = 'documents/referenceInternallyDisplacedPerson',
    DocumentsInternationalVaccinationCertificate = 'documents/internationalVaccinationCertificate',
    DocumentsLocalVaccinationCertificate = 'documents/localVaccinationCertificate',
    DocumentsChildLocalVaccinationCertificate = 'documents/childLocalVaccinationCertificate',
    DocumentsVehicleLicense = 'documents/vehicleLicense',
    DocumentsDriverLicense = 'documents/driverLicense',
    DocumentsResidencePermitPermanent = 'documents/residencePermitPermanent',
    DocumentsResidencePermitTemporary = 'documents/residencePermitTemporary',

    HousingCertificates = 'housingCertificates',
    MonetaryCompensation = 'monetaryCompensation',
    Invincibility = 'invincibility',
}

export type TemplateParams = Partial<Record<TemplateStub, string>>

export enum MessageTemplateCode {}

export interface NotificationAppVersions {
    minVersion?: string
    maxVersion?: string
    versions?: string[]
}

export interface MessageAction<T = MessageActionType> {
    type: T
    subtype?: MessageActionSubtype
    resourceId?: string
}

export type NotificationAppVersionsByPlatformType = Partial<Record<PlatformType, NotificationAppVersions>>

export interface CreateNotificationWithPushesParams<T = MessageTemplateCode, K = MessageActionType> {
    templateCode: T
    userIdentifier: string
    templateParams?: TemplateParams
    resourceId?: string
    appVersions?: NotificationAppVersionsByPlatformType
    action?: MessageAction<K>
}

export type NotificationTemplateParams = Pick<CreateNotificationWithPushesParams, 'templateParams' | 'action' | 'appVersions'>
