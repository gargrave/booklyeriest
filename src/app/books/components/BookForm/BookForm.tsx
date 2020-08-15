import { Select } from '@gargrave/react-simple-select'
import * as React from 'react'

import { authorFullName } from 'app/authors/store'
import { Book } from 'app/books/store'
import { Button, InputField, Loader, StyleTheme } from 'packages/velcrostrip'
import {
  FormButtonsContainer,
  FormContainer,
  FormInputWrapper,
} from 'styles/components'
import { useBookForm } from './useBookForm'

const St = {
  Buttons: FormButtonsContainer,
  Form: FormContainer,
  InputWrapper: FormInputWrapper,
}

export type BookFormProps = {
  book?: Book
  loading?: boolean
  onCancel: () => void
  onSubmit: (payload) => void
}

export const BookForm: React.FC<BookFormProps> = React.memo((props) => {
  const { loading, onCancel } = props
  const {
    authors,
    canSubmit,
    formState,
    handleAuthorChange,
    handleInputChange,
    handleSubmit,
  } = useBookForm(props)

  return (
    <St.Form onSubmit={handleSubmit}>
      <InputField
        disabled={loading}
        id="title"
        label="Title"
        onChange={handleInputChange}
        required={true}
        value={formState.title}
      />

      <St.InputWrapper>
        {/* BUG: this selection is not sticking when using enter/tab, it seems? */}
        <Select
          getOptionKey={(author) => author.id}
          getOptionLabel={authorFullName}
          label="Author"
          onChange={handleAuthorChange}
          options={authors}
          value={formState.author}
        />
      </St.InputWrapper>

      <InputField
        disabled={loading}
        id="sortBy"
        label="Sort by"
        onChange={handleInputChange}
        placeholder={formState.title}
        value={formState.sortBy || ''}
      />

      <St.Buttons>
        <Button
          disabled={loading}
          onClick={onCancel}
          type={StyleTheme.Secondary}
        >
          Cancel
        </Button>

        <Button buttonType="submit" disabled={!canSubmit}>
          Submit
        </Button>
      </St.Buttons>

      {loading && <Loader overlay={true} size={56} />}
    </St.Form>
  )
})
