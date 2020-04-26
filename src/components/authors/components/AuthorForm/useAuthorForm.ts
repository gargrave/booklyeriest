import * as React from 'react'
import { produce } from 'immer'
import * as yup from 'yup'

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

type FormState = yup.InferType<typeof schema>

export const useAuthorForm = ({ loading, onSubmit }: AuthorFormProps) => {
  const styles = React.useMemo(() => getStyles(), [])

  const [valid, setValid] = React.useState(false)
  const [formState, setFormState] = React.useState<FormState>({
    firstName: '',
    lastName: '',
  })

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target

      if (id in formState) {
        setFormState(
          produce(formState, (draft) => {
            draft[id] = value
          }),
        )
      }
    },
    [formState],
  )

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!valid || loading) return
      onSubmit(formState)
    },
    [formState, loading, onSubmit, valid],
  )

  React.useEffect(() => {
    const asyncValidate = async () => {
      const newStateIsValid = await schema.isValid(formState)
      setValid(newStateIsValid)
    }
    asyncValidate()
  }, [formState])

  return {
    canSubmit: valid && !loading,
    formState,
    handleInputChange,
    handleSubmit,
    styles,
    valid,
  }
}
