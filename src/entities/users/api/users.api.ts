import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/users`,
    // credentials: 'include', // если нужно передавать куки
    // prepareHeaders: headers => {
    //   const token = localStorage.getItem('accessToken')
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  tagTypes: ['Users'],
  endpoints: build => ({
    getUser: build.query<any, any>({
      query: () => ({
        url: `/`,
      }),
      providesTags: ['Users'],
    }),
    postUser: build.mutation<any, any>({
      query: body => ({
        url: `/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery, usePostUserMutation } = usersApi
