import * as React from 'react'
import { useNavigate } from '@reach/router'
import { useRecoilValue } from 'recoil'

import {
  getAuthorsGroupedByLastInitial,
  getSetAuthorsLoading,
} from 'app/authors/store/authors.recoil'

export const useAuthorsList = () => {
  const navigate = useNavigate()

  const loading = useRecoilValue(getSetAuthorsLoading)
  const authors = useRecoilValue(getAuthorsGroupedByLastInitial)

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
