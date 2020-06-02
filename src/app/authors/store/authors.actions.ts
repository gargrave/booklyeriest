import { createAsyncThunk } from '@reduxjs/toolkit'

import { authorsService } from './authors.service'
import { Author } from './authors.types'

const TEMP_USER = process.env.BOOKLYER_FIREBASE_TEMP_USER || ''

type AuthOptions = {
  userId: string
}

type AuthorActionOptions = AuthOptions & {
  author: Author
}

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async ({ userId }: AuthOptions) => {
    return await authorsService.fetchAuthorsByOwner(userId || TEMP_USER)
  },
)

export const createAuthor = createAsyncThunk(
  'authors/createAuthor',
  async ({ author, userId }: AuthorActionOptions) => {
    return await authorsService.createAuthor(userId || TEMP_USER, author)
  },
)

export const updateAuthor = createAsyncThunk(
  'authors/updateAuthor',
  async ({ author, userId }: AuthorActionOptions) => {
    return await authorsService.updateAuthor(userId || TEMP_USER, author)
  },
)

export const deleteAuthor = createAsyncThunk(
  'authors/deleteAuthor',
  async ({ author, userId }: AuthorActionOptions) => {
    return await authorsService.deleteAuthor(userId || TEMP_USER, author)
  },
)
