import * as React from 'react'

import { StyleTheme } from '../styles'

import getStyles from './styles'

export enum LoaderShape {
  DualRing = 'dualRing',
  Ellipsis = 'ellipsis',
}

const childrenToTypeMap = {
  [LoaderShape.DualRing]: 0,
  [LoaderShape.Ellipsis]: 4,
}

export type LoaderProps = {
  innerSize?: number
  shape?: LoaderShape
  size?: number
  /**
   * The speed of the animation in ms; if none is provided, each animation will
   * choose its own default.
   */
  speed?: number
  type?: StyleTheme
}

export const Loader: React.FC<LoaderProps> = React.memo(
  ({
    innerSize,
    shape = LoaderShape.DualRing,
    size = 40,
    speed,
    type = StyleTheme.Primary,
  }) => {
    const styles = React.useMemo(
      () => getStyles({ innerSize, shape, size, speed, type }),
      [innerSize, shape, size, speed, type],
    )

    /**
     * Maps an array of empty values at the length required by the specified
     * LoaderShape. These will be used to render 'n' number of empty <div>s
     * so that the CSS has the correct number of targets for its magic.
     */
    const childMapper = React.useMemo(
      () => Array.from(Array(childrenToTypeMap[shape])),
      [shape],
    )

    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          {childMapper.map((_, idx) => (
            <div key={idx} />
          ))}
        </div>
      </div>
    )
  },
)
