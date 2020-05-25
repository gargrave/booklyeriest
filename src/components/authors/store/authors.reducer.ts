import { createSlice } from '@reduxjs/toolkit'

import {
  createAuthor,
  deleteAuthor,
  fetchAuthors,
  updateAuthor,
} from './authors.actions'
import {
  DeleteAuthorAction,
  ListAuthorsAction,
  MutateAuthorAction,
} from './authors.types'

const authorsSlice = createSlice({
  name: 'authors',

  initialState: {
    data: {},
    requestPending: false,
  },

  reducers: {},

  extraReducers: {
    /**************************************************
     * Fetch Authors
     **************************************************/
    [fetchAuthors.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [fetchAuthors.fulfilled.toString()]: (state, action: ListAuthorsAction) => {
      const authors = action.payload
      authors.forEach((author) => {
        state.data[author.id] = author
      })
      state.requestPending = false
    },

    [fetchAuthors.rejected.toString()]: (state, action: ListAuthorsAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Create Author
     **************************************************/
    [createAuthor.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [createAuthor.fulfilled.toString()]: (
      state,
      action: MutateAuthorAction,
    ) => {
      const author = action.payload
      state.data[author.id] = author
      state.requestPending = false
    },

    [createAuthor.rejected.toString()]: (state, action: MutateAuthorAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Update Author
     **************************************************/
    [updateAuthor.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [updateAuthor.fulfilled.toString()]: (
      state,
      action: MutateAuthorAction,
    ) => {
      const author = action.payload
      state.data[author.id] = author
      state.requestPending = false
    },

    [updateAuthor.rejected.toString()]: (state, action: MutateAuthorAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Author
     **************************************************/
    [deleteAuthor.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [deleteAuthor.fulfilled.toString()]: (
      state,
      action: DeleteAuthorAction,
    ) => {
      const { id } = action.payload

      delete state.data[id]
      state.requestPending = false
    },

    [deleteAuthor.rejected.toString()]: (state, action: DeleteAuthorAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },
  },
})

export const authorsReducer = authorsSlice.reducer
