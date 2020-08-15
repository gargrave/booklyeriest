import * as React from 'react'
import { useSelector } from 'react-redux'
import produce from 'immer'
import * as yup from 'yup'
import pick from 'lodash/fp/pick'

import { AuthorSchema } from 'app/authors/components/AuthorForm/useAuthorForm'
import { Author, getAuthors } from 'app/authors/store'
import { Book, bookFormFields } from 'app/books/store'
import { useFormState } from 'utils/hooks'
import { BookFormProps } from './BookForm'

const schema = yup.object().shape({
  author: AuthorSchema.required(),
  sortBy: yup
    .string()
    .notRequired()
    .trim()
    .max(256),
  title: yup
    .string()
    .required()
    .trim()
    .min(1)
    .max(256),
})

type BookFormState = yup.InferType<typeof schema>

const initialState: BookFormState = {
  author: undefined as never,
  sortBy: '',
  title: '',
}

const getInitialState = (book?: Book): BookFormState => {
  return book ? (pick(bookFormFields, book) as Book) : initialState
}

export const useBookForm = ({ book, loading, onSubmit }: BookFormProps) => {
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
    valid,
  }
}
