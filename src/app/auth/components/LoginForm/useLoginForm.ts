import * as yup from 'yup'

import { useFormState } from 'utils/hooks'
import { LoginFormProps } from './LoginForm'

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .trim(),
  password: yup
    .string()
    .required()
    .trim(),
})

type LoginFormState = yup.InferType<typeof schema>

const initialState: LoginFormState = {
  email: '',
  password: '',
}

export const useLoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
  } = useFormState<LoginFormState>({
    initialState,
    onSubmit,
    schema,
  })

  return {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
  }
}
