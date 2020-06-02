import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorBucket } from 'app/authors/components'
import { Button, Loader } from 'packages/velcrostrip'
import { useAuthorsList } from './useAuthorsList'

export type AuthorsListProps = RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  const {
    authors,
    handleAddAuthorClick,
    handleAuthorClick,
    loading,
    styles,
  } = useAuthorsList()
  const sortedAuthorKeys = Object.keys(authors).sort()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>My Authors</h2>
        <Button disabled={loading} onClick={handleAddAuthorClick}>
          Add an Author
        </Button>
      </div>

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
    </div>
  )
})
