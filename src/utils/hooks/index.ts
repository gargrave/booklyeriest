import * as React from 'react'

export const useInitialRender = () => {
  const isInitialRender = React.useRef(true)

  React.useEffect(() => {
    isInitialRender.current = false
  })

  return { isInitialRender: isInitialRender.current }
}
