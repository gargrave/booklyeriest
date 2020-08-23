import { createAsyncThunk } from '@reduxjs/toolkit'

import { authService } from './auth.service'

type LoginArgs = {
  email: string
  password: string
}

// NOTE: not using the toolkit helpers on this action because they expose user password to the dev tools
export const login = ({ email, password }: LoginArgs) => async (dispatch) => {
  dispatch({ type: 'auth/login/pending' })

  try {
    const result = await authService.login(email, password)
    dispatch({
      type: 'auth/login/fulfilled',
      payload: result,
    })
  } catch (err) {
    dispatch({
      type: 'auth/login/rejected',
      payload: err,
    })
  }
}

export const logout = createAsyncThunk('auth/logout', async () => {
  console.log('[gkh] logout')
  const result = await authService.logout()
  console.log({ ['[gkh]']: '[gkh]', result })
  return result
})
