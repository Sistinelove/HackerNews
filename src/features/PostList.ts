import { createSlice } from '@reduxjs/toolkit';
import { FeedItem } from '../type/FeedItem.ts';

const initialState: FeedItem[] = [];

export const postItem = createSlice({
  name: 'PostItem',
  initialState,
  reducers: {
    addPostItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPostItem } = postItem.actions;

export default postItem.reducer;
