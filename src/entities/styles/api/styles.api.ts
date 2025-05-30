import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetStylesResponse } from '../types/styles'
import { baseQueryWithReauth } from '@/utils/libs/baseQueryWithReauth'

export const stylesApi = createApi({
  reducerPath: 'stylesApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Styles'],
  endpoints: (builder) => ({
    // GET
    getStyles: builder.query<IGetStylesResponse, void>({
      query: () => ({
        url: `/styles/`,
      }),
    }),
  }),
})

export const { 
  useGetStylesQuery,
  useLazyGetStylesQuery,
} = stylesApi