import { HttpStatusCode } from '../http'

export type HealthCheckResult<T> = {
    status: HttpStatusCode
    details: T
}

export interface OnHealthCheck {
    onHealthCheck(): Promise<HealthCheckResult<unknown>>
}
