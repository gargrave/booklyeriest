import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'store'
import { AuthorAttrs } from './authors.types'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () =>
    await api.jsonApiRequest(
      {
        url: `authors`,
        query: {
          fields: {
            author: ['firstName', 'lastName'],
          },
        },
      },
      {
        // TODO: use the 'application/vnd.api+json' header once the API supports it
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      },
    ),
)

export const createAuthor = createAsyncThunk(
  'authors/createAuthor',
  async (payload: AuthorAttrs) => {
    const attributes = {
      firstName: payload.firstName,
      lastName: payload.lastName,
    }

    return await api.jsonApiRequest<AuthorAttrs>(
      {
        url: `authors`,
        body: {
          attributes,
          type: 'author',
        },
      },
      {
        // TODO: use the 'application/vnd.api+json' header once the API supports it
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )
  },
)
