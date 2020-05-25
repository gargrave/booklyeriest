import { createAsyncThunk } from '@reduxjs/toolkit'

import { gql } from 'store'
import { Book } from './books.types'
import * as queries from './books.queries'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const query = queries.listBooks()
  return await gql(query)
})

export const createBook = createAsyncThunk(
  'books/createBook',
  async (payload: Book) => {
    const mutation = queries.createBook({
      input: {
        title: payload.title,
        authorID: payload.author.id,
      },
    })
    return await gql(mutation)
  },
)

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async (payload: Book) => {
    const mutation = queries.updateBook({
      input: {
        id: payload.id,
        title: payload.title,
        authorID: payload.author.id,
      },
    })
    return await gql(mutation)
  },
)

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id: string) => {
    const mutation = queries.deleteBook({ input: { id } })
    return await gql(mutation)
  },
)
