import { createSlice } from '@reduxjs/toolkit'

import { logout } from 'app/auth/store/auth.actions'
import {
  createAuthor,
  deleteAuthor,
  fetchAuthors,
  updateAuthor,
} from './authors.actions'
import {
  AuthorsState,
  CreateAuthorAction,
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
    [fetchAuthors.pending.toString()]: (state: AuthorsState) => {
      state.requestPending = true
    },

    [fetchAuthors.fulfilled.toString()]: (
      state: AuthorsState,
      action: ListAuthorsAction,
    ) => {
      state.data = action.payload
      state.requestPending = false
    },

    [fetchAuthors.rejected.toString()]: (
      state: AuthorsState,
      action: ListAuthorsAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Create Author
     **************************************************/
    [createAuthor.pending.toString()]: (state: AuthorsState) => {
      state.requestPending = true
    },

    [createAuthor.fulfilled.toString()]: (
      state: AuthorsState,
      action: CreateAuthorAction,
    ) => {
      const author = Object.values(action.payload)[0]
      state.data[author.id] = author
      state.requestPending = false
    },

    [createAuthor.rejected.toString()]: (
      state: AuthorsState,
      action: CreateAuthorAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Update Author
     **************************************************/
    [updateAuthor.pending.toString()]: (state: AuthorsState) => {
      state.requestPending = true
    },

    [updateAuthor.fulfilled.toString()]: (
      state: AuthorsState,
      action: MutateAuthorAction,
    ) => {
      const author = Object.values(action.payload)[0]
      state.data[author.id] = author
      state.requestPending = false
    },

    [updateAuthor.rejected.toString()]: (
      state: AuthorsState,
      action: MutateAuthorAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Author
     **************************************************/
    [deleteAuthor.pending.toString()]: (state: AuthorsState) => {
      state.requestPending = true
    },

    [deleteAuthor.fulfilled.toString()]: (
      state: AuthorsState,
      action: DeleteAuthorAction,
    ) => {
      const { id } = action.meta.arg.author
      delete state.data[id]
      state.requestPending = false
    },

    [deleteAuthor.rejected.toString()]: (
      state: AuthorsState,
      action: DeleteAuthorAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Logout; simply clear all data
     **************************************************/
    [logout.fulfilled.toString()]: (state: AuthorsState) => {
      state.data = {}
    },
  },
})

export const authorsReducer = authorsSlice.reducer
