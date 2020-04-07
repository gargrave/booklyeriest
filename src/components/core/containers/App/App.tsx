import React from 'react'
import { Provider } from 'react-redux'
import { Link, Router } from '@reach/router'
import { css } from 'emotion'

import { store } from 'store'
import { AuthorsList } from 'components/authors/containers'
import { BooksList } from 'components/books/containers'

const tempStyles = css`
  text-align: center;

  nav {
    margin: 1rem;
  }
`

export const App: React.FC = () => {
  return (
    <div className={tempStyles}>
      <nav>
        <Link to="authors">Authors</Link> | <Link to="books">Books</Link>
      </nav>

      <Provider store={store}>
        <Router>
          <AuthorsList path="authors" />
          <BooksList path="books" />
        </Router>
      </Provider>
    </div>
  )
}
