/* eslint-disable sort-keys */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from 'store'
import { fetchBooks } from 'components/books/store'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    return await api.jsonApiRequest({
      url: `authors`,
      fields: {
        author: ['firstName', 'lastName'],
      },
    })
  },
)

const authorsSlice = createSlice({
  initialState: {
    data: [] as number[],
  },
  name: 'authors',
  reducers: {},
  extraReducers: {
    [fetchAuthors.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.author
    },
    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.author
    },
  },
})

export const authorsReducer = authorsSlice.reducer
