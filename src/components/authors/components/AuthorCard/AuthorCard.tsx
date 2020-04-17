import * as React from 'react'

import { Author } from 'components/authors/store'
import { Card } from 'packages/velcrostrip'

import getStyles from './AuthorCard.styles'

export type AuthorCardProps = {
  author: Author
}

export const AuthorCard: React.FC<AuthorCardProps> = React.memo(
  ({ author }) => {
    const styles = React.useMemo(() => getStyles(), [])

    return (
      <Card className={styles.authorCard} hoverable={true}>
        <div className={styles.authorName}>
          {author.firstName} {author.lastName}
        </div>
      </Card>
    )
  },
)
