import { Author } from './authors.types'

export const authorFullName = (author: Author): string =>
  `${author.firstName} ${author.lastName}`
