import * as React from 'react'
import * as yup from 'yup'
import pick from 'lodash/fp/pick'

import { Author, authorFormFields } from 'app/authors/store'
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
export const AuthorSchema = schema

type AuthorFormState = yup.InferType<typeof schema>

const initialState: AuthorFormState = {
  firstName: '',
  lastName: '',
}

const getInitialState = (author?: Author): AuthorFormState => {
  return author ? (pick(authorFormFields, author) as Author) : initialState
}

export const useAuthorForm = ({
  author,
  loading,
  onSubmit,
}: AuthorFormProps) => {
  const styles = React.useMemo(() => getStyles(), [])

  const {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
  } = useFormState<AuthorFormState>({
    initialState: getInitialState(author),
    loading,
    onSubmit,
    schema,
  })

  return {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
    styles,
  }
}
