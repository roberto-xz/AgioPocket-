

export default function nameToChars(name: string, last: string): string {
    return `${name.charAt(0).toLocaleUpperCase()}${last.charAt(0).toLocaleUpperCase()}`
}

