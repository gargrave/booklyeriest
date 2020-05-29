import * as React from 'react'
import { produce } from 'immer'
import * as yup from 'yup'
import isEqual from 'lodash/fp/isEqual'

type UseFormStateProps<T> = {
  initialState: T
  loading?: boolean
  onSubmit: (payload) => void
  schema: yup.Schema<T>
}

export function useFormState<T>({
  initialState,
  loading,
  onSubmit,
  schema,
}: UseFormStateProps<T>) {
  const original = React.useRef<T>(initialState)

  const [valid, setValid] = React.useState(false)
  const [formState, setFormState] = React.useState<T>(initialState)
  const [canSubmit, setCanSubmit] = React.useState(false)

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

      if (canSubmit) {
        onSubmit(formState)
      }
    },
    [canSubmit, formState, onSubmit],
  )

  React.useEffect(() => {
    const asyncValidate = async () => {
      const newStateIsValid = await schema.isValid(formState)
      const newStateHasChanged = !isEqual(formState, original.current)
      setValid(newStateIsValid && newStateHasChanged)
    }
    asyncValidate()
  }, [formState, schema])

  React.useEffect(() => {
    setCanSubmit(valid && !loading)
  }, [loading, valid])

  return {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
    setFormState,
    valid,
  }
}
