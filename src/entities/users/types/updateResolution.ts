import { IMetaResponse } from "@/entities/general/types/general"
import { TResolution } from "@/utils/types/resolution"

export interface IUploadResolutionRequest {
  resolution: TResolution
}

export interface IUploadResolutionResponse extends IMetaResponse {
  resolution: TResolution
}
