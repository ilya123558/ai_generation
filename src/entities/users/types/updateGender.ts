import { IMetaResponse } from "@/entities/general/types/general"
import { TGender } from "@/utils/types/gender"

export interface IUpdateGenderRequest {
  gender: TGender
}

export interface IUpdateGenderResponse extends IMetaResponse {
  gender: TGender
}
