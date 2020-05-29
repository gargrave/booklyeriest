import {
  CreateAuthorMutationVariables,
  DeleteAuthorMutationVariables,
  ListAuthorsQueryVariables,
  UpdateAuthorMutationVariables,
} from 'API'
import { GqlQueryWrapper } from 'store/api'
import { authorQueryFields } from './authors.types'

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
      authors: listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          ${authorQueryFields}
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
      author: createAuthor(input: $input, condition: $condition) {
        id
        ${authorQueryFields}
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
      author: updateAuthor(input: $input, condition: $condition) {
        id
        ${authorQueryFields}
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
      author: deleteAuthor(input: $input, condition: $condition) {
        id
        ${authorQueryFields}
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
