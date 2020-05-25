import {
  CreateAuthorMutationVariables,
  DeleteAuthorMutationVariables,
  ListAuthorsQueryVariables,
  UpdateAuthorMutationVariables,
} from 'API'
import { GqlQueryWrapper } from 'store/api'

export const listAuthors = (
  variables: ListAuthorsQueryVariables = {},
): GqlQueryWrapper<ListAuthorsQueryVariables> => ({
  name: 'listAuthors',
  query: /* GraphQL */ `
    query ListAuthors(
      $filter: ModelAuthorFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          firstName
          lastName
          books {
            items {
              id
            }
          }
        }
        nextToken
      }
    }
  `,
  variables,
})

export const createAuthor = (
  variables: CreateAuthorMutationVariables,
): GqlQueryWrapper<CreateAuthorMutationVariables> => ({
  name: 'createAuthor',
  query: /* GraphQL */ `
    mutation CreateAuthor(
      $input: CreateAuthorInput!
      $condition: ModelAuthorConditionInput
    ) {
      createAuthor(input: $input, condition: $condition) {
        id
        firstName
        lastName
      }
    }
  `,
  variables,
})

export const updateAuthor = (
  variables: UpdateAuthorMutationVariables,
): GqlQueryWrapper<UpdateAuthorMutationVariables> => ({
  name: 'updateAuthor',
  query: /* GraphQL */ `
    mutation UpdateAuthor(
      $input: UpdateAuthorInput!
      $condition: ModelAuthorConditionInput
    ) {
      updateAuthor(input: $input, condition: $condition) {
        id
        firstName
        lastName
      }
    }
  `,
  variables,
})

export const deleteAuthor = (
  variables: DeleteAuthorMutationVariables,
): GqlQueryWrapper<DeleteAuthorMutationVariables> => ({
  name: 'deleteAuthor',
  query: /* GraphQL */ `
    mutation DeleteAuthor(
      $input: DeleteAuthorInput!
      $condition: ModelAuthorConditionInput
    ) {
      deleteAuthor(input: $input, condition: $condition) {
        id
        firstName
        lastName
        books {
          items {
            id
          }
        }
      }
    }
  `,
  variables,
})
