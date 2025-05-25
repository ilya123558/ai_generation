import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpdateGenderRequest, IUpdateGenderResponse } from '../types/updateGender'
import { IUploadProfileRequest, IUploadProfileResponse } from '../types/uploadProfile'
import { IGenerationsResponse } from '../types/generations'
import { IMetaResponse, IPageRequest } from '@/entities/general/types/general'
import { IProfilesMetaResponse } from '../types/profilesMeta'
import { IProfilesResponse } from '../types/profiles'
import { TResolution } from '@/utils/types/resolution'
import { IUploadResolutionRequest, IUploadResolutionResponse } from '../types/updateResolution'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Users', 'Generations'],
  endpoints: (builder) => ({
    // GET
    getGenerations: builder.query<IGenerationsResponse, IPageRequest>({
      query: (params) => ({
        url: '/generations',
        params
      }),
      providesTags: ['Users']
    }),

    getProfiles: builder.query<IProfilesResponse, void>({
      query: () => ({
        url: '/profiles',
      }),
    }),

    getProfilesMeta: builder.query<IProfilesMetaResponse, void>({
      query: () => ({
        url: '/profiles/meta',
      }),
    }),

    // PUT
    updateGender: builder.mutation<IUpdateGenderResponse, IUpdateGenderRequest>({
      query: (body) => ({
        url: '/updateGender',
        method: 'PUT',
        body
      }),
    }),

    updateResolution: builder.mutation<IUploadResolutionResponse, IUploadResolutionRequest>({
      query: (body) => ({
        url: '/updateResolution',
        method: 'PUT',
        body
      }),
    }),

    // POST
    uploadProfile: builder.mutation<IUploadProfileResponse, FormData>({ 
      query: (body) => ({
        url: '/uploadProfile',
        method: 'POST',
        body,
      }),
    }),

    // DELETE
    deleteGeneration: builder.mutation<IMetaResponse, number>({ 
      query: (generation_id) => ({
        url: `/generations/${generation_id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    }),
  }),
})

export const {
  useGetGenerationsQuery,
  useLazyGetGenerationsQuery,
  useGetProfilesQuery,
  useLazyGetProfilesQuery, 
  useGetProfilesMetaQuery,
  useLazyGetProfilesMetaQuery,
  useUpdateGenderMutation,
  useUploadProfileMutation,
  useDeleteGenerationMutation,
  useUpdateResolutionMutation,
} = usersApi