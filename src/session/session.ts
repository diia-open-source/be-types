import type { ObjectId } from 'bson'
import { SetRequired } from 'type-fest'

import { ProfileFeature, UserFeatures } from '../generated/profileFeature'
import { SessionType } from '../generated/session/sessionType'
import {
    AcquirerTokenData,
    CabinetUserTokenData,
    EResidentApplicantTokenData,
    EResidentTokenData,
    PartnerTokenData,
    PortalUserTokenData,
    ServiceEntranceTokenData,
    ServiceUserTokenData,
    TemporaryTokenData,
    UserTokenData,
} from '../token'

export interface BaseSession {
    sessionType: SessionType
}

export interface UserSession {
    sessionType: SessionType.User
    user: UserTokenData
    features?: UserFeatures
}

export interface DiiaOfficeUserSession extends UserSession {
    features: SetRequired<UserFeatures, ProfileFeature.office>
}

export interface CabinetUserSession {
    sessionType: SessionType.CabinetUser
    user: CabinetUserTokenData
}

export interface EResidentSession {
    sessionType: SessionType.EResident
    user: EResidentTokenData
    features?: UserFeatures
}

export interface EResidentApplicantSession {
    sessionType: SessionType.EResidentApplicant
    user: EResidentApplicantTokenData
}

export interface AcquirerSession<T extends ObjectId | string = ObjectId> {
    sessionType: SessionType.Acquirer
    acquirer: AcquirerTokenData<T>
}

export interface PartnerSession<T extends ObjectId | string = ObjectId> {
    sessionType: SessionType.Partner
    partner: PartnerTokenData<T>
}

export interface TemporarySession {
    sessionType: SessionType.Temporary
    temporary: TemporaryTokenData
}

export interface ServiceEntranceSession<T extends ObjectId | string = ObjectId> {
    sessionType: SessionType.ServiceEntrance
    entrance: ServiceEntranceTokenData<T>
}

export interface PortalUserSession {
    sessionType: SessionType.PortalUser
    user: PortalUserTokenData
}

export interface ServiceUserSession {
    sessionType: SessionType.ServiceUser
    serviceUser: ServiceUserTokenData
}

export type ActionSession =
    | UserSession
    | EResidentSession
    | EResidentApplicantSession
    | AcquirerSession
    | PartnerSession
    | TemporarySession
    | ServiceEntranceSession
    | PortalUserSession
    | ServiceUserSession
    | CabinetUserSession
