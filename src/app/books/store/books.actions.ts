import { createAsyncThunk } from '@reduxjs/toolkit'

import { gql } from 'store'
import { Book } from './books.types'
import * as queries from './books.queries'

const listQuery = gql('books')
const singleQuery = gql('book')

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const query = queries.listBooks()
  return await listQuery(query)
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
    return await singleQuery(mutation)
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
    return await singleQuery(mutation)
  },
)

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id: string) => {
    const mutation = queries.deleteBook({ input: { id } })
    return await singleQuery(mutation)
  },
)
