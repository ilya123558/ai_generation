import { IMetaResponse } from "@/entities/general/types/general"

export type TChatSender = 'user' | 'bot'

export interface IChat {
  id: number
  sender: TChatSender
  text: string
  image: string
  status: string
  createdAt: string
}

export interface IGetGenerationsChatResponse extends IMetaResponse {
  page: number
  totalPages: number
  generations: IChat[]
}