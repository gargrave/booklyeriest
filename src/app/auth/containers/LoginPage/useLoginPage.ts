import { useNavigate } from '@reach/router'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import { login } from 'app/auth/store/auth.actions'
import { logError } from 'utils/logger'

export const useLoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = React.useState(false)

  const handleSubmit = React.useCallback(
    async ({ email, password }) => {
      setLoading(true)
      try {
        await dispatch(login({ email, password }))
        navigate('/authors')
      } catch (err) {
        logError({ fn: 'login' }, err)
        setLoading(false)
      }
    },
    [dispatch, navigate],
  )

  return {
    handleSubmit,
    loading,
  }
}
