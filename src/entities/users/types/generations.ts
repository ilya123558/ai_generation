import { IMetaResponse } from "@/entities/general/types/general";
import { IChat } from "@/entities/generations/types/chat";
import { IPhoto } from "@/utils/types/photo";

export interface IGenerationsResponse extends IMetaResponse {
  page: number,
  totalPages: number,
  generations: IChat[]
}