import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateGenerationsRequest, ICreateGenerationsResponse, IGetGenerationsByIdRequest, IGetGenerationsByIdResponse } from '../types/generations'

export const generationsApi = createApi({
  reducerPath: 'generationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/generations`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Generations'],
  endpoints: (builder) => ({
    // GET
    getGenerationsById: builder.query<IGetGenerationsByIdResponse, IGetGenerationsByIdRequest>({
      query: ({jobId}) => ({
        url: `/${jobId}`,
      }),
    }),
    // POST
    createGenerations: builder.mutation<ICreateGenerationsResponse, ICreateGenerationsRequest>({
      query: (body) => ({
        url: `/`,
        method: 'POST',
        body
      }),
    }),
  }),
})

export const { 
  useGetGenerationsByIdQuery,
  useLazyGetGenerationsByIdQuery,
} = generationsApi