import { IMetaResponse } from "@/entities/general/types/general"

export interface ICreateGenerationsRequest {
  profileId: number,
  categoryId: number,
  styleId: number,
  prompt: string,
  resolution: string
}

export interface ICreateGenerationsResponse extends IMetaResponse {
  jobId: number
}

export interface IGetGenerationsByIdRequest {
  jobId: number
}

export interface IGetGenerationsByIdResponse extends IMetaResponse {
  status: 'pending' | 'completed' | 'error'
  result: string[]
}