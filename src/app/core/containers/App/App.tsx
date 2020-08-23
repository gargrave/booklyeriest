import styled from '@emotion/styled'
import { Link, Redirect, Router } from '@reach/router'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'store/store' // must be first import to ensure store is initialized

import { LoginPage, LogoutPage } from 'app/auth/containers'
import { AuthorDetail, AuthorsList, CreateAuthor } from 'app/authors/containers'
import { BookDetail, BooksList, CreateBook } from 'app/books/containers'
import { CenteredFlex } from 'styles/components'
import { Bootstrapper } from 'app/core/components'
import { useApp } from './useApp'

const St = {
  Link: styled(Link)`
    padding: 4px;
  `,
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
  const { isAuthenticated } = useApp()

  return (
    <div>
      {/* TODO: should pull this navbar into a separate component */}
      {isAuthenticated ? (
        <St.Nav>
          <St.NavContent>
            <St.Link to="books">Books</St.Link>|
            <St.Link to="authors">Authors</St.Link>|
            <St.Link to="auth/logout">Logout</St.Link>
          </St.NavContent>
        </St.Nav>
      ) : (
        <St.Nav>
          <St.NavContent>
            <St.Link to="auth/login">Login</St.Link>
          </St.NavContent>
        </St.Nav>
      )}

      <St.Main>
        <Provider store={store}>
          <Bootstrapper>
            <Router>
              <Redirect from="/" noThrow={true} to="books" />

              <LoginPage path={'auth/login'} />
              <LogoutPage path={'auth/logout'} />

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
