import { createSlice } from '@reduxjs/toolkit'

import { AuthorsAction, deleteAuthor } from 'components/authors/store'
import { getMetaId, getValuesFromAction } from 'store/store.utils'
import { fetchBooks } from './books.actions'
import { BooksAction, ReduxBook } from './books.types'

const getBookMap = getValuesFromAction<ReduxBook>('book')

const getBooksList = (action: BooksAction): ReduxBook[] =>
  Object.values(getBookMap(action)) || []

const getFirstBook = (action: BooksAction): ReduxBook | undefined =>
  getBooksList(action)[0]

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

    /**************************************************
     * Delete Author
     **************************************************/
    [deleteAuthor.fulfilled.toString()]: (state, action: AuthorsAction) => {
      state.requestPending = false

      const authorId = getMetaId(action)
      if (!authorId) return

      // when an author is deleted, we need to remove that author's existing books from our store
      const prevBooks: ReduxBook[] = Object.values(state.data) || []
      const authorBookIds: string[] = prevBooks.reduce((acc, book) => {
        if (book.relations.author === authorId) {
          acc.push(book.id)
        }
        return acc
      }, [] as string[])

      authorBookIds.forEach((id) => {
        delete state.data[id]
      })
    },
  },
})

export const booksReducer = booksSlice.reducer
