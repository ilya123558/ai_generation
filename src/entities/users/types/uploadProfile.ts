import { IMetaResponse } from "@/entities/general/types/general"

export interface IUploadProfileRequest {
  images: FormData
  title: string
}

export interface IUploadProfileResponse extends IMetaResponse {
  images: string[]
}
