import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render } from '@testing-library/react'

import { Button, ButtonProps } from './Button'

let defaultProps: ButtonProps

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    defaultProps = {
      onClick: jest.fn(),
    }
  })

  afterEach(cleanup)

  describe('Basic Rendering', () => {
    it('renders correctly with default props', () => {
      const { onClick } = defaultProps
      const { container } = render(<Button {...defaultProps} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toBeInTheDocument()
      expect(btn).not.toBeDisabled()

      // no block styling
      expect(btn).not.toHaveStyle('display: block')
      expect(btn).not.toHaveStyle('width: 100%')
      // no outline styling
      expect(btn).not.toHaveStyle('background-color: transparent')

      // fires callback when clicked
      expect(onClick).toHaveBeenCalledTimes(0)
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Conditional rendering', () => {
    it('renders a disabled button when prop is true', () => {
      const { onClick } = defaultProps
      const { container } = render(<Button {...defaultProps} disabled={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toBeInTheDocument()
      expect(btn).toBeDisabled()

      // disabled button cannot be clicked!
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('applies "block" styling when "block" prop is true', () => {
      const { container } = render(<Button {...defaultProps} block={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toHaveStyle('display: block')
      expect(btn).toHaveStyle('width: 100%')
    })

    it('applies "outline" styling when "outline" prop is true', () => {
      const { container } = render(<Button {...defaultProps} outline={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toHaveStyle('background-color: transparent')
    })
  })
})
