import { useMachine } from '@xstate/react'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Machine } from 'xstate'

import { login } from 'app/auth/store/auth.actions'
import { fetchAuthors } from 'app/authors/store/authors.actions'
import { fetchBooks } from 'app/books/store/books.actions'

import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError, logInfo } from 'utils/logger'

const TEMP_EMAIL = process.env.BOOKLYER_FIREBASE_TEMP_EMAIL || ''
const TEMP_PASS = process.env.BOOKLYER_FIREBASE_TEMP_PASS || ''

enum State {
  Initializing = 'Initializing',
  BootstrappingStart = 'BootstrappingStart',
  Bootstrapping = 'Bootstrapping',
  Finished = 'Finished',
}

const bootstrapperMachine = Machine({
  id: 'bootstrapper',
  initial: State.Initializing,
  states: {
    [State.Initializing]: { on: { AUTHENTICATED: State.BootstrappingStart } },
    [State.BootstrappingStart]: { on: { STARTED: State.Bootstrapping } },
    [State.Bootstrapping]: { on: { FINISHED: State.Finished } },
    [State.Finished]: {},
  },
})

export const useBootstrapper = () => {
  const dispatch = useDispatch()
  const [state, sendToMachine] = useMachine(bootstrapperMachine)

  const { authInitialized, isAuthenticated, userId } = useFirebaseAuth({
    waitForInitialization: true,
  })

  const bootstrapApp = React.useCallback(() => {
    const asyncBootstrapApp = async () => {
      try {
        await dispatch(fetchAuthors({ userId }))
        await dispatch(fetchBooks({ userId }))
        logInfo({
          fn: 'useBootstrapper',
          msg: 'Bootstrapping successful',
        })
      } catch (err) {
        logError({ fn: 'bootstrapApp' }, err)
        throw err
      } finally {
        sendToMachine('FINISHED')
      }
    }

    logInfo({
      fn: 'useBootstrapper',
      msg: 'Sending all bootstrapping data requests',
    })

    sendToMachine('STARTED')
    asyncBootstrapApp()
  }, [dispatch, sendToMachine, userId])

  React.useEffect(() => {
    if (state.value === State.BootstrappingStart) {
      bootstrapApp()
    }
  }, [bootstrapApp, state])

  React.useEffect(() => {
    if (!authInitialized) return

    if (isAuthenticated) {
      logInfo({
        fn: 'useBootstrapper',
        msg: "Successfully authenticated; commence the bootstrappin'",
      })
      // dispatch()
      sendToMachine('AUTHENTICATED')
    } else {
      logInfo({
        fn: 'useBootstrapper',
        msg: 'No authentication; redirecting to login page',
      })
      // TODO: change this to use login() from the hook (once it's ready)
      dispatch(login({ email: TEMP_EMAIL, password: TEMP_PASS }))
    }
  }, [authInitialized, dispatch, isAuthenticated, sendToMachine])

  return {
    isFinished: state.value === State.Finished,
  }
}
