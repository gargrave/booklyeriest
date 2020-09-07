import { useMachine } from '@xstate/react'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Machine } from 'xstate'

import { fetchAuthors as fetchAuthorsRedux } from 'app/authors/store/authors.actions'
import { fetchBooks } from 'app/books/store/books.actions'
import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError, logInfo } from 'utils/logger'
import { useAuthorsApi } from '../../../authors/store/useAuthorsApi'

enum State {
  Initializing = 'Initializing',
  BootstrappingStart = 'BootstrappingStart',
  Bootstrapping = 'Bootstrapping',
  Finished = 'Finished',
}

enum StateMessage {
  AuthSuccess = 'AuthSuccess',
  AuthFailure = 'AuthFailure',
  BootstrappingStart = 'BootstrappingStart',
  BootstrappingSuccess = 'BootstrappingSuccess',
}

const bootstrapperMachine = Machine({
  id: 'bootstrapper',
  initial: State.Initializing,
  states: {
    [State.Initializing]: {
      on: {
        [StateMessage.AuthSuccess]: State.BootstrappingStart,
        [StateMessage.AuthFailure]: State.Finished,
      },
    },
    [State.BootstrappingStart]: {
      on: { [StateMessage.BootstrappingStart]: State.Bootstrapping },
    },
    [State.Bootstrapping]: {
      on: { [StateMessage.BootstrappingSuccess]: State.Finished },
    },
    [State.Finished]: {
      on: {
        [StateMessage.AuthSuccess]: State.BootstrappingStart,
      },
    },
  },
})

export const useBootstrapper = () => {
  const dispatch = useDispatch()
  const [state, sendToMachine] = useMachine(bootstrapperMachine)

  const { authInitialized, isAuthenticated, userId } = useFirebaseAuth({
    waitForInitialization: true,
  })
  const { fetchAuthors } = useAuthorsApi(userId)

  const bootstrapApp = React.useCallback(() => {
    const asyncBootstrapApp = async () => {
      try {
        await fetchAuthors()
        // TODO: remove this call when migration is complete
        await dispatch(fetchAuthorsRedux({ userId }))
        await dispatch(fetchBooks({ userId }))
        logInfo({
          fn: 'useBootstrapper',
          msg: 'Bootstrapping successful',
        })
      } catch (err) {
        logError({ fn: 'bootstrapApp' }, err)
        throw err
      } finally {
        sendToMachine(StateMessage.BootstrappingSuccess)
      }
    }

    logInfo({
      fn: 'useBootstrapper',
      msg: 'Sending all bootstrapping data requests',
    })

    sendToMachine(StateMessage.BootstrappingStart)
    asyncBootstrapApp()
  }, [dispatch, fetchAuthors, sendToMachine, userId])

  React.useEffect(() => {
    if (state.value === State.BootstrappingStart) {
      bootstrapApp()
    }
  }, [bootstrapApp, state])

  // watch updates to auth state
  // when auth is fully initialized, respond to current auth state (is user logged in?)
  React.useEffect(() => {
    if (!authInitialized) return

    if (isAuthenticated) {
      logInfo({
        fn: 'useBootstrapper',
        msg: "Successfully authenticated; commence the bootstrappin'",
      })
      sendToMachine(StateMessage.AuthSuccess)
    } else {
      logInfo({
        fn: 'useBootstrapper',
        msg: 'No authentication; redirecting to login page',
      })
      sendToMachine(StateMessage.AuthFailure)
    }
  }, [authInitialized, dispatch, isAuthenticated, sendToMachine])

  return {
    isFinished: state.value === State.Finished,
  }
}
