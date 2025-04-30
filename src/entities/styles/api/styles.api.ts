import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetStylesResponse } from '../types/styles'

export const stylesApi = createApi({
  reducerPath: 'stylesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/styles`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Styles'],
  endpoints: (builder) => ({
    // GET
    getStyles: builder.query<IGetStylesResponse, void>({
      query: () => ({
        url: `/`,
      }),
    }),
  }),
})

export const { 
  useGetStylesQuery,
  useLazyGetStylesQuery,
} = stylesApi