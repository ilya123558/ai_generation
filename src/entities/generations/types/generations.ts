import { IMetaResponse } from "@/entities/general/types/general"
import { TResolution } from "@/utils/types/resolution"

export interface ICreateGenerationsRequest {
  profileId: number,
  subcategoryId?: number,
  styleId?: number,
  prompt: string,
  resolution: TResolution
}

export interface ICreateGenerationsResponse extends IMetaResponse {
  jobId: number
  cost: number
  displayPrompt: string
}

export interface IGetGenerationsByIdRequest {
  jobId: number
}

export interface IGetGenerationsByIdResponse extends IMetaResponse {
  status: 'pending' | 'completed' | 'error'
  result: string[]
}