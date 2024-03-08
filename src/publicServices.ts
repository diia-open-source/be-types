export interface StatusHistoryItem<T> {
    status: T
    date: Date
    traceId?: string
}
