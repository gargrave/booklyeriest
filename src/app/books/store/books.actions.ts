import { createAsyncThunk } from '@reduxjs/toolkit'

import { booksService } from './books.service'
import { Book } from './books.types'

const TEMP_USER = process.env.BOOKLYER_FIREBASE_TEMP_USER || ''

type AuthOptions = {
  userId: string
}

type BookActionOptions = AuthOptions & {
  book: Book
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async ({ userId }: AuthOptions) => {
    return await booksService.fetchBooksByOwner(userId || TEMP_USER)
  },
)

export const createBook = createAsyncThunk(
  'books/createBook',
  async ({ book, userId }: BookActionOptions) => {
    return await booksService.createBook(userId || TEMP_USER, book)
  },
)

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ book, userId }: BookActionOptions) => {
    return await booksService.updateBook(userId || TEMP_USER, book)
  },
)

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async ({ book, userId }: BookActionOptions) => {
    return await booksService.deleteBook(userId || TEMP_USER, book)
  },
)
