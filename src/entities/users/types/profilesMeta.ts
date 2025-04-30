import { IMetaResponse } from "@/entities/general/types/general";

export interface IProfilesMeta {
  id: number
  loraId: string
  status: string
  jobId: number
  photos: string[]
}

export interface IProfilesMetaResponse extends IMetaResponse {
  page: number,
  totalPages: number,
  profiles: IProfilesMeta[]
}