import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

export type BooksListProps = {} & RouteComponentProps

export const BooksList: React.FC<BooksListProps> = React.memo(() => {
  return <div>Hello, BooksList!</div>
})
