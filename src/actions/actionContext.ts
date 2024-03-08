import { ActHeaders, GenericObject } from '../common'
import { ActionSession } from '../session'

export interface ActionContext {
    params?: GenericObject
    session?: ActionSession
    headers?: ActHeaders
}
