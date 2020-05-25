import React from 'react'
import { Provider } from 'react-redux'
import { Link, Router } from '@reach/router'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { store } from 'store'
import {
  AuthorDetail,
  AuthorsList,
  CreateAuthor,
} from 'components/authors/containers'
import { BookDetail, BooksList, CreateBook } from 'components/books/containers'
import { Bootstrapper } from 'components/core/components'
import { useApp } from './useApp'

import '@gargrave/react-simple-select/dist/react-simple-select.css'

export const UnwrappedApp: React.FC = () => {
  const { styles } = useApp()

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link to="authors">Authors</Link> | <Link to="books">Books</Link>
        </div>
      </nav>

      <main className={styles.pageWrapper}>
        <Provider store={store}>
          <Bootstrapper>
            <Router>
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

export const App = withAuthenticator(UnwrappedApp)
