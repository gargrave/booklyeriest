import * as React from 'react'

import getStyles from './InputField.styles'

type InputType = 'text' | 'email' | 'password'

export type InputFieldProps = {
  // disabled?
  id: string
  inputType?: InputType
  label?: string
  // maxLength?
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ref?: React.Ref<HTMLInputElement>
  value: string
}

export const InputField: React.ForwardRefExoticComponent<InputFieldProps> = React.forwardRef(
  (
    { id, inputType = 'text', label, onChange, placeholder, value },
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
          className={styles.input}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          ref={inputElRef}
          type={inputType}
          value={value}
        />
      </div>
    )
  },
)
