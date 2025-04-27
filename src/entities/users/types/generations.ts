import { IMetaResponse } from "@/entities/general/types/general";

export interface IGenerationsResponse extends IMetaResponse {
  page: number,
  totalPages: number,
  generations: string[]
}