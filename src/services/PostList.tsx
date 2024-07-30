import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeedItem } from '../type/FeedItem.ts';
import { API_BASE_URL } from '../config/config.ts';
import { Item } from '../type/Item.ts';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}` }),
  endpoints: (builder) => ({
    getNewsItems: builder.query<FeedItem[], number>({
      query: () => `news/1.json`,
    }),
    getItemsById: builder.query<Item, number>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});

export const { useGetNewsItemsQuery, useGetItemsByIdQuery } = hackerNewsApi;
