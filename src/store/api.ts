import * as R from 'ramda'

const BASE_URL = 'http://localhost:8080/api/v1'

type ValidJsonValue = string | number | boolean

type JsonApiObject = {
  id: string
  type: string
  attributes: {
    [key: string]: ValidJsonValue
  }
}

type JsonApiRequest = {
  fields?: {
    [key: string]: string[]
  }
  include?: string[]
  url: string
}

const parseJsonApiQuery = (request: JsonApiRequest): string => {
  const { fields = {}, include = [] } = request
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
  const queries = [includesQuery, fieldsQuery]

  return queries.length ? `?${joinQ(queries)}` : ''
}

const flattenJsonApiObj = (acc, value: JsonApiObject) => {
  const bucket = acc[value.type] || {}
  // TODO: flatten "relationships" -> something like { relations: { author: [authorId] } }
  bucket[value.id] = {
    id: value.id,
    type: value.type,
    ...value.attributes,
  }
  acc[value.type] = bucket
  return acc
}

// TODO: set the required header once the API properly supports it
const jsonApiRequest = async (request: JsonApiRequest, init?: RequestInit) => {
  const { url } = request

  const query = parseJsonApiQuery(request)
  const res = await fetch(`${BASE_URL}/${url}${query}`, init)
  const json = await res.json()
  const { data = [], included = [] } = json

  const normalize = R.reduce(flattenJsonApiObj, {})
  const normalizedData = normalize(data)
  const normalizedIncluded = normalize(included)

  return {
    ...normalizedData,
    ...normalizedIncluded,
  }
}

const request = async (url: string, init?: RequestInit) =>
  fetch(`${BASE_URL}/${url}`, init).then((res) => res.json())

export const api = {
  jsonApiRequest,
  request,
}
