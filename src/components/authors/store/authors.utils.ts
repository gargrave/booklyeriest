import * as R from 'ramda'

export const hydrateAuthor = (author) => {
  const baseAttrs = ['id', 'type']
  const bookAttrs = ['firstName', 'lastName']

  return {
    ...R.pick(baseAttrs, author),
    ...R.pick(bookAttrs, author),
  }
}
