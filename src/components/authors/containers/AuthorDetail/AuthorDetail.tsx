import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from 'components/authors/components'
import { Card } from 'packages/velcrostrip'

import { useAuthorDetail } from './useAuthorDetail'

export type AuthorDetailProps = {
  authorId?: string
} & RouteComponentProps

export const AuthorDetail: React.FC<AuthorDetailProps> = React.memo((props) => {
  const {
    author,
    handleCancel,
    handleSubmit,
    loading,
    styles,
  } = useAuthorDetail(props)

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Update an Author</h2>
      </div>

      <Card>
        <AuthorForm
          author={author}
          loading={loading}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  )
})
