import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { AuthorForm } from 'app/authors/components'
import { Card } from 'packages/velcrostrip'
import { FormTitle } from 'styles/components'
import { useCreateAuthor } from './useCreateAuthor'

const St = {
  Title: FormTitle,
}

export type CreateAuthorProps = RouteComponentProps

export const CreateAuthor: React.FC<CreateAuthorProps> = React.memo(() => {
  const { handleCancel, handleSubmit, loading } = useCreateAuthor()

  return (
    <Card>
      <St.Title>Add an Author</St.Title>
      <AuthorForm
        loading={loading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Card>
  )
})
