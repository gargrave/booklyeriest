import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from 'components/books/store'
import { createAuthor, fetchAuthors } from './authors.actions'

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
      state.data = action.payload.author || {}
      state.requestPending = false
    },

    [createAuthor.pending.toString()]: (state, _action) => {
      state.requestPending = true
    },

    [createAuthor.fulfilled.toString()]: (state, action) => {
      const author = action.payload.author[0]
      state.data[author.id] = author
      state.requestPending = false
    },

    [createAuthor.rejected.toString()]: (state, _action) => {
      state.requestPending = true
    },

    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.author || {}
    },
  },
})

export const authorsReducer = authorsSlice.reducer
