import { createAsyncThunk } from '@reduxjs/toolkit'

import { gql } from 'store'
import { Author } from './authors.types'
import * as queries from './authors.queries'

const multiQuery = gql('authors')
const singleQuery = gql('author')

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const query = queries.listAuthors()
    return await multiQuery(query)
  },
)

export const createAuthor = createAsyncThunk(
  'authors/createAuthor',
  async (payload: Author) => {
    const mutation = queries.createAuthor({
      input: {
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
    })
    return await singleQuery(mutation)
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
    return await singleQuery(mutation)
  },
)

export const deleteAuthor = createAsyncThunk(
  'authors/deleteAuthor',
  async (id: string) => {
    const mutation = queries.deleteAuthor({ input: { id } })
    return await singleQuery(mutation)
  },
)
