import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorBucket } from 'app/authors/components'
import { useAuthenticatedRoute } from 'app/auth/utils/hooks/useAuthenticatedRoute'
import { Button, Loader } from 'packages/velcrostrip'
import { ListView, PageHeaderContainer, PageTitle } from 'styles/components'
import { useAuthorsList } from './useAuthorsList'

const St = {
  Container: ListView,
  Header: PageHeaderContainer,
  Title: PageTitle,
}

export type AuthorsListProps = RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  const {
    authors,
    handleAddAuthorClick,
    handleAuthorClick,
    loading,
  } = useAuthorsList()
  const sortedAuthorKeys = Object.keys(authors).sort()
  const hasAuthors = sortedAuthorKeys?.length > 0

  useAuthenticatedRoute()

  return hasAuthors ? (
    <St.Container>
      <St.Header>
        <St.Title>My Authors</St.Title>
        <Button disabled={loading} onClick={handleAddAuthorClick}>
          Add an Author
        </Button>
      </St.Header>

      {loading ? (
        <Loader overlay={true} size={56} />
      ) : (
        sortedAuthorKeys.map((authorKey) => (
          <AuthorBucket
            authors={authors[authorKey]}
            bucketKey={authorKey}
            key={authorKey}
            onAuthorClick={handleAuthorClick}
          />
        ))
      )}
    </St.Container>
  ) : null
})
