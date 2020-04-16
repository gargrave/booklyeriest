import * as React from 'react'

import { Button, InputField, Loader, LoaderShape } from 'packages/velcrostrip'

export type AuthorFormProps = {
  loading?: boolean // TODO: show a loader when loading
  onSubmit: (payload) => void
}

export const AuthorForm: React.FC<AuthorFormProps> = React.memo(
  ({ onSubmit }) => {
    const [formState, setFormState] = React.useState({
      firstName: '',
      lastName: '',
    })

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
      <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <InputField
          id="firstName"
          label="First name"
          onChange={handleInputChange}
          value={formState.firstName}
        />
        <InputField
          id="lastName"
          label="Last name"
          onChange={handleInputChange}
          value={formState.lastName}
        />

        <div>
          <Button buttonType="submit">Submit</Button>
        </div>
        <Loader size={56} />
      </form>
    )
  },
)
