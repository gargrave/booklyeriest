import { createSelector } from '@reduxjs/toolkit'
import * as R from 'ramda'

import { hydrateAuthor } from '../../authors/store'

type KeyObjectMap<T> = { [id: string]: T }
type Book = {
  relations: {
    author: string
  }
}
type Author = {}

const getBooksData = (state): KeyObjectMap<Book> => state.books.data
const getAuthorsData = (state): KeyObjectMap<Author> => state.authors.data

const hydrateBook = (authors) => (book: Book) => {
  const baseAttrs = ['id', 'type']
  const bookAttrs = ['title']

  const author = hydrateAuthor(authors[book.relations.author])

  return {
    ...R.pick(baseAttrs, book),
    ...R.pick(bookAttrs, book),
    author,
  }
}

export const getBooks = createSelector(
  getBooksData,
  getAuthorsData,
  (books, authors) => {
    const hydrator = hydrateBook(authors)

    return Object.values(books).map(hydrator)
  },
)
