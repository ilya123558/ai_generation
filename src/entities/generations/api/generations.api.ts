import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateGenerationsRequest, ICreateGenerationsResponse, IGetGenerationsByIdRequest, IGetGenerationsByIdResponse } from '../types/generations'
import { IPageRequest } from '@/entities/general/types/general'
import { IGetGenerationsChatResponse } from '../types/chat'

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
    getGenerationsChat: builder.query<IGetGenerationsChatResponse, IPageRequest>({
      query: (params) => ({
        url: `/chat`,
        params
      }),
      providesTags: ['Generations']
    }),

    // POST
    createGenerations: builder.mutation<ICreateGenerationsResponse, ICreateGenerationsRequest>({
      query: (body) => ({
        url: `/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Generations']
    }),
  }),
})

export const { 
  useGetGenerationsByIdQuery,
  useLazyGetGenerationsByIdQuery,
  useGetGenerationsChatQuery,
  useLazyGetGenerationsChatQuery,
  useCreateGenerationsMutation
} = generationsApi