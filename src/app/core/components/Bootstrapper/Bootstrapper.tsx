import * as React from 'react'
import { Loader, LoaderShape } from 'packages/velcrostrip'

import { useBootstrapper } from './useBootstrapper'

export const Bootstrapper: React.FC = React.memo(({ children }) => {
  const { loading } = useBootstrapper()

  return loading ? (
    <Loader overlay={true} shape={LoaderShape.DualRing} size={56} />
  ) : (
    <>{children}</>
  )
})
