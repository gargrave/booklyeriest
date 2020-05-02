import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAuthorById, updateAuthor } from 'components/authors/store'
import { AuthorDetailProps } from './AuthorDetail'

import getStyles from './AuthorDetail.styles'

export const useAuthorDetail = ({ authorId, navigate }: AuthorDetailProps) => {
  const dispatch = useDispatch()
  const author = useSelector((state) => getAuthorById(state, authorId))
  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/authors')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(
          updateAuthor({
            id: authorId,
            ...payload,
          }),
        )
      } catch (err) {
        //
        throw err
      } finally {
        goToListPage()
      }
    },
    [authorId, dispatch, goToListPage],
  )

  const handleCancel = React.useCallback(() => {
    goToListPage()
  }, [goToListPage])

  React.useEffect(() => {
    if (!author) {
      // TODO: instead of redirecting, trigger a full re-fetch of authors
      goToListPage()
    }
  }, [author, goToListPage])

  return {
    author,
    handleCancel,
    handleSubmit,
    loading,
    styles,
  }
}
