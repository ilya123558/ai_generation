import { IMetaResponse } from "@/entities/general/types/general"

export interface ILikeGenerationsRequest {
  generation_id: number
}

export interface ILikeGenerationsResponse extends IMetaResponse {
  like: boolean
}