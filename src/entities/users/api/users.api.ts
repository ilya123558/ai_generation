import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpdateGenderRequest, IUpdateGenderResponse } from '../types/updateGender'
import { IUploadProfileRequest, IUploadProfileResponse } from '../types/uploadProfile'
import { IGenerationsResponse } from '../types/generations'
import { IPageRequest } from '@/entities/general/types/general'
import { IProfilesMetaResponse } from '../types/profilesMeta'

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
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // GET
    generations: builder.query<IGenerationsResponse, IPageRequest>({
      query: (params) => ({
        url: '/generations',
        params
      }),
    }),

    profilesMeta: builder.query<IProfilesMetaResponse, void>({
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

    // POST
    uploadProfile: builder.mutation<IUploadProfileResponse, IUploadProfileRequest>({
      query: (body) => ({
        url: '/uploadProfile',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
  }),
})

export const { 
  useGenerationsQuery,
  useLazyGenerationsQuery,
  useUpdateGenderMutation,
  useUploadProfileMutation,
} = usersApi