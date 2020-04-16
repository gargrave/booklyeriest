import * as React from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from '../../components'

import getStyles from './CreateAuthor.styles'
import { createAuthor } from 'components/authors/store'

export type CreateAuthorProps = {} & RouteComponentProps

export const CreateAuthor: React.FC<CreateAuthorProps> = React.memo(() => {
  const dispatch = useDispatch()

  const styles = React.useMemo(() => getStyles(), [])

  const handleAuthorSubmit = React.useCallback(
    async (payload) => {
      await dispatch(createAuthor(payload))
    },
    [dispatch],
  )

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Add an Author</h2>
      </div>

      <AuthorForm onSubmit={handleAuthorSubmit} />
    </>
  )
})
