import { API, graphqlOperation } from 'aws-amplify'

import { parseGqlPayload } from './api.helpers'
import { GqlQueryWrapper } from './api.types'

export async function gql<T = {}>({
  name,
  query,
  variables,
}: GqlQueryWrapper<T>) {
  const result = await API.graphql(graphqlOperation(query, variables))
  return parseGqlPayload(name)(result)
}
