/**
 * @see https://developers.google.com/actions-center/reference/grpc-api/status_codes
 */
export enum GrpcStatusCode {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16,
}

export const grpcMetadataKeys = {
    SESSION: 'session',
    CONTENT_TYPE: 'contenttype',
    TRACING: 'tracing',
    TRACE_ID: 'traceid',
    TRACE_PARENT: 'traceparent',
    TRACE_STATE: 'tracestate',
    ACCEPT_LANGUAGE: 'acceptlanguage',
    PLATFORM_TYPE: 'platformtype',
    PLATFORM_VERSION: 'platformversion',
    APP_VERSION: 'appversion',
    MOBILE_UID: 'mobileuid',
    SERVICE_CODE: 'servicecode',
    PROCESS_CODE: 'processcode',
    ORIGINAL_ERROR: 'original-error',
    ACTION_VERSION: 'actionversion',
    STREAM_ID: 'stream-id',
    SENT_FROM: 'sent-from',
    HANDLED_BY: 'handled-by',
    TOKEN: 'token',
} as const

export type GrpcMetadataKey = (typeof grpcMetadataKeys)[keyof typeof grpcMetadataKeys]
