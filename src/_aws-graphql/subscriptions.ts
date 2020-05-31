/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      firstName
      lastName
      books {
        items {
          id
          title
          sortBy
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      firstName
      lastName
      books {
        items {
          id
          title
          sortBy
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      firstName
      lastName
      books {
        items {
          id
          title
          sortBy
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      title
      sortBy
      authorID
      author {
        id
        firstName
        lastName
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      title
      sortBy
      authorID
      author {
        id
        firstName
        lastName
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      title
      sortBy
      authorID
      author {
        id
        firstName
        lastName
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
