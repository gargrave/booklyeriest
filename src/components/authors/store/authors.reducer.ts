import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from 'components/books/store'
import { fetchAuthors } from './authors.actions'

const authorsSlice = createSlice({
  name: 'authors',

  initialState: {
    data: {},
    requestPending: false,
  },

  reducers: {},

  extraReducers: {
    [fetchAuthors.pending.toString()]: (state, _action) => {
      state.requestPending = true
    },

    [fetchAuthors.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.author
      state.requestPending = false
    },

    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.author
    },
  },
})

export const authorsReducer = authorsSlice.reducer
