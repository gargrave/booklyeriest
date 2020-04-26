import * as React from 'react'
// import { Button, Loader } from '@gargrave/velcrostrip'

import { Button, Loader, InputField } from 'packages/velcrostrip'
import { useAuthorForm } from './useAuthorForm'

export type AuthorFormProps = {
  loading?: boolean
  onSubmit: (payload) => void
}

export const AuthorForm: React.FC<AuthorFormProps> = React.memo((props) => {
  const { loading } = props
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
        <Button buttonType="submit" disabled={!canSubmit}>
          Submit
        </Button>
      </div>

      {loading && <Loader overlay={true} size={56} />}
    </form>
  )
})
