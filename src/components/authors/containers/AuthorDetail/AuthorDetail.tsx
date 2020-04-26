import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Card } from '@gargrave/velcrostrip'

import { AuthorForm } from 'components/authors/components'

import { useAuthorDetail } from './useAuthorDetail'

export type AuthorDetailProps = {
  authorId?: string
} & RouteComponentProps

export const AuthorDetail: React.FC<AuthorDetailProps> = React.memo((props) => {
  const { author, handleAuthorSubmit, loading, styles } = useAuthorDetail(props)

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Update an Author</h2>
      </div>

      <Card>
        <AuthorForm
          author={author}
          loading={loading}
          onSubmit={handleAuthorSubmit}
        />
      </Card>
    </>
  )
})
