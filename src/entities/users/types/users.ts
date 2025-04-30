export interface IUser {
  id: number
  role: 'new' | 'pending' |'user'
  photo: string // фото из tg
  mention: string // name из tg (@zong_name)
  tokensCount: number // кол-во генераций
  token: {
    accessToken: string
    refreshToken: string
  }
}