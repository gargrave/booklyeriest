/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as R from 'ramda'

import { genericAttrNames } from 'store'
import { authorAttrNames, Author } from './authors.types'

export const hydrateAuthor = (author): Author => {
  return {
    ...R.pick(genericAttrNames, author),
    ...R.pick(authorAttrNames, author),
  } as Author
}
