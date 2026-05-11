import { HttpStatusCode } from '../http.js'

export type HealthCheckResult<T> = {
    status: HttpStatusCode
    details: T
}

export interface OnHealthCheck {
    onHealthCheck(): Promise<HealthCheckResult<unknown>>
}
