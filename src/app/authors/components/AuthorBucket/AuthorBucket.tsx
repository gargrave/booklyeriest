import * as React from 'react'

import { Author } from 'app/authors/store'
import { AuthorCard } from '../AuthorCard'
import { useAuthorBucket } from './useAuthorBucket'

export type AuthorBucketProps = {
  authors: Author[]
  bucketKey: string
  onAuthorClick: (authorId: string) => void
}

export const AuthorBucket: React.FC<AuthorBucketProps> = React.memo((props) => {
  const { authors, bucketKey, onAuthorClick } = props
  const { styles } = useAuthorBucket()

  return (
    <div className={styles.authorBucket}>
      <div className={styles.bucketKey}>{bucketKey}</div>
      {authors.map((author) => (
        <AuthorCard
          author={author}
          key={author.id}
          onClick={() => onAuthorClick(author.id)}
        />
      ))}
    </div>
  )
})
