import * as R from 'ramda'

import { JsonApiObject, JsonApiRequest, JsonApiRequestBody } from './api.types'

/**
 * Parses the query data portion of a JSON API request, and converts it into a string
 * appropriate for sending to the API. This includes handling:
 * - "fields" params
 * - "include" params
 */
export const parseJsonApiQuery = (request: JsonApiRequest): string => {
  const { fields = {}, include = [] } = request.query || {}
  const joinQ = R.join('&')
  const joinP = R.join(',')

  const fieldsToQueryString = (acc, [key, value]): string[] => {
    acc.push(`fields[${key}]=${joinP(value)}`)
    return acc
  }

  const makeFieldsQuery = R.pipe(
    Object.entries,
    R.reduce(fieldsToQueryString, []),
    joinQ,
  )

  const includesToQueryStr = R.pipe(joinP, R.concat('include='))
  const makeIncludesQuery = R.ifElse(
    R.isEmpty,
    R.always(''),
    includesToQueryStr,
  )

  const includesQuery = makeIncludesQuery(include)
  const fieldsQuery = makeFieldsQuery(fields)
  const queries = [includesQuery, fieldsQuery].filter((q) => !!q)

  return queries.length ? `?${joinQ(queries)}` : ''
}

/**
 * Parses the body data for a JSON API request. This ultimately results in
 * a "stringified" JSON object.
 */
export function parseJsonApiBody<T>(body: JsonApiRequestBody<T>): string {
  return JSON.stringify({
    data: body,
  })
}

export const flattenRelations = (value: JsonApiObject) => {
  const { relationships } = value
  return (
    relationships &&
    Object.values(relationships).reduce((acc, rel) => {
      acc[rel.data.type] = rel.data.id
      return acc
    }, {})
  )
}

export const flattenJsonApiObj = (acc, value: JsonApiObject) => {
  const bucket = acc[value.type] || {}
  const relations = flattenRelations(value)

  bucket[value.id] = {
    id: value.id,
    type: value.type,
    ...value.attributes,
    relations,
  }
  acc[value.type] = bucket

  return acc
}
