import styled from '@emotion/styled'
import * as React from 'react'

import { Book } from 'app/books/store'
import { CardProps } from 'packages/velcrostrip'
import {
  ListViewCard,
  ListViewCardText,
  ListViewCardTitle,
} from 'styles/components'
import { useBookCard } from './useBookCard'

const St = {
  Card: ListViewCard,
  CardText: ListViewCardText,
  SortByText: styled(ListViewCardText)`
    font-size: 0.9rem;
  `,
  Title: ListViewCardTitle,
}

export type BookCardProps = {
  book: Book
  showAuthor?: boolean
} & CardProps

export const BookCard: React.FC<BookCardProps> = React.memo((props) => {
  const { book, onClick, showAuthor = false } = props
  const { sortBy } = book
  const { authorName } = useBookCard(props)

  return (
    <St.Card hoverable={true} onClick={onClick}>
      <St.Title>{book.title}</St.Title>
      {sortBy && <St.SortByText>Sorted by: {sortBy}</St.SortByText>}
      {showAuthor && <St.CardText>{authorName}</St.CardText>}
    </St.Card>
  )
})
