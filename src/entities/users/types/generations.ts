import { IMetaResponse } from "@/entities/general/types/general";
import { IPhoto } from "@/utils/types/photo";

export interface IGenerationsResponse extends IMetaResponse {
  page: number,
  totalPages: number,
  generations: IPhoto[]
}