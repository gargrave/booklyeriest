import * as React from 'react'
import { Loader, LoaderShape } from 'packages/velcrostrip'

import { useBootstrapper } from './useBootstrapper'

export const Bootstrapper: React.FC = React.memo(({ children }) => {
  const { isFinished } = useBootstrapper()

  return isFinished ? (
    <>{children}</>
  ) : (
    <Loader overlay={true} shape={LoaderShape.DualRing} size={56} />
  )
})
