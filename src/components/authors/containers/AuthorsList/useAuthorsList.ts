import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from '@reach/router'

import { getAuthors, getAuthorsRequestPending } from 'components/authors/store'

import getStyles from './AuthorsList.styles'

export const useAuthorsList = () => {
  const navigate = useNavigate()

  const authors = useSelector(getAuthors)
  const loading = useSelector(getAuthorsRequestPending)

  const styles = React.useMemo(() => getStyles(), [])

  const handleAuthorClick = React.useCallback(
    (id: string) => {
      navigate && navigate(`/authors/${id}`)
    },
    [navigate],
  )

  const handleAddAuthorClick = React.useCallback(() => {
    navigate && navigate('/authors/new')
  }, [navigate])

  return {
    authors,
    handleAddAuthorClick,
    handleAuthorClick,
    loading,
    styles,
  }
}
