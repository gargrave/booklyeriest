import { API, graphqlOperation } from 'aws-amplify'

import { parseGqlPayload } from './api.helpers'
import { GqlQueryWrapper } from './api.types'

export function gql<T = {}>(payloadName: string) {
  return async ({ name, query, variables }: GqlQueryWrapper<T>) => {
    const result = await API.graphql(graphqlOperation(query, variables))
    return parseGqlPayload(payloadName)(result)
  }
}
