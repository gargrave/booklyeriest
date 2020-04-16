import { css } from 'emotion'

import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

import dualRing from './dualRing.styles'
import ellipsis from './ellipsis.styles'
import singleRing from './singleRing.styles'

const shapes: { [key: string]: LoaderBuilder } = {
  dualRing,
  ellipsis,
  singleRing,
}

const container = (props: LoaderStylesProps) => css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const wrapper = (props: LoaderStylesProps) => css`
  display: inline-block;
  height: ${props.size}px;
  width: ${props.size}px;
`

const backdrop = css`
  /* TODO: use polished here */
  background: rgba(255, 255, 255, 0.25);
  height: 100%;
  position: absolute;
  width: 100%;
`

export default (props: LoaderStylesProps) => {
  const builder = shapes[props.shape]

  return {
    backdrop,
    container: container(props),
    loader: builder.loader(props),
    wrapper: wrapper(props),
  }
}
