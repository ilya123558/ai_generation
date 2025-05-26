import { IMetaResponse, IPageRequest } from "@/entities/general/types/general"
import { TResolution } from "@/utils/types/resolution"

export type TChatSender = 'user' | 'bot'

export interface IChat {
  id: number
  like: boolean
  photo: string
  resolution: TResolution
}

export interface IGetGenerationsResponse extends IMetaResponse {
  page: number
  totalPages: number
  generations: IChat[]
}

export interface IGetGenerationsRequest extends IPageRequest {
  categoryId?: number
}