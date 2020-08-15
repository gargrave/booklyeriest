import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from '@reach/router'

import {
  getAuthorsGroupedByLastInitial,
  getAuthorsRequestPending,
} from 'app/authors/store'

export const useAuthorsList = () => {
  const navigate = useNavigate()

  const authors = useSelector(getAuthorsGroupedByLastInitial)
  const loading = useSelector(getAuthorsRequestPending)

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
  }
}
