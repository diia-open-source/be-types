import { MessageActionSubtype } from '../generated'
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
    RecipientFullName = 'RECIPIENT_FULL_NAME',
    Owner = 'OWNER',
    OrderNum = 'ORDER_NUM',
    PollTitle = 'POLL_TITLE',
    DateFrom = 'DATE_FROM',
    DateUntil = 'DATE_UNTIL',
    Year = 'YEAR',
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

export type TemplateParams = Partial<Record<TemplateStub, string>>

export enum MessageTemplateCode {}

export interface NotificationAppVersions {
    minVersion?: string
    maxVersion?: string
    versions?: string[]
}

export interface MessageAction {
    type: string
    subtype?: MessageActionSubtype
    resourceId?: string
}

export type NotificationAppVersionsByPlatformType = Partial<Record<PlatformType, NotificationAppVersions>>

export interface CreateNotificationWithPushesParams<T = MessageTemplateCode> {
    templateCode: T
    userIdentifier: string
    templateParams?: TemplateParams
    resourceId?: string
    appVersions?: NotificationAppVersionsByPlatformType
    action?: MessageAction
}

export type NotificationTemplateParams = Pick<CreateNotificationWithPushesParams, 'templateParams' | 'action' | 'appVersions'>
