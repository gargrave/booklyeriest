import { parseJsonApiQuery } from './api.helpers'
import { JsonApiRequest } from './api.types'

describe('API Helpers', () => {
  describe('parseJsonApiQuery', () => {
    let request: JsonApiRequest

    beforeEach(() => {
      request = {
        url: 'testUrl',
        query: {
          fields: {
            post: ['title', 'body'],
            profile: ['name', 'avatar'],
            user: ['name', 'age'],
          },
          include: ['post', 'profile'],
        },
      }
    })

    it('builds a query string with all types included', () => {
      const query = parseJsonApiQuery(request)

      expect(query).toEqual(
        '?include=post,profile&fields[post]=title,body&fields[profile]=name,avatar&fields[user]=name,age',
      )
    })

    it('builds a query string with just "fields"', () => {
      delete request.query?.include
      const query = parseJsonApiQuery(request)

      expect(query).toEqual(
        '?fields[post]=title,body&fields[profile]=name,avatar&fields[user]=name,age',
      )
    })

    it('builds a query string with just "include"', () => {
      delete request.query?.fields
      const query = parseJsonApiQuery(request)

      expect(query).toEqual('?include=post,profile')
    })

    it('returns an empty string if no query params are specified', () => {
      delete request.query?.fields
      delete request.query?.include
      const query = parseJsonApiQuery(request)

      expect(query).toEqual('')
    })
  })
})
