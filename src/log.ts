

export function log(message: string): void {
    console.log(message);
}

export function logError(message: string): void {
    console.error(message);
}

export function logWarning(message: string): void {
    console.warn(message);
}


type LogLevel = 'info' | 'error' | 'warning';

export function logMessage(message: string, level: LogLevel): void {
    switch (level) {
        case 'info':
            log(message);
            break;
        case 'error':
            logError(message);
            break;
        case 'warning':
            logWarning(message);
            break;
    }
}