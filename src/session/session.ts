import { SetRequired } from 'type-fest'

import { DiiaOfficeProfileData, ProfileFeature } from '../generated/profileFeature'
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

export interface UserFeatures {
    [ProfileFeature.office]?: DiiaOfficeProfileData
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

export interface AcquirerSession {
    sessionType: SessionType.Acquirer
    acquirer: AcquirerTokenData
}

export interface PartnerSession {
    sessionType: SessionType.Partner
    partner: PartnerTokenData
}

export interface TemporarySession {
    sessionType: SessionType.Temporary
    temporary: TemporaryTokenData
}

export interface ServiceEntranceSession {
    sessionType: SessionType.ServiceEntrance
    entrance: ServiceEntranceTokenData
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
