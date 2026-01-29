import { AuthDocument } from '../generated/documents/authDocument'
import { PlatformType } from '../generated/platformType'
import { PortalUserPermissions } from '../generated/portal/portalUserPermissions'
import { SessionType } from '../generated/session/sessionType'
import { PortalUser } from '../generated/token/portalUser'
import { AuthEntryPoint, RefreshToken, UserIdentificationData } from '../generated/token/tokenData'
import { User } from '../generated/token/user'

interface BaseTokenData<T extends SessionType> {
    refreshToken: RefreshToken | null
    sessionType: T
}

export interface UserTokenData extends User, BaseTokenData<SessionType.User> {
    mobileUid: string
    identifier: string
    authEntryPoint: AuthEntryPoint
}

export interface EResidentApplicant {
    email: string
    document?: AuthDocument
}

export type VerifiedBaseTokenData<T extends UserTokenData | BaseTokenData<SessionType> = BaseTokenData<SessionType>> = T & {
    exp?: number
    iat?: number
    refreshToken: RefreshToken
}

export interface EResidentTokenData extends User, BaseTokenData<SessionType.EResident> {
    mobileUid: string
    identifier: string
    authEntryPoint: AuthEntryPoint
}

export interface EResidentApplicantTokenData extends EResidentApplicant, BaseTokenData<SessionType.EResidentApplicant> {
    mobileUid: string
    identifier: string
    authEntryPoint: AuthEntryPoint
}

export type AppUser = UserTokenData | EResidentTokenData

export type AppUserSessionType = SessionType.User | SessionType.EResident

export interface AcquirerTokenData extends BaseTokenData<SessionType.Acquirer> {
    _id: string
    partnerId?: string
}

export interface PortalUserTokenData extends PortalUser, BaseTokenData<SessionType.PortalUser> {
    identifier: string
    permissions?: PortalUserPermissions
}

export interface PartnerTokenData extends BaseTokenData<SessionType.Partner> {
    _id: string
    scopes: Record<string, string[]>
}

export interface TemporaryTokenData extends BaseTokenData<SessionType.Temporary> {
    mobileUid: string
    platformType?: PlatformType
    jti: string
    scope: string[]
    identificationData?: UserIdentificationData
}

export interface ServiceEntranceTokenData extends BaseTokenData<SessionType.ServiceEntrance> {
    acquirerId: string
    branchHashId: string
    offerHashId: string
    offerRequestHashId: string
    mobileUid: string
}

export interface ServiceUserTokenData extends BaseTokenData<SessionType.ServiceUser> {
    login: string
}

export type TokenData =
    | UserTokenData
    | AcquirerTokenData
    | EResidentTokenData
    | EResidentApplicantTokenData
    | PartnerTokenData
    | TemporaryTokenData
    | ServiceEntranceTokenData
    | PortalUserTokenData
    | ServiceUserTokenData
