import * as React from 'react'

import { useBootstrapper } from './useBootstrapper'

export const Bootstrapper: React.FC = React.memo(({ children }) => {
  const { loading } = useBootstrapper()

  return loading ? <div>loading</div> : <>{children}</>
})
