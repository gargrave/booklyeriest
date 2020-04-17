import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import { Button, Loader } from '@gargrave/velcrostrip'

import { AuthorCard } from 'components/authors/components'
import {
  fetchAuthors,
  getAuthors,
  getAuthorsRequestPending,
} from 'components/authors/store'
import { useInitialRender } from 'utils'

import getStyles from './AuthorsList.styles'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(
  ({ navigate }) => {
    const { isInitialRender } = useInitialRender()

    const dispatch = useDispatch()
    const authors = useSelector(getAuthors)
    const loading = useSelector(getAuthorsRequestPending) || isInitialRender

    const styles = React.useMemo(() => getStyles(), [])

    const refetchAuthors = React.useCallback(() => {
      dispatch(fetchAuthors())
    }, [dispatch])

    const handleAddAuthorClick = React.useCallback(() => {
      navigate && navigate('/authors/new')
    }, [navigate])

    React.useEffect(() => {
      refetchAuthors()
    }, [refetchAuthors])

    return (
      <>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>My Authors</h2>
          <Button onClick={handleAddAuthorClick}>Add an Author</Button>
        </div>

        {loading ? (
          <Loader size={56} />
        ) : (
          authors.map((author) => (
            <AuthorCard author={author} key={author.id} />
          ))
        )}
      </>
    )
  },
)
