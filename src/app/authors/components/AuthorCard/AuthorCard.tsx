import * as React from 'react'

import { Author } from 'app/authors/store'
import { CardProps } from 'packages/velcrostrip'
import { ListViewCard, ListViewCardTitle } from 'styles/components'

const St = {
  Card: ListViewCard,
  Title: ListViewCardTitle,
}

export type AuthorCardProps = {
  author: Author
} & CardProps

export const AuthorCard: React.FC<AuthorCardProps> = React.memo(
  ({ author, onClick }) => {
    return (
      <St.Card hoverable={true} onClick={onClick}>
        <St.Title>
          {author.firstName} {author.lastName}
        </St.Title>
      </St.Card>
    )
  },
)
