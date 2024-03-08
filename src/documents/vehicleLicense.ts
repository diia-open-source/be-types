import { OwnerType } from '../generated/documents/documentData'
import { NameValue } from '../generated/documents/nameValue'

import { NameValueWithCode } from './driverLicense'
import { Localization } from './localization'
import { DocumentMetaData } from './metadata'
import { DocumentTicker } from './ticker'

export enum PolicyStatus {
    Active = 'Active',
}

export interface VehicleInsurancePolicy extends DocumentMetaData {
    id: string
    docNumber: string
    licensePlate: string
    vin: string
    vehicleLicenseId?: string
    serialNumber: string
    status: PolicyStatus
    expirationDate: string
    name: string
    address: string
    phone: string
    email: string
    website: string
    validOn: string
}

export interface VehicleLicenseDetails {
    card: {
        name: string
        icon: string
        brand: NameValue
        model: NameValue
        vin: NameValue
        ownership: NameValue
    }
    name: string
    icon: string
    country: string
    licensePlate: NameValueWithCode
    firstRegistrationDate: NameValueWithCode
    makeYear: NameValueWithCode
    registrationDate: NameValueWithCode
    documentNumber: NameValueWithCode
    department: NameValueWithCode
    lastName: NameValueWithCode
    firstName: NameValueWithCode
    address: NameValueWithCode
    ownership: NameValueWithCode
    brand: NameValueWithCode
    model: NameValueWithCode
    vin: NameValueWithCode
    totalWeight: NameValueWithCode
    ownWeight: NameValueWithCode
    rankCategory: NameValueWithCode
    capacity: NameValueWithCode
    fuel: NameValueWithCode
    color: NameValueWithCode
    nseating: NameValueWithCode
    nstandup: NameValueWithCode
    kindBody: NameValueWithCode
    tickerOptions?: DocumentTicker
    properUser?: NameValue
    properUserExpirationDate?: NameValue
}

export interface VehicleLicense extends DocumentMetaData {
    id: string
    docNumber: string
    licensePlate: string
    clientId: string
    serial: string
    number: string
    brand: string
    model: string
    vin: string
    color: string
    kindBody?: string
    makeYear: string
    totalWeight: string
    ownWeight: string
    capacity: string
    fuel: string
    rankCategory: string
    rankName?: string
    seatsNumber: string
    standingNumber: string
    dateFirstReg: string
    dateReg: string
    lastNameUA: string
    firstNameUA: string
    middleNameUA: string
    lastNameEN: string
    firstNameEN: string
    birthday: string
    address: string
    departmentId: string | null
    department: string | null
    ownerType: OwnerType
    ownerTypeUA: string
    properUserFrom?: Date
    properUserUntil?: Date
    insurancePolicy?: VehicleInsurancePolicy
    shareLocalization?: Localization
    [Localization.UA]?: VehicleLicenseDetails
    [Localization.ENG]?: VehicleLicenseDetails
}
