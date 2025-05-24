import { IGetGenerationsRequest, IGetGenerationsResponse } from './../types/chat';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateGenerationsRequest, ICreateGenerationsResponse, IGetGenerationsByIdRequest, IGetGenerationsByIdResponse } from '../types/generations'
import { ILikeGenerationsRequest, ILikeGenerationsResponse } from '../types/like';

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
  tagTypes: ['Generations', 'Generations-like'],
  endpoints: (builder) => ({
    // GET
    getGenerationsById: builder.query<IGetGenerationsByIdResponse, IGetGenerationsByIdRequest>({
      query: ({jobId}) => ({
        url: `/${jobId}`,
      }),
    }),
    getGenerations: builder.query<IGetGenerationsResponse, IGetGenerationsRequest>({
      query: (params) => ({
        url: `/`,
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

    // PUT
    likeGenerations: builder.mutation<ILikeGenerationsResponse, ILikeGenerationsRequest>({
      query: ({generation_id}) => ({
        url: `/like/${generation_id}`,
        method: 'PUT'
      }),
      invalidatesTags: ['Generations-like']
    }),
  }),
})

export const { 
  useGetGenerationsByIdQuery,
  useLazyGetGenerationsByIdQuery,
  useGetGenerationsQuery,
  useLazyGetGenerationsQuery,
  useCreateGenerationsMutation,
  useLikeGenerationsMutation
} = generationsApi