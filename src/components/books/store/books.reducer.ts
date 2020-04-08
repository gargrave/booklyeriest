import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from './books.actions'

const booksSlice = createSlice({
  initialState: {
    data: [] as number[],
  },
  name: 'books',
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.book
    },
  },
})

export const booksReducer = booksSlice.reducer
