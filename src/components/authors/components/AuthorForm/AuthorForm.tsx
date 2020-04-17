import * as React from 'react'
import { Button, Loader } from '@gargrave/velcrostrip'

import { InputField } from 'packages/velcrostrip'

import getStyles from './AuthorForm.styles'

export type AuthorFormProps = {
  loading?: boolean
  onSubmit: (payload) => void
}

export const AuthorForm: React.FC<AuthorFormProps> = React.memo(
  ({ loading, onSubmit }) => {
    const [formState, setFormState] = React.useState({
      firstName: '',
      lastName: '',
    })

    const styles = React.useMemo(() => getStyles(), [])

    const handleInputChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target

        if (id in formState) {
          setFormState({
            ...formState,
            [id]: value,
          })
        }
      },
      [formState],
    )

    const handleSubmit = React.useCallback(
      (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(formState)
      },
      [formState, onSubmit],
    )

    return (
      <form className={styles.authorForm} onSubmit={handleSubmit}>
        <InputField
          disabled={loading}
          id="firstName"
          label="First name"
          onChange={handleInputChange}
          value={formState.firstName}
        />

        <InputField
          disabled={loading}
          id="lastName"
          label="Last name"
          onChange={handleInputChange}
          value={formState.lastName}
        />

        <div>
          <Button buttonType="submit" disabled={loading}>
            Submit
          </Button>
        </div>

        {loading && <Loader overlay={true} size={56} />}
      </form>
    )
  },
)
