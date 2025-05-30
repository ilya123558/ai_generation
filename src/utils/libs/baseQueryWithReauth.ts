import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITokens } from '@/utils/types/tokens';

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  const data: ITokens = await response.json();
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data.accessToken;
};

export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result.error?.status === 401) {
    const newAccessToken = await refreshAccessToken();

    result = await fetchBaseQuery({
      baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${newAccessToken}`);
        return headers;
      },
    })(args, api, extraOptions);
  }

  return result;
};