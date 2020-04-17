import * as React from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { AuthorForm } from '../../components'

import getStyles from './CreateAuthor.styles'
import { createAuthor } from 'components/authors/store'
import { Card } from 'packages/velcrostrip'

export type CreateAuthorProps = {} & RouteComponentProps

export const CreateAuthor: React.FC<CreateAuthorProps> = React.memo(
  ({ navigate }) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = React.useState(false)

    const styles = React.useMemo(() => getStyles(), [])

    const handleAuthorSubmit = React.useCallback(
      async (payload) => {
        setLoading(true)
        try {
          await dispatch(createAuthor(payload))
        } catch (err) {
          //
        } finally {
          navigate && navigate('/authors')
        }
      },
      [dispatch, navigate],
    )

    return (
      <>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Add an Author</h2>
        </div>

        <Card>
          <AuthorForm loading={loading} onSubmit={handleAuthorSubmit} />
        </Card>
      </>
    )
  },
)
