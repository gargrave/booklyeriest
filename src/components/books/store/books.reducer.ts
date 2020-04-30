import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from './books.actions'

const booksSlice = createSlice({
  name: 'books',

  initialState: {
    data: {},
    requestPending: false,
  },

  reducers: {},

  extraReducers: {
    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.book || {}
    },
  },
})

export const booksReducer = booksSlice.reducer
