import * as React from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { createBook } from 'components/books/store'
import { BookForm } from 'components/books/components'
import { Card } from 'packages/velcrostrip'
import { logError } from 'utils/logger'

import getStyles from './CreateBook.styles'

export type CreateBookProps = {} & RouteComponentProps

export const CreateBook: React.FC<CreateBookProps> = React.memo(
  ({ navigate }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)

    const styles = React.useMemo(() => getStyles(), [])

    const goToListPage = React.useCallback(() => {
      navigate && navigate('/books')
    }, [navigate])

    const handleSubmit = React.useCallback(
      async (payload) => {
        setLoading(true)
        try {
          await dispatch(createBook(payload))
        } catch (err) {
          logError({ fn: 'createBook' }, err)
        } finally {
          goToListPage()
        }
      },
      [dispatch, goToListPage],
    )

    const handleCancel = React.useCallback(() => {
      goToListPage()
    }, [goToListPage])

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
  },
)
