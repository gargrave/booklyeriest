import { createSlice } from '@reduxjs/toolkit'

import { deleteAuthor, DeleteAuthorAction } from 'components/authors/store'
import { deleteBook, fetchBooks, updateBook } from './books.actions'
import { MutateBookAction, ListBooksAction } from './books.types'

const booksSlice = createSlice({
  name: 'books',

  initialState: {
    data: {},
    requestPending: false,
  },

  reducers: {},

  extraReducers: {
    /**************************************************
     * Fetch Books
     **************************************************/
    [fetchBooks.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.book || {}
    },

    [fetchBooks.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [fetchBooks.fulfilled.toString()]: (state, action: ListBooksAction) => {
      const books = action.payload
      books.forEach((book) => {
        state.data[book.id] = book
      })
      state.requestPending = false
    },

    [fetchBooks.rejected.toString()]: (state, action: ListBooksAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Update Book
     **************************************************/
    [updateBook.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [updateBook.fulfilled.toString()]: (state, action: MutateBookAction) => {
      const book = action.payload
      state.data[book.id] = book
      state.requestPending = false
    },

    [updateBook.rejected.toString()]: (state, action: MutateBookAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Book
     **************************************************/
    [deleteBook.pending.toString()]: (state) => {
      state.requestPending = true
    },

    [deleteBook.fulfilled.toString()]: (state, action: MutateBookAction) => {
      const { id } = action.payload

      delete state.data[id]
      state.requestPending = false
    },

    [deleteBook.rejected.toString()]: (state, action: MutateBookAction) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Author
     * (Cascade author deletion -> remove books)
     **************************************************/
    [deleteAuthor.fulfilled.toString()]: (
      state,
      action: DeleteAuthorAction,
    ) => {
      const bookIds = (action.payload?.books.items || []).map((book) => book.id)
      bookIds.forEach((id) => {
        delete state.data[id]
      })
      state.requestPending = false
    },
  },
})

export const booksReducer = booksSlice.reducer
