import React from 'react'
import { Provider } from 'react-redux'
import { Link, Redirect, Router } from '@reach/router'

import { store } from 'store/store' // must be first import to ensure store is initialized

import { AuthorDetail, AuthorsList, CreateAuthor } from 'app/authors/containers'
import { BookDetail, BooksList, CreateBook } from 'app/books/containers'
import { Bootstrapper } from 'app/core/components'
import { useApp } from './useApp'

export const App: React.FC = () => {
  const { styles } = useApp()

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link to="books">Books</Link> | <Link to="authors">Authors</Link>
        </div>
      </nav>

      <main className={styles.pageWrapper}>
        <Provider store={store}>
          <Bootstrapper>
            <Router>
              <Redirect from="/" noThrow={true} to="books" />

              <AuthorsList path="authors" />
              <AuthorDetail path="authors/:authorId" />
              <CreateAuthor path="authors/new" />

              <BooksList path="books" />
              <BookDetail path="books/:bookId" />
              <CreateBook path="books/new" />
            </Router>
          </Bootstrapper>
        </Provider>
      </main>
    </div>
  )
}
