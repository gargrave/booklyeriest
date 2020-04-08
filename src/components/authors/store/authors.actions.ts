import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'store'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () =>
    await api.jsonApiRequest({
      url: `authors`,
      fields: {
        author: ['firstName', 'lastName'],
      },
    }),
)
