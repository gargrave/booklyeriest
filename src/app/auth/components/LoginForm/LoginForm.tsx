import * as React from 'react'

import { Button, InputField, Loader } from 'packages/velcrostrip'
import { FormButtonsContainer, FormContainer } from 'styles/components'
import { useLoginForm } from './useLoginForm'

const St = {
  Buttons: FormButtonsContainer,
  Form: FormContainer,
}

export type LoginFormProps = {
  loading?: boolean
  onSubmit: (payload) => void
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { loading } = props
  const {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
  } = useLoginForm(props)

  return (
    <St.Form onSubmit={handleSubmit}>
      <InputField
        disabled={loading}
        id={'email'}
        inputType={'email'}
        label={'Email'}
        onChange={handleInputChange}
        required={true}
        value={formState.email}
      />

      <InputField
        disabled={loading}
        id={'password'}
        inputType={'password'}
        label={'Password'}
        onChange={handleInputChange}
        required={true}
        value={formState.password}
      />

      <St.Buttons>
        <Button buttonType="submit" disabled={!canSubmit}>
          Login
        </Button>
      </St.Buttons>

      {loading && <Loader overlay={true} size={56} />}
    </St.Form>
  )
}
