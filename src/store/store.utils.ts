import { ThunkAction, KeyObjectMap } from './store.types'

export function getValuesFromAction<T>(
  key: string,
): (action: ThunkAction<T>) => KeyObjectMap<T> {
  return (action) => action.payload[key] || {}
}

export function getMetaValueFromAction<T>(key: string) {
  return (action: ThunkAction<unknown>) =>
    (action.payload['meta'] || {})[key] as T | undefined
}

export const getMetaId = getMetaValueFromAction<string>('id')
