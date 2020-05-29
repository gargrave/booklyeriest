import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookForm } from 'app/books/components'
import { Button, Card, StyleTheme } from 'packages/velcrostrip'

import { useBookDetail } from './useBookDetail'

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
    styles,
  } = useBookDetail(props)

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Update a Book</h2>
        <Button onClick={handleDelete} type={StyleTheme.Danger}>
          Delete
        </Button>
      </div>

      <Card>
        <BookForm
          book={book}
          loading={loading}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  )
})
