import * as React from 'react'
import * as yup from 'yup'

import { useFormState } from 'utils/hooks'
import { AuthorFormProps } from './AuthorForm'

import getStyles from './AuthorForm.styles'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required()
    .min(1)
    .max(128),
  lastName: yup
    .string()
    .trim()
    .required()
    .min(1)
    .max(128),
})

type AuthorFormState = yup.InferType<typeof schema>

const initialState: AuthorFormState = {
  firstName: '',
  lastName: '',
}

export const useAuthorForm = ({ loading, onSubmit }: AuthorFormProps) => {
  const styles = React.useMemo(() => getStyles(), [])

  const { formState, handleInputChange, valid } = useFormState<AuthorFormState>(
    {
      initialState,
      schema,
    },
  )

  const [canSubmit, setCanSubmit] = React.useState(false)

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (canSubmit) {
        onSubmit(formState)
      }
    },
    [canSubmit, formState, onSubmit],
  )

  React.useEffect(() => {
    setCanSubmit(valid && !loading)
  }, [loading, valid])

  return {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
    styles,
  }
}
