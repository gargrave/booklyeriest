import * as React from 'react'

import getStyles from './AuthorBucket.styles'

export const useAuthorBucket = () => {
  const styles = React.useMemo(getStyles, [])

  return {
    styles,
  }
}
