import { BaseSession, NoneSession } from '../session'

export interface ActionContext<
    TParams extends object = Record<never, never>,
    TSession extends BaseSession = NoneSession,
    THeaders extends object = object,
> {
    params: TParams
    session: TSession
    headers: THeaders
}
