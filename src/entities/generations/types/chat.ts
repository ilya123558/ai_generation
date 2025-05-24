import { IMetaResponse, IPageRequest } from "@/entities/general/types/general"

export type TChatSender = 'user' | 'bot'

export interface IChat {
  id: number
  photo: string
}

export interface IGetGenerationsResponse extends IMetaResponse {
  page: number
  totalPages: number
  generations: IChat[]
}

export interface IGetGenerationsRequest extends IPageRequest {
  categoryId?: number
}