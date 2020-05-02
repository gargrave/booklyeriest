import { createSlice } from '@reduxjs/toolkit'

import { fetchBooks } from 'components/books/store'
import { getValuesFromAction } from 'store/store.utils'
import { createAuthor, fetchAuthors, updateAuthor } from './authors.actions'
import { AuthorsAction, ReduxAuthor } from './authors.types'

const getAuthorMap = getValuesFromAction<ReduxAuthor>('author')

const getAuthorList = (action: AuthorsAction): ReduxAuthor[] =>
  Object.values(getAuthorMap(action)) || []

const getFirstAuthor = (action: AuthorsAction): ReduxAuthor | undefined =>
  getAuthorList(action)[0]

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

    [fetchAuthors.fulfilled.toString()]: (state, action: AuthorsAction) => {
      state.data = getAuthorMap(action)
      state.requestPending = false
    },

    /**************************************************
     * Fetch Books (with included Authors)
     **************************************************/
    [fetchBooks.fulfilled.toString()]: (state, action: AuthorsAction) => {
      state.data = getAuthorMap(action)
      state.requestPending = false
    },

    /**************************************************
     * Create Author
     **************************************************/
    [createAuthor.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [createAuthor.fulfilled.toString()]: (state, action: AuthorsAction) => {
      state.requestPending = false

      const author = getFirstAuthor(action)
      if (!author) return

      state.data[author.id] = author
    },

    [createAuthor.rejected.toString()]: (state) => {
      state.requestPending = false
    },

    /**************************************************
     * Update Author
     **************************************************/
    [updateAuthor.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [updateAuthor.fulfilled.toString()]: (state, action: AuthorsAction) => {
      state.requestPending = false

      const author = getFirstAuthor(action)
      if (!author) return

      state.data[author.id] = author
    },

    [updateAuthor.rejected.toString()]: (state) => {
      state.requestPending = false
    },
  },
})

export const authorsReducer = authorsSlice.reducer
