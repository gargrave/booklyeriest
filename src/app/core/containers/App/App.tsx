import styled from '@emotion/styled'
import { Link, Redirect, Router } from '@reach/router'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'store/store' // must be first import to ensure store is initialized

import { AuthorDetail, AuthorsList, CreateAuthor } from 'app/authors/containers'
import { BookDetail, BooksList, CreateBook } from 'app/books/containers'
import { CenteredFlex } from 'styles/components'
import { Bootstrapper } from 'app/core/components'

const St = {
  Main: styled.main`
    margin: auto;
    max-width: 800px;
  `,
  Nav: styled.nav`
    ${CenteredFlex};
  `,
  NavContent: styled.div`
    ${CenteredFlex};
    flex-flow: row wrap;
    max-width: 800px;
  `,
}

export const App: React.FC = () => {
  return (
    <div>
      <St.Nav>
        <St.NavContent>
          <Link to="books">Books</Link> | <Link to="authors">Authors</Link>
        </St.NavContent>
      </St.Nav>

      <St.Main>
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
      </St.Main>
    </div>
  )
}
