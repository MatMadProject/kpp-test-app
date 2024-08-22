export function getFormattedTime(date: Date) {
    return `${date.getMinutes()}:${date.getSeconds()}`
}

export function addMinutes(date: Date, minutes = 30) {
    return new Date(date.getTime() + minutes * 60 * 1000);
}