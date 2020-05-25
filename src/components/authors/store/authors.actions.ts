import { createAsyncThunk } from '@reduxjs/toolkit'

import { gql } from 'store'
import { AuthorAttrs, Author } from './authors.types'
import * as queries from './authors.queries'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const query = queries.listAuthors()
    return await gql(query)
  },
)

export const createAuthor = createAsyncThunk(
  'authors/createAuthor',
  async (payload: AuthorAttrs) => {
    const mutation = queries.createAuthor({
      input: {
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
    })
    return await gql(mutation)
  },
)

export const updateAuthor = createAsyncThunk(
  'authors/updateAuthor',
  async (payload: Author) => {
    const mutation = queries.updateAuthor({
      input: {
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
    })
    return await gql(mutation)
  },
)

export const deleteAuthor = createAsyncThunk(
  'authors/deleteAuthor',
  async (id: string) => {
    const mutation = queries.deleteAuthor({ input: { id } })
    return await gql(mutation)
  },
)
