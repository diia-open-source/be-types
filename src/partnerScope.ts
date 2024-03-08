import { PartnerScopeType } from './generated/partner/scopeType'

export enum PartnerPartnersScope {
    Create = 'create',
}

export enum PartnerUploadScope {
    Image = 'image',
    Video = 'video',
}

export enum PartnerBankAccountScope {
    CreateInternationalCard = 'createInternationalCard',
}

export enum PartnerPaymentScope {
    Debt = 'debt',
    Penalty = 'penalty',
}

export enum PartnerAcquirersScope {
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

export enum PartnerAdministrativeFeesScope {
    Load = 'load',
}

export enum PartnerDriverLicenseReplacementScope {
    StatusCallback = 'statusCallback',
    DeliveryCallback = 'deliveryCallback',
    Support = 'support',
}

export enum PartnerDocumentDeliveryScope {
    StatusCallback = 'statusCallback',
    CreateDelivery = 'createDelivery',
}

export enum PartnerNotificationsScope {
    CreateTemplate = 'createTemplate',
    CreateDistribution = 'createDistribution',
    DistributionStatus = 'distributionStatus',
    DistributionResults = 'distributionResults',
    DeleteDistribution = 'deleteDistribution',
    StartNotificationsByAppVersions = 'startNotificationsByAppVersions',
    PushTopic = 'pushTopic',
    PushCampaign = 'pushCampaign',
}

export enum PartnerVaccinationAidScope {
    AddAccount = 'addAccount',
    DeleteAccount = 'deleteAccount',
    ProcessReport = 'processReport',
    ProcessPfuReport = 'processPfuReport',
}

export enum PartnerProperUserScope {
    ApplicationStatusCallback = 'applicationStatusCallback',
}

export enum PartnerPublicServiceScope {
    Read = 'read',
    Create = 'create',
    Update = 'update',
}

export enum PartnerFaqScope {
    Read = 'read',
    Create = 'create',
    Update = 'update',
}

export enum PartnerErrorTemplateScope {
    Read = 'read',
    Create = 'create',
    Update = 'update',
}

export enum PartnerProcessTemplateScope {
    Read = 'read',
    Create = 'create',
    Update = 'update',
}

export enum PartnerDamagedPropertyScope {
    Read = 'read',
    Create = 'create',
    Update = 'update',
}

export enum PartnerIdpSupervisorScope {
    ResendApplication = 'resend-application',
    CheckApplication = 'check-application',
}

export enum PartnerStoreScope {
    BumpTags = 'bump-tags',
}

export enum PartnerMortgageScope {
    All = 'all',
}

export enum PartnerMilitaryDonationScope {
    UpdateFundReport = 'update-fund-report',
}

export enum PartnerTemporaryOccupiedTerritoryScope {
    ReplicateFromExternal = 'replicate-from-external',
}

export enum PartnerMaintenanceScope {
    Admin = 'admin',
}

export enum PartnerDepositGuaranteePaymentsScope {
    UpdateStatus = 'update-status',
}

export enum PartnerMiaScope {
    OperationCallback = 'operation-callback',
    ResultPushCallback = 'result-push-callback',
}

export enum PartnerVehicleReRegistrationScope {
    Support = 'support',
}

export interface PartnerScopes {
    [PartnerScopeType.payment]?: PartnerPaymentScope[]
    [PartnerScopeType.acquirers]?: PartnerAcquirersScope[]
    [PartnerScopeType.administrativeFees]?: PartnerAdministrativeFeesScope[]
    [PartnerScopeType.driverLicenseReplacement]?: PartnerDriverLicenseReplacementScope[]
    [PartnerScopeType.documentDelivery]?: PartnerDocumentDeliveryScope[]
    [PartnerScopeType.notifications]?: PartnerNotificationsScope[]
    [PartnerScopeType.vaccinationAid]?: PartnerVaccinationAidScope[]
    [PartnerScopeType.properUser]?: PartnerProperUserScope[]
    [PartnerScopeType.bankAccount]?: PartnerBankAccountScope[]
    [PartnerScopeType.upload]?: PartnerUploadScope[]
    [PartnerScopeType.partners]?: PartnerPartnersScope[]
    [PartnerScopeType.publicService]?: PartnerPublicServiceScope[]
    [PartnerScopeType.faq]?: PartnerFaqScope[]
    [PartnerScopeType.processTemplate]?: PartnerProcessTemplateScope[]
    [PartnerScopeType.errorTemplate]?: PartnerErrorTemplateScope[]
    [PartnerScopeType.damagedProperty]?: PartnerDamagedPropertyScope[]
    [PartnerScopeType.idpSupervisor]?: PartnerIdpSupervisorScope[]
    [PartnerScopeType.store]?: PartnerStoreScope[]
    [PartnerScopeType.mortgage]?: PartnerMortgageScope[]
    [PartnerScopeType.militaryDonation]?: PartnerMilitaryDonationScope[]
    [PartnerScopeType.temporaryOccupiedTerritory]?: PartnerTemporaryOccupiedTerritoryScope[]
    [PartnerScopeType.maintenance]?: PartnerMaintenanceScope[]
    [PartnerScopeType.depositGuaranteePayments]?: PartnerDepositGuaranteePaymentsScope[]
    [PartnerScopeType.mia]?: PartnerMiaScope[]
    [PartnerScopeType.vehicleReRegistration]?: PartnerVehicleReRegistrationScope[]
}
