import { useNavigate } from '@reach/router'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import useMount from 'react-use/esm/useMount'

import { logout } from 'app/auth/store/auth.actions'
import { logError, logInfo } from 'utils/logger'

export const useLogoutPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = React.useState(false)

  useMount(async () => {
    setLoading(true)
    try {
      await dispatch(logout())
      logInfo({ fn: 'logout', msg: 'Successfully logged out' })
      navigate('/auth/login')
    } catch (err) {
      logError({ fn: 'logout' }, err)
      setLoading(false)
    }
  })

  return {
    loading,
  }
}
