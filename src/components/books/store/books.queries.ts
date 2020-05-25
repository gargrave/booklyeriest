import {
  CreateBookMutationVariables,
  DeleteBookMutationVariables,
  ListBooksQueryVariables,
  UpdateBookMutationVariables,
} from 'API'
import { GqlQueryWrapper } from 'store/api'

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
      listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          title
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
      createBook(input: $input, condition: $condition) {
        id
        title
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
      updateBook(input: $input, condition: $condition) {
        id
        title
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
      deleteBook(input: $input, condition: $condition) {
        id
        title
        author {
          id
        }
      }
    }
  `,
  variables,
})
