/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAuthorInput = {
  id?: string | null
  firstName: string
  lastName: string
}

export type ModelAuthorConditionInput = {
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  and?: Array<ModelAuthorConditionInput | null> | null
  or?: Array<ModelAuthorConditionInput | null> | null
  not?: ModelAuthorConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type UpdateAuthorInput = {
  id: string
  firstName?: string | null
  lastName?: string | null
}

export type DeleteAuthorInput = {
  id?: string | null
}

export type CreateBookInput = {
  id?: string | null
  title: string
  authorID: string
}

export type ModelBookConditionInput = {
  title?: ModelStringInput | null
  authorID?: ModelIDInput | null
  and?: Array<ModelBookConditionInput | null> | null
  or?: Array<ModelBookConditionInput | null> | null
  not?: ModelBookConditionInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type UpdateBookInput = {
  id: string
  title?: string | null
  authorID?: string | null
}

export type DeleteBookInput = {
  id?: string | null
}

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  and?: Array<ModelAuthorFilterInput | null> | null
  or?: Array<ModelAuthorFilterInput | null> | null
  not?: ModelAuthorFilterInput | null
}

export type ModelBookFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  authorID?: ModelIDInput | null
  and?: Array<ModelBookFilterInput | null> | null
  or?: Array<ModelBookFilterInput | null> | null
  not?: ModelBookFilterInput | null
}

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput
  condition?: ModelAuthorConditionInput | null
}

export type CreateAuthorMutation = {
  createAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput
  condition?: ModelAuthorConditionInput | null
}

export type UpdateAuthorMutation = {
  updateAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput
  condition?: ModelAuthorConditionInput | null
}

export type DeleteAuthorMutation = {
  deleteAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateBookMutationVariables = {
  input: CreateBookInput
  condition?: ModelBookConditionInput | null
}

export type CreateBookMutation = {
  createBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateBookMutationVariables = {
  input: UpdateBookInput
  condition?: ModelBookConditionInput | null
}

export type UpdateBookMutation = {
  updateBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteBookMutationVariables = {
  input: DeleteBookInput
  condition?: ModelBookConditionInput | null
}

export type DeleteBookMutation = {
  deleteBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetAuthorQueryVariables = {
  id: string
}

export type GetAuthorQuery = {
  getAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListAuthorsQuery = {
  listAuthors: {
    __typename: 'ModelAuthorConnection'
    items: Array<{
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetBookQueryVariables = {
  id: string
}

export type GetBookQuery = {
  getBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListBooksQuery = {
  listBooks: {
    __typename: 'ModelBookConnection'
    items: Array<{
      __typename: 'Book'
      id: string
      title: string
      authorID: string
      author: {
        __typename: 'Author'
        id: string
        firstName: string
        lastName: string
        createdAt: string
        updatedAt: string
      } | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken: string | null
  } | null
}

export type OnCreateAuthorSubscription = {
  onCreateAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor: {
    __typename: 'Author'
    id: string
    firstName: string
    lastName: string
    books: {
      __typename: 'ModelBookConnection'
      items: Array<{
        __typename: 'Book'
        id: string
        title: string
        authorID: string
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateBookSubscription = {
  onCreateBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateBookSubscription = {
  onUpdateBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteBookSubscription = {
  onDeleteBook: {
    __typename: 'Book'
    id: string
    title: string
    authorID: string
    author: {
      __typename: 'Author'
      id: string
      firstName: string
      lastName: string
      books: {
        __typename: 'ModelBookConnection'
        nextToken: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    createdAt: string
    updatedAt: string
  } | null
}
