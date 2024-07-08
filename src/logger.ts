import { AsyncLocalStorage } from 'node:async_hooks'

import { AlsData, LogData } from './common'

export enum LogLevel {
    LOG = 'log',
    TRACE = 'trace',
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    FATAL = 'fatal',
    IO = 'io',
}

export interface TrimmerOptions {
    maxArrayLength: number
    maxStringLength: number
    maxObjectDepth: number
    maxObjectBreadth: number
    redact: {
        fields?: Set<string>
        paths?: Set<string>
        fieldsToRedactFullname?: Set<string>
    }
    endLengthToLog: number
}

export interface LoggerOptions extends TrimmerOptions {
    logLevel?: LogLevel
}

export type LoggerConfig = Partial<LoggerOptions>

export interface LoggerConstructor {
    new (conig?: LoggerConfig, asyncLocalStorage?: AsyncLocalStorage<AlsData>): Logger
}

export interface Logger {
    log(message: string, data?: unknown): void
    info(message: string, data?: unknown): void
    error(message: string, data?: unknown): void
    warn(message: string, data?: unknown): void
    fatal(message: string, data?: unknown): void
    trace(message: string, data?: unknown): void
    debug(message: string, data?: unknown): void
    io(message: string, data?: unknown): void

    child(bindings: Record<string, unknown>): Logger

    prepareContext(context: LogData): LogData
}
