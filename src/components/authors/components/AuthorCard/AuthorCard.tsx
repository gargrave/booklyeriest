import * as React from 'react'
import { Card, CardProps } from '@gargrave/velcrostrip'

import { Author } from 'components/authors/store'

import getStyles from './AuthorCard.styles'

export type AuthorCardProps = {
  author: Author
} & CardProps

export const AuthorCard: React.FC<AuthorCardProps> = React.memo(
  ({ author, onClick }) => {
    const styles = React.useMemo(() => getStyles(), [])

    return (
      <Card className={styles.authorCard} hoverable={true} onClick={onClick}>
        <div className={styles.authorName}>
          {author.firstName} {author.lastName}
        </div>
      </Card>
    )
  },
)
