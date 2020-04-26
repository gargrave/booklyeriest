import React from 'react'
import { Provider } from 'react-redux'
import { Link, Router } from '@reach/router'

import { store } from 'store'
import {
  AuthorDetail,
  AuthorsList,
  CreateAuthor,
} from 'components/authors/containers'
import { BooksList } from 'components/books/containers'

import getStyles from './App.styles'

export const App: React.FC = () => {
  const styles = React.useMemo(() => getStyles(), [])

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link to="authors">Authors</Link> | <Link to="books">Books</Link>
        </div>
      </nav>

      <main className={styles.pageWrapper}>
        <Provider store={store}>
          <Router>
            <AuthorsList path="authors" />
            <AuthorDetail path="authors/:authorId" />
            <CreateAuthor path="authors/new" />
            <BooksList path="books" />
          </Router>
        </Provider>
      </main>
    </div>
  )
}
