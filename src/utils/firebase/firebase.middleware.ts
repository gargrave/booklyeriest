/* eslint-disable @typescript-eslint/no-explicit-any */
import produce from 'immer'

import { ThunkAction } from 'store/store.types'
import { ObjectIdMap } from './firestore.utils'

// TODO: find a better home for this, since it is no longer Thunk-specific
export const transformFirebaseData = (
  payload: ObjectIdMap<any> = {},
): ObjectIdMap<any> => {
  return Object.values(payload).reduce((acc, obj) => {
    acc[obj.id] = produce(obj, (draft) => {
      return Object.keys(obj).forEach((key) => {
        if (key.endsWith('Id')) {
          // convert an id into an object with that ID instead
          // e.g. "authorId" becomes "author: { id: [authorId] }"
          draft[key.slice(0, -2)] = { id: obj[key] }
          draft[key] = undefined
        } else if (key === 'created' || key === 'updated') {
          // convert FB timestamp objects into regular JS Dates
          draft[key] = obj[key].toDate().toISOString()
        }
      })
    })

    return acc
  }, {})
}

export const firebaseMiddleware = (_store) => (next) => (
  action: ThunkAction<any>,
) => {
  const { type } = action

  if (type.endsWith('/fulfilled')) {
    const updatedAction = produce(action, (draft) => {
      draft.payload = transformFirebaseData(action.payload)
    })
    return next(updatedAction)
  }

  return next(action)
}
