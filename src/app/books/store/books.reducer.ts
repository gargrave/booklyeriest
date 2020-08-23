import { createSlice } from '@reduxjs/toolkit'

import { logout } from 'app/auth/store/auth.actions'
import {
  AuthorsState,
  deleteAuthor,
  DeleteAuthorAction,
} from 'app/authors/store'
import { createBook, deleteBook, fetchBooks, updateBook } from './books.actions'
import {
  BooksState,
  CreateBookAction,
  DeleteBookAction,
  ListBooksAction,
  MutateBookAction,
} from './books.types'

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
    [fetchBooks.pending.toString()]: (state: BooksState) => {
      state.requestPending = true
    },

    [fetchBooks.fulfilled.toString()]: (
      state: BooksState,
      action: ListBooksAction,
    ) => {
      state.data = action.payload || {}
      state.requestPending = false
    },

    [fetchBooks.rejected.toString()]: (
      state: BooksState,
      action: ListBooksAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Create Book
     **************************************************/
    [createBook.pending.toString()]: (state: BooksState) => {
      state.requestPending = true
    },

    [createBook.fulfilled.toString()]: (
      state: BooksState,
      action: CreateBookAction,
    ) => {
      const book = Object.values(action.payload)[0]
      state.data[book.id] = book
      state.requestPending = false
    },

    [createBook.rejected.toString()]: (
      state: BooksState,
      action: CreateBookAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Update Book
     **************************************************/
    [updateBook.pending.toString()]: (state: BooksState) => {
      state.requestPending = true
    },

    [updateBook.fulfilled.toString()]: (
      state: BooksState,
      action: MutateBookAction,
    ) => {
      const book = Object.values(action.payload)[0]
      state.data[book.id] = book
      state.requestPending = false
    },

    [updateBook.rejected.toString()]: (
      state: BooksState,
      action: MutateBookAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Book
     **************************************************/
    [deleteBook.pending.toString()]: (state: BooksState) => {
      state.requestPending = true
    },

    [deleteBook.fulfilled.toString()]: (
      state: BooksState,
      action: DeleteBookAction,
    ) => {
      const { id } = action.meta.arg.book
      delete state.data[id]
      state.requestPending = false
    },

    [deleteBook.rejected.toString()]: (
      state: BooksState,
      action: DeleteBookAction,
    ) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },

    /**************************************************
     * Delete Author
     * (Cascade author deletion -> remove books)
     **************************************************/
    [deleteAuthor.fulfilled.toString()]: (
      state: BooksState,
      action: DeleteAuthorAction,
    ) => {
      const { id: authorId } = action.meta.arg.author
      const bookIds = Object.values(state.data).reduce((acc, book) => {
        if (book.author.id === authorId) {
          acc.push(book.id)
        }
        return acc
      }, [] as string[])

      bookIds.forEach((id) => {
        delete state.data[id]
      })

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

export const booksReducer = booksSlice.reducer
