import * as React from 'react'
import { cx } from 'emotion'

import { Button } from './Button'

import styles from './Button.styles'

const ButtonExamples: React.FC = React.memo(() => {
  return (
    <>
      <Button
        className={cx(styles.button, styles.type1)}
        onClick={() => console.log(`Clicked! ${Date.now()}`)}
      >
        Click-a-me
      </Button>
      <Button
        className={cx(styles.button, styles.type2)}
        onClick={() => console.log(`Clicked! ${Date.now()}`)}
      >
        Click-a-me
      </Button>
    </>
  )
})

export default ButtonExamples
