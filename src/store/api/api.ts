import * as R from 'ramda'

import {
  flattenJsonApiObj,
  parseJsonApiBody,
  parseJsonApiQuery,
} from './api.helpers'
import { JsonApiRequest } from './api.types'

const BASE_URL = 'http://localhost:8080/api/v1'

// TODO: set the required header once the API properly supports it
// TODO: redux is showing these requests as "rejected" why?
export async function jsonApiRequest<T>(
  request: JsonApiRequest<T>,
  init?: RequestInit,
) {
  const { body, url } = request

  const parsedQuery = parseJsonApiQuery(request)
  const parsedBody = body && parseJsonApiBody<T>(body)

  const fullUrl = `${BASE_URL}/${url}${parsedQuery}`
  const res = await fetch(fullUrl, {
    ...init,
    body: parsedBody,
  })
  const json = await res.json()
  const data = Array.isArray(json.data) ? json.data : [json.data]
  const { included = [] } = json

  const normalize = R.reduce(flattenJsonApiObj, {})
  const normalizedData = normalize(data)
  const normalizedIncluded = normalize(included)

  return {
    ...normalizedData,
    ...normalizedIncluded,
  }
}

export const request = async (url: string, init?: RequestInit) =>
  fetch(`${BASE_URL}/${url}`, init).then((res) => res.json())

export const api = {
  jsonApiRequest,
  request,
}
