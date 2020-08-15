import * as React from 'react'

import { Author } from 'app/authors/store'
import { ListViewBucketContainer, ListViewBucketKey } from 'styles/components'
import { AuthorCard } from '../AuthorCard'

const St = {
  Bucket: ListViewBucketContainer,
  Key: ListViewBucketKey,
}

export type AuthorBucketProps = {
  authors: Author[]
  bucketKey: string
  onAuthorClick: (authorId: string) => void
}

export const AuthorBucket: React.FC<AuthorBucketProps> = React.memo((props) => {
  const { authors, bucketKey, onAuthorClick } = props

  return (
    <St.Bucket>
      <St.Key>{bucketKey}</St.Key>
      {authors.map((author) => (
        <AuthorCard
          author={author}
          key={author.id}
          onClick={() => onAuthorClick(author.id)}
        />
      ))}
    </St.Bucket>
  )
})
