import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from 'app/authors/components'
import { Card } from 'packages/velcrostrip'
import { useCreateAuthor } from './useCreateAuthor'

export type CreateAuthorProps = RouteComponentProps

export const CreateAuthor: React.FC<CreateAuthorProps> = React.memo(() => {
  const { handleCancel, handleSubmit, loading, styles } = useCreateAuthor()

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Add an Author</h2>
      </div>

      <Card>
        <AuthorForm
          loading={loading}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  )
})
