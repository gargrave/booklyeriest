import * as React from 'react'
import { Select } from '@gargrave/react-simple-select'

import { authorFullName } from 'components/authors/store'
import { Book } from 'components/books/store'
import { Button, InputField, Loader, StyleTheme } from 'packages/velcrostrip'

import { useBookForm } from './useBookForm'

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
    styles,
  } = useBookForm(props)

  return (
    <form className={styles.bookForm} onSubmit={handleSubmit}>
      <InputField
        disabled={loading}
        id="title"
        label="Title"
        onChange={handleInputChange}
        required={true}
        value={formState.title}
      />

      {/* BUG: this selection is not sticking when using enter/tab, it seems? */}
      <Select
        getOptionKey={(author) => author.id}
        getOptionLabel={authorFullName}
        label="Author"
        onChange={handleAuthorChange}
        options={authors}
        value={formState.author}
      />

      <div className={styles.buttons}>
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
      </div>

      {loading && <Loader overlay={true} size={56} />}
    </form>
  )
})
