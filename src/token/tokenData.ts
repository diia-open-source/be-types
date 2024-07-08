import type { ObjectId } from 'bson'

import { AuthDocument } from '../generated/documents/authDocument'
import { PortalUserPermissions } from '../generated/portal/portalUserPermissions'
import { SessionType } from '../generated/session/sessionType'
import { PortalUser } from '../generated/token/portalUser'
import { AuthEntryPoint, RefreshToken } from '../generated/token/tokenData'
import { User } from '../generated/token/user'

/* Generic `T = string` in TokenData interfaces is used in services with diia-app >= 15 where convertParamsByRules is dropped to map string into ObjectId */

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

export interface CabinetUserTokenData extends User, BaseTokenData<SessionType.CabinetUser> {
    mobileUid: string
    identifier: string
}

export type AppUser = UserTokenData | EResidentTokenData | CabinetUserTokenData

export type AppUserSessionType = SessionType.User | SessionType.EResident | SessionType.CabinetUser

export interface AcquirerTokenData<T extends ObjectId | string = ObjectId> extends BaseTokenData<SessionType.Acquirer> {
    _id: T
    partnerId?: T
}

export interface PortalUserTokenData extends PortalUser, BaseTokenData<SessionType.PortalUser> {
    identifier: string
    permissions?: PortalUserPermissions
}

export interface PartnerTokenData<T extends ObjectId | string = ObjectId> extends BaseTokenData<SessionType.Partner> {
    _id: T
    scopes: Record<string, string[]>
}

export interface TemporaryTokenData extends BaseTokenData<SessionType.Temporary> {
    mobileUid: string
}

export interface ServiceEntranceTokenData<T extends ObjectId | string = ObjectId> extends BaseTokenData<SessionType.ServiceEntrance> {
    acquirerId: T
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
    | CabinetUserTokenData
    | PartnerTokenData
    | TemporaryTokenData
    | ServiceEntranceTokenData
    | PortalUserTokenData
    | ServiceUserTokenData
