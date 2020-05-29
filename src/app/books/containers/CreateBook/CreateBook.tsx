import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookForm } from 'app/books/components'
import { Card } from 'packages/velcrostrip'
import { useCreateBook } from './useCreateBook'

export type CreateBookProps = RouteComponentProps

export const CreateBook: React.FC<CreateBookProps> = React.memo(() => {
  const { handleCancel, handleSubmit, loading, styles } = useCreateBook()

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Add an Book</h2>
      </div>

      <Card>
        <BookForm
          loading={loading}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  )
})
