import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { authReducer as auth } from 'app/auth/store/auth.reducer'
import { authorsReducer as authors } from 'app/authors/store/authors.reducer'
import { booksReducer as books } from 'app/books/store/books.reducer'

import { firebaseMiddleware } from 'utils/firebase/firebase.middleware'

export const store = configureStore({
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    firebaseMiddleware,
  ],
  reducer: {
    auth,
    authors,
    books,
  },
})
