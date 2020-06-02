import { createSlice } from '@reduxjs/toolkit'

import { AuthState, User } from './auth.types'

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    data: {} as User, // eslint-disable-line
    requestPending: false,
  },

  reducers: {},

  extraReducers: {
    /**************************************************
     * Login
     * NOTE: not using the toolkit helpers on this
     * action because they expose user password to the dev tools
     **************************************************/
    ['auth/login/pending']: (state: AuthState) => {
      state.requestPending = true
    },

    ['auth/login/fulfilled']: (state: AuthState) => {
      state.requestPending = false
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['auth/login/rejected']: (state: AuthState, action: any) => {
      // eslint-disable-next-line no-console
      console.error(action)
      state.requestPending = false
    },
  },
})

export const authReducer = authSlice.reducer
