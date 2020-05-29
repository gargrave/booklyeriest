import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorCard } from 'app/authors/components'
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
        authors.map((author) => (
          <AuthorCard
            author={author}
            key={author.id}
            onClick={() => handleAuthorClick(author.id)}
          />
        ))
      )}
    </div>
  )
})
