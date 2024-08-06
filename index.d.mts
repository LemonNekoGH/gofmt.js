interface GoFmt {
    format: (value: string) => [string, string]
}

declare const module: GoFmt

export default module
