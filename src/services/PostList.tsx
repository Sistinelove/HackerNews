import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeedItem } from '../type/FeedItem';
import { API_BASE_URL } from '../config/config';
import { Item } from '../type/Item';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getNewsItems: builder.query<FeedItem[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
        try {
          const newsUrls = [`/news/1.json`, `/news/2.json`, `/news/3.json`, `/news/4.json`];
          const newsResponses = await Promise.all(
            newsUrls.map(async (url) => {
              const response = await baseQuery({ url });
              if (response.error) throw response.error;
              return response.data;
            }),
          );
          const newsItems = newsResponses.flat() as FeedItem[];
          const result = newsItems.slice(0, 100).sort((a, b) => b.time - a.time);
          return { data: result };
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } };
        }
      },
    }),
    getItemsById: builder.query<Item, number>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});

export const { useGetNewsItemsQuery, useGetItemsByIdQuery, useLazyGetItemsByIdQuery } = hackerNewsApi;
