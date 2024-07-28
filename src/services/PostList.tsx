import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeedItem } from '../type/FeedItem.ts';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hnpwa.com/' }),
  endpoints: (builder) => ({
    getNewsItems: builder.query<FeedItem[], void>({
      query: () => 'v0/news/1.json',
    }),
  }),
});

export const { useGetNewsItemsQuery } = hackerNewsApi;
