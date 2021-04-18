export interface User {
    id?: string,
    sub?: string,
    username: string,
    email?: string,
    token?: string,
    expires?: number,
    refreshToken?: string,
    verificationDestination?: string
    accountStatus?: string
}