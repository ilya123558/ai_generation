export interface IChat {
  id: string | number
  photo: string
  category: string
  time: string
  type: 'request' | 'response'
}