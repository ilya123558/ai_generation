import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpdateGenderRequest, IUpdateGenderResponse } from '../types/updateGender'
import { IUploadProfileRequest, IUploadProfileResponse } from '../types/uploadProfile'
import { IGenerationsResponse } from '../types/generations'
import { IMetaResponse, IPageRequest } from '@/entities/general/types/general'
import { IProfilesMetaResponse } from '../types/profilesMeta'
import { IProfilesResponse } from '../types/profiles'
import { TResolution } from '@/utils/types/resolution'
import { IUploadResolutionRequest, IUploadResolutionResponse } from '../types/updateResolution'
import { ITokens } from '@/utils/types/tokens'
import { baseQueryWithReauth } from '@/utils/libs/baseQueryWithReauth'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Users', 'Generations'],
  endpoints: (builder) => ({
    // GET
    getGenerations: builder.query<IGenerationsResponse, IPageRequest>({
      query: (params) => ({
        url: '/users/generations',
        params
      }),
      providesTags: ['Users']
    }),

    getProfiles: builder.query<IProfilesResponse, void>({
      query: () => ({
        url: '/users/profiles',
      }),
    }),

    getProfilesMeta: builder.query<IProfilesMetaResponse, void>({
      query: () => ({
        url: '/users/profiles/meta',
      }),
    }),

    // PUT
    updateGender: builder.mutation<IUpdateGenderResponse, IUpdateGenderRequest>({
      query: (body) => ({
        url: '/users/updateGender',
        method: 'PUT',
        body
      }),
    }),

    updateResolution: builder.mutation<IUploadResolutionResponse, IUploadResolutionRequest>({
      query: (body) => ({
        url: '/users/updateResolution',
        method: 'PUT',
        body
      }),
    }),

    // POST
    uploadProfile: builder.mutation<IUploadProfileResponse, FormData>({ 
      query: (body) => ({
        url: '/users/uploadProfile',
        method: 'POST',
        body,
      }),
    }),

    refreshToken: builder.mutation<ITokens, void>({ 
      query: () => {
        const refreshToken = localStorage.getItem("refreshToken")
        return {
          url: '/users/refresh',
          method: 'POST',
          body: { refreshToken },
        }
      },
    }),

    // DELETE
    deleteGeneration: builder.mutation<IMetaResponse, number>({ 
      query: (generation_id) => ({
        url: `/users/generations/${generation_id}`,
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
  useRefreshTokenMutation
} = usersApi