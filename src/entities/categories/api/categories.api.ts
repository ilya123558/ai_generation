import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategoriesRequest, ICategoriesResponse, ISubCategoriesResponse } from '../types/categories'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/categories`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    // GET
    getCategories: builder.query<ICategoriesResponse, ICategoriesRequest>({
      query: (params) => ({
        url: '/',
        params
      }),
      providesTags: ['Categories']
    }),
    getSubCategories: builder.query<ISubCategoriesResponse, number>({
      query: (category_id) => ({
        url: `/${category_id}`
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