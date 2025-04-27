export interface IUser {
  id: number
  role: string // "new"
  photo: string
  mention: string
  tokensCount: number
  token: {
    accessToken: string
    refreshToken: string
  }
}