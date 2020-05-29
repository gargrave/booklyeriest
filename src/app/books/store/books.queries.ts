import {
  CreateBookMutationVariables,
  DeleteBookMutationVariables,
  ListBooksQueryVariables,
  UpdateBookMutationVariables,
} from 'API'
import { GqlQueryWrapper } from 'store/api'
import { bookQueryFields } from './books.types'

export const listBooks = (
  variables: ListBooksQueryVariables = {},
): GqlQueryWrapper<ListBooksQueryVariables> => ({
  name: 'listBooks',
  query: /* GraphQL */ `
    query ListBooks(
      $filter: ModelBookFilterInput
      $limit: Int
      $nextToken: String
    ) {
      books: listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          ${bookQueryFields}
          author {
            id
          }
        }
        nextToken
      }
    }
  `,
  variables,
})

export const createBook = (
  variables: CreateBookMutationVariables,
): GqlQueryWrapper<CreateBookMutationVariables> => ({
  name: 'createBook',
  query: /* GraphQL */ `
    mutation CreateBook(
      $input: CreateBookInput!
      $condition: ModelBookConditionInput
    ) {
      book: createBook(input: $input, condition: $condition) {
        id
        ${bookQueryFields}
        author {
          id
        }
      }
    }
  `,
  variables,
})

export const updateBook = (
  variables: UpdateBookMutationVariables,
): GqlQueryWrapper<UpdateBookMutationVariables> => ({
  name: 'updateBook',
  query: /* GraphQL */ `
    mutation UpdateBook(
      $input: UpdateBookInput!
      $condition: ModelBookConditionInput
    ) {
      book: updateBook(input: $input, condition: $condition) {
        id
        title
        ${bookQueryFields}
        author {
          id
        }
      }
    }
  `,
  variables,
})

export const deleteBook = (
  variables: DeleteBookMutationVariables,
): GqlQueryWrapper<DeleteBookMutationVariables> => ({
  name: 'deleteBook',
  query: /* GraphQL */ `
    mutation DeleteBook(
      $input: DeleteBookInput!
      $condition: ModelBookConditionInput
    ) {
      book: deleteBook(input: $input, condition: $condition) {
        id
        title
        ${bookQueryFields}
        author {
          id
        }
      }
    }
  `,
  variables,
})
