import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from 'components/books/store'
import { fetchAuthors } from './authors.actions'

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
