import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'store'

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () =>
    await api.jsonApiRequest({
      url: `books`,
      fields: {
        author: ['firstName', 'lastName'],
        book: ['title', 'author'],
      },
      include: ['author'],
    }),
)
