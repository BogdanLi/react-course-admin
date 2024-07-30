import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IExtension } from '../types/extensions';

const baseUrl = 'http://localhost:3030';

export const extensionsApi = createApi({
  reducerPath: 'extensionsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Extensions'],
  endpoints: (builder) => ({
    getAllExtensions: builder.query<IExtension[], void>({
      query: () => `extensions/admin`,
      providesTags: ['Extensions'],
    }),
    deleteExtension: builder.mutation<void, number>({
      query: (id) => ({ url: `extensions/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Extensions'],
    }),
    editExtension: builder.mutation<
      IExtension,
      { id: string; body: Partial<IExtension> }
    >({
      query: ({ id, body }) => ({
        url: `extension/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});
