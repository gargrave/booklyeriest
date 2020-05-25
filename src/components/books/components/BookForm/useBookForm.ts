import * as React from 'react'
import { useSelector } from 'react-redux'
import produce from 'immer'
import * as yup from 'yup'
import * as R from 'ramda'

import { AuthorSchema } from 'components/authors/components/AuthorForm/useAuthorForm'
import { Author, getAuthors } from 'components/authors/store'
import { Book, bookAttrNames } from 'components/books/store'
import { useFormState } from 'utils/hooks'
import { BookFormProps } from './BookForm'

import getStyles from './BookForm.styles'

const schema = yup.object().shape({
  author: AuthorSchema.required(),
  title: yup
    .string()
    .trim()
    .required()
    .min(1)
    .max(256),
})

type BookFormState = yup.InferType<typeof schema>

const initialState: BookFormState = {
  author: undefined as never,
  title: '',
}

const getInitialState = (book?: Book): BookFormState => {
  return book ? R.pick(bookAttrNames, book) : initialState
}

export const useBookForm = ({ book, loading, onSubmit }: BookFormProps) => {
  const styles = React.useMemo(() => getStyles(), [])
  const authors = useSelector(getAuthors)

  const {
    canSubmit,
    formState,
    handleInputChange,
    handleSubmit,
    setFormState,
    valid,
  } = useFormState<BookFormState>({
    initialState: getInitialState(book),
    loading,
    onSubmit,
    schema,
  })

  const handleAuthorChange = React.useCallback(
    (author: Author) => {
      setFormState(
        produce(formState, (draft) => {
          draft.author = author
        }),
      )
    },
    [formState, setFormState],
  )

  return {
    authors,
    canSubmit,
    formState,
    handleAuthorChange,
    handleInputChange,
    handleSubmit,
    styles,
    valid,
  }
}
