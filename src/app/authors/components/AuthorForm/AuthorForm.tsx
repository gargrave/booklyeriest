import * as React from 'react'

import { Author } from 'app/authors/store'
import { Button, InputField, Loader, StyleTheme } from 'packages/velcrostrip'
import { FormButtonsContainer, FormContainer } from 'styles/components'
import { useAuthorForm } from './useAuthorForm'

const St = {
  Buttons: FormButtonsContainer,
  Form: FormContainer,
}

export type AuthorFormProps = {
  author?: Author
  loading?: boolean
  onCancel: () => void
  onSubmit: (payload) => void
}

export const AuthorForm: React.FC<AuthorFormProps> = React.memo((props) => {
  const { loading, onCancel } = props
  const {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
  } = useAuthorForm(props)

  return (
    <St.Form onSubmit={handleSubmit}>
      <InputField
        disabled={loading}
        id="firstName"
        label="First name"
        onChange={handleInputChange}
        required={true}
        value={formState.firstName}
      />

      <InputField
        disabled={loading}
        id="lastName"
        label="Last name"
        onChange={handleInputChange}
        required={true}
        value={formState.lastName}
      />

      <St.Buttons>
        <Button
          disabled={loading}
          onClick={onCancel}
          type={StyleTheme.Secondary}
        >
          Cancel
        </Button>

        <Button buttonType="submit" disabled={!canSubmit}>
          Submit
        </Button>
      </St.Buttons>

      {loading && <Loader overlay={true} size={56} />}
    </St.Form>
  )
})
