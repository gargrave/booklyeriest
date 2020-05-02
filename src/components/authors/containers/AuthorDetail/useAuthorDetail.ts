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

  const handleAuthorSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(updateAuthor(payload))
      } catch (err) {
        //
      } finally {
        navigate && navigate('/authors')
      }
    },
    [dispatch, navigate],
  )

  React.useEffect(() => {
    if (!author) {
      // TODO: instead of redirecting, trigger a full re-fetch of authors
      navigate && navigate('/authors')
    }
  }, [author, navigate])

  return {
    author,
    handleAuthorSubmit,
    loading,
    styles,
  }
}