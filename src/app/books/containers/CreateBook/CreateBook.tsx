import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookForm } from 'app/books/components'
import { Card } from 'packages/velcrostrip'
import { FormTitle } from 'styles/components'
import { useCreateBook } from './useCreateBook'

const St = {
  Title: FormTitle,
}

export type CreateBookProps = RouteComponentProps

export const CreateBook: React.FC<CreateBookProps> = React.memo(() => {
  const { handleCancel, handleSubmit, loading } = useCreateBook()

  return (
    <Card>
      <St.Title>Add a Book</St.Title>
      <BookForm
        loading={loading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Card>
  )
})
