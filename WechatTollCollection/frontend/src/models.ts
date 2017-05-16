export interface User {
    id: number
    name: string
}

export interface Token {
    accessToken: string
}

export interface Context {
    user: User
    token: Token
}

export interface ServiceResult<T> {
    success: boolean
    code: number
    msg?: string
    data?: T
}