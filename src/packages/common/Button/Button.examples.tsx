import * as React from 'react'

import { Button } from './Button'

const ButtonExamples: React.FC = React.memo(() => {
  return (
    <Button onClick={() => console.log(`Clicked! ${Date.now()}`)}>
      Click-a-me
    </Button>
  )
})

export default ButtonExamples
