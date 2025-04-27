import { IMetaResponse } from "@/entities/general/types/general"

export interface IUploadProfileRequest {
  images: string[]
}

export interface IUploadProfileResponse extends IMetaResponse {
  images: string[]
}
