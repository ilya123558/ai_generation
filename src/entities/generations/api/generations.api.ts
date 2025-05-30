import { IGetGenerationsRequest, IGetGenerationsResponse } from './../types/chat';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateGenerationsRequest, ICreateGenerationsResponse, IGetGenerationsByIdRequest, IGetGenerationsByIdResponse } from '../types/generations'
import { ILikeGenerationsRequest, ILikeGenerationsResponse } from '../types/like';
import { baseQueryWithReauth } from '@/utils/libs/baseQueryWithReauth';

export const generationsApi = createApi({
  reducerPath: 'generationsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Generations', 'Generations-like'],
  endpoints: (builder) => ({
    // GET
    getGenerationsStatusById: builder.query<IGetGenerationsByIdResponse, IGetGenerationsByIdRequest>({
      query: ({jobId}) => ({
        url: `/generations/${jobId}`,
      }),
    }),
    getGenerations: builder.query<IGetGenerationsResponse, IGetGenerationsRequest>({
      query: (params) => ({
        url: `/generations/`,
        params 
      }),
      providesTags: ['Generations']
    }),

    // POST
    createGenerations: builder.mutation<ICreateGenerationsResponse, ICreateGenerationsRequest>({
      query: (body) => ({
        url: `/generations/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Generations']
    }),

    // PUT
    likeGenerations: builder.mutation<ILikeGenerationsResponse, ILikeGenerationsRequest>({
      query: ({generation_id}) => ({
        url: `/generations/like/${generation_id}`,
        method: 'PUT'
      }),
      invalidatesTags: ['Generations-like']
    }),
  }),
})

export const { 
  useGetGenerationsStatusByIdQuery,
  useLazyGetGenerationsStatusByIdQuery,
  useGetGenerationsQuery,
  useLazyGetGenerationsQuery,
  useCreateGenerationsMutation,
  useLikeGenerationsMutation
} = generationsApi