/* eslint-disable sort-keys */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from 'store'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  return await api.jsonApiRequest({
    url: `books`,
    fields: {
      author: ['firstName', 'lastName'],
      book: ['title', 'book'],
    },
    include: ['author'],
  })
})

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
