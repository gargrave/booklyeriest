import * as React from 'react'

import { Author } from 'components/authors/store'
import { Button, InputField, Loader, StyleTheme } from 'packages/velcrostrip'
import { useAuthorForm } from './useAuthorForm'

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
    styles,
  } = useAuthorForm(props)

  return (
    <form className={styles.authorForm} onSubmit={handleSubmit}>
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

      <div className={styles.buttons}>
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
      </div>

      {loading && <Loader overlay={true} size={56} />}
    </form>
  )
})
