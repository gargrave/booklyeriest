import * as React from 'react'

import getStyles from './InputField.styles'

type InputType = 'text' | 'email' | 'password'

export type InputFieldProps = {
  disabled?: boolean
  id: string
  inputType?: InputType
  label?: string
  maxLength?: number
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ref?: React.Ref<HTMLInputElement>
  required?: boolean
  value: string
}

export const InputField: React.ForwardRefExoticComponent<InputFieldProps> = React.forwardRef(
  (
    {
      disabled,
      id,
      inputType = 'text',
      label,
      maxLength = 255,
      onChange,
      placeholder,
      required = false,
      value,
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    // If a forward-ref is passed in, use that for our input ref; otherwise, just make a new one
    const inputElRef = ref ?? React.useRef<HTMLInputElement>(null)

    const styles = React.useMemo(() => getStyles(), [])

    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}

        <input
          autoComplete="false"
          className={styles.input}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          ref={inputElRef}
          required={required}
          type={inputType}
          value={value}
        />
      </div>
    )
  },
)
