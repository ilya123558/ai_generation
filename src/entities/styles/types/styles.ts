import { ICategories } from "@/entities/categories/types/categories";
import { IMetaResponse } from "@/entities/general/types/general";

export interface IGetStylesResponse extends IMetaResponse {
  categories: ICategories[]
}