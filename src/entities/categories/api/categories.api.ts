import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategoriesRequest, ICategoriesResponse, ISubCategoriesRequest, ISubCategoriesResponse } from '../types/categories'
import { baseQueryWithReauth } from '@/utils/libs/baseQueryWithReauth'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    // GET
    getCategories: builder.query<ICategoriesResponse, ICategoriesRequest>({
      query: (params) => ({
        url: '/categories/',
        params
      }),
      providesTags: ['Categories']
    }),
    getSubCategories: builder.query<ISubCategoriesResponse, ISubCategoriesRequest>({
      query: (data) => ({
        url: `/categories/${data.category_id}`,
        params: {query: data.query}
      }),
    }),

  }),
})

export const { 
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useLazyGetSubCategoriesQuery,
} = categoriesApi