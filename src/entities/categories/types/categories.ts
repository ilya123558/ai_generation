import { IMetaResponse, IPageRequest } from './../../general/types/general';
export interface ICategories {
  id: number,
  title: string,
  preview: string,
  gender: string,
  prompt: string,
  position: number
}

export interface ICategoriesRequest extends IPageRequest {
  q?: string // search
}

export interface ICategoriesResponse extends IMetaResponse {
  categories: ICategories[]
}