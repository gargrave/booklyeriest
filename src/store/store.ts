import { configureStore } from '@reduxjs/toolkit'

import { authorsReducer as authors } from 'app/authors/store'
import { booksReducer as books } from 'app/books/store'

export const store = configureStore({
  reducer: {
    authors,
    books,
  },
})
