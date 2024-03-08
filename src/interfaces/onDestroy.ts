export interface OnDestroy {
    onDestroy(): Promise<void>
}

export interface OnBeforeApplicationShutdown {
    onBeforeApplicationShutdown(): Promise<void>
}
