import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from '@reach/router'

import {
  getBooksGroupedByAuthor,
  getBooksRequestPending,
} from 'app/books/store'

export const useBooksList = () => {
  const navigate = useNavigate()

  const books = useSelector(getBooksGroupedByAuthor)
  const loading = useSelector(getBooksRequestPending)

  const handleBookClick = React.useCallback(
    (id: string) => {
      navigate(`/books/${id}`)
    },
    [navigate],
  )

  const handleAddBookClick = React.useCallback(() => {
    navigate(`/books/new`)
  }, [navigate])

  return {
    books,
    handleAddBookClick,
    handleBookClick,
    loading,
  }
}
