import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from 'app/authors/components'
import { FormTitle, PageHeaderContainer } from 'styles/components'
import { Button, Card, StyleTheme } from 'packages/velcrostrip'

import { useAuthorDetail } from './useAuthorDetail'

const St = {
  Header: PageHeaderContainer,
  Title: FormTitle,
}

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
  } = useAuthorDetail(props)

  return (
    <Card>
      <St.Header>
        <St.Title>Update an Author</St.Title>
        <Button onClick={handleDelete} type={StyleTheme.Danger}>
          Delete
        </Button>
      </St.Header>

      <AuthorForm
        author={author}
        loading={loading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Card>
  )
})
