import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookForm } from 'app/books/components'
import { Button, Card, StyleTheme } from 'packages/velcrostrip'
import { FormTitle, PageHeaderContainer } from 'styles/components'
import { useBookDetail } from './useBookDetail'

const St = {
  Header: PageHeaderContainer,
  Title: FormTitle,
}

export type BookDetailProps = {
  bookId?: string
} & RouteComponentProps

export const BookDetail: React.FC<BookDetailProps> = React.memo((props) => {
  const {
    book,
    handleCancel,
    handleDelete,
    handleSubmit,
    loading,
  } = useBookDetail(props)

  return (
    <Card>
      <St.Header>
        <St.Title>Update a Book</St.Title>
        <Button onClick={handleDelete} type={StyleTheme.Danger}>
          Delete
        </Button>
      </St.Header>

      <BookForm
        book={book}
        loading={loading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Card>
  )
})
