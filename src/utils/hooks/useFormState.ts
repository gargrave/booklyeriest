import * as React from 'react'
import { produce } from 'immer'
import * as yup from 'yup'
import * as R from 'ramda'

type UseFormStateProps<T> = {
  initialState: T
  schema: yup.Schema<T>
}

export function useFormState<T>({
  initialState,
  schema,
}: UseFormStateProps<T>) {
  const original = React.useRef<T>(initialState)

  const [valid, setValid] = React.useState(false)
  const [formState, setFormState] = React.useState<T>(initialState)

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

  React.useEffect(() => {
    const asyncValidate = async () => {
      const newStateIsValid = await schema.isValid(formState)
      const newStateHasChanged = !R.equals(formState, original.current)
      setValid(newStateIsValid && newStateHasChanged)
    }
    asyncValidate()
  }, [formState, schema])

  return {
    formState,
    handleInputChange,
    valid,
  }
}
