import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from 'app/authors/components'
import { Button, Card, StyleTheme } from 'packages/velcrostrip'

import { useAuthorDetail } from './useAuthorDetail'

export type AuthorDetailProps = {
  authorId?: string
} & RouteComponentProps

export const AuthorDetail: React.FC<AuthorDetailProps> = React.memo((props) => {
  const {
    author,
    handleCancel,
    handleDelete,
    handleSubmit,
    loading,
    styles,
  } = useAuthorDetail(props)

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Update an Author</h2>
        <Button onClick={handleDelete} type={StyleTheme.Danger}>
          Delete
        </Button>
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
