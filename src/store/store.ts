import { configureStore } from '@reduxjs/toolkit'

import { authorsReducer as authors } from '../components/authors/store'
import { booksReducer as books } from '../components/books/store'

export const store = configureStore({
  reducer: {
    authors,
    books,
  },
})
