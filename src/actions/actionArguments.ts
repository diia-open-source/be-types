import { ActHeaders, GenericObject } from '../common'
import { PlatformType } from '../generated/platformType'
import {
    AcquirerSession,
    BaseSession,
    DiiaOfficeUserSession,
    EResidentApplicantSession,
    EResidentSession,
    PartnerSession,
    PortalUserSession,
    ServiceEntranceSession,
    ServiceUserSession,
    TemporarySession,
    UserSession,
} from '../session'

export type ActionParams = GenericObject

interface BaseActionArguments<T extends ActHeaders = ActHeaders, TSession extends BaseSession = BaseSession> {
    params: ActionParams
    headers: T
    session: TSession
}

export interface AppUserActionHeaders extends ActHeaders {
    mobileUid: string
    platformVersion: string
    appVersion: string
    platformType: PlatformType
}

export declare type DiiaOfficeUserActionArguments = UserActionArguments<UserActionHeaders, DiiaOfficeUserSession>

export declare type UserActionHeaders = AppUserActionHeaders

export interface UserActionArguments<T extends UserActionHeaders = UserActionHeaders, S extends UserSession = UserSession>
    extends BaseActionArguments<T, S> {}

export declare type EResidentApplicantActionHeaders = AppUserActionHeaders

export interface EResidentApplicantActionArguments<T extends EResidentApplicantActionHeaders = EResidentApplicantActionHeaders>
    extends BaseActionArguments<T, EResidentApplicantSession> {}

export declare type EResidentActionHeaders = AppUserActionHeaders

export interface EResidentActionArguments<T extends EResidentActionHeaders = EResidentActionHeaders>
    extends BaseActionArguments<T, EResidentSession> {}

export declare type AppUserActionArguments = UserActionArguments | EResidentActionArguments

export declare type AcquirerActionHeaders = ActHeaders

export interface AcquirerActionArguments<T extends AcquirerActionHeaders = AcquirerActionHeaders>
    extends BaseActionArguments<T, AcquirerSession> {}

export declare type PartnerActionHeaders = ActHeaders

export interface PartnerActionArguments<T extends PartnerActionHeaders = PartnerActionHeaders>
    extends BaseActionArguments<T, PartnerSession> {}

export declare type TemporaryActionHeaders = AppUserActionHeaders

export interface TemporaryActionArguments<T extends TemporaryActionHeaders = TemporaryActionHeaders>
    extends BaseActionArguments<T, TemporarySession> {}

export declare type ServiceEntranceActionHeaders = AppUserActionHeaders

export interface ServiceEntranceActionArguments<T extends ServiceEntranceActionHeaders = ServiceEntranceActionHeaders>
    extends BaseActionArguments<T, ServiceEntranceSession> {}

export declare type PortalActionHeaders = AppUserActionHeaders

export interface PortalUserActionArguments<T extends PortalActionHeaders = PortalActionHeaders>
    extends BaseActionArguments<T, PortalUserSession> {}

export declare type ServiceUserActionHeaders = ActHeaders

export interface ServiceUserActionArguments<T extends ServiceUserActionHeaders = ServiceUserActionHeaders>
    extends BaseActionArguments<T, ServiceUserSession> {}

export declare type ServiceActionArguments<T extends ActHeaders = ActHeaders> = BaseActionArguments<T>

/**
 * @deprecated ActionArguments is deprecated in favor of ActionContext
 */
export type ActionArguments =
    | ServiceActionArguments
    | UserActionArguments
    | EResidentActionArguments
    | EResidentApplicantActionArguments
    | AppUserActionArguments
    | AcquirerActionArguments
    | PartnerActionArguments
    | TemporaryActionArguments
    | ServiceEntranceActionArguments
    | PortalUserActionArguments
    | ServiceUserActionArguments
