import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { AuthorCard } from 'components/authors/components'
import {
  fetchAuthors,
  getAuthors,
  getAuthorsRequestPending,
} from 'components/authors/store'
import { Loader } from 'packages/velcrostrip'
import { useInitialRender } from 'utils'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  const { isInitialRender } = useInitialRender()

  const dispatch = useDispatch()
  const authors = useSelector(getAuthors)
  const loading = useSelector(getAuthorsRequestPending) || isInitialRender

  const refetchAuthors = React.useCallback(() => {
    dispatch(fetchAuthors())
  }, [dispatch])

  React.useEffect(() => {
    refetchAuthors()
  }, [refetchAuthors])

  return (
    <>
      <div>Hello, AuthorsList!</div>

      {loading ? (
        <Loader size={56} />
      ) : (
        authors.map((author) => <AuthorCard author={author} key={author.id} />)
      )}
    </>
  )
})
