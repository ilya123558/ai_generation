import { IMetaResponse } from "@/entities/general/types/general";

export interface IProfiles {
  id: number
  title: string
  photos: string[]
}

export interface IProfilesResponse extends IMetaResponse {
  profiles: IProfiles[]
}