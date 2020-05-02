import { ThunkAction, KeyObjectMap } from './store.types'

export function getValuesFromAction<T>(
  key: string,
): (action: ThunkAction<T>) => KeyObjectMap<T> {
  return (action) => action.payload[key] || {}
}
