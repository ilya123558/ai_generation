import { ICategories } from "@/entities/categories/types/categories";
import { IMetaResponse } from "@/entities/general/types/general";

interface IStyle {
  id: number;
  title: string;
  position: number;
}

export interface IGetStylesResponse extends IMetaResponse {
  styles: IStyle[]
}