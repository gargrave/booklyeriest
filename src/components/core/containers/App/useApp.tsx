import * as React from 'react'

import getStyles from './App.styles'

export const useApp = () => {
  const styles = React.useMemo(() => getStyles(), [])

  return {
    styles,
  }
}
