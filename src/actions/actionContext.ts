import { BaseSession } from '../session'

export interface ActionContext<
    TParams extends object = Record<never, never>,
    TSession extends BaseSession = BaseSession,
    THeaders extends object = object,
> {
    params: TParams
    session: TSession
    headers: THeaders
}
