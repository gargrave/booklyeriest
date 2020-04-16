export type ValidJsonValue = string | number | boolean

export type JsonApiResourceIdentifier = {
  id: string
  type: string
}

export type JsonApiObject = JsonApiResourceIdentifier & {
  attributes: {
    [key: string]: ValidJsonValue
  }
  relationships?: {
    [key: string]: {
      data: JsonApiResourceIdentifier
    }
  }
}

export type JsonApiRequestBody<T> = {
  attributes?: T
  type: string
}

export type JsonApiRequestQuery = {
  fields?: {
    [key: string]: string[]
  }
  include?: string[]
}

export type JsonApiRequest<T = {}> = {
  body?: JsonApiRequestBody<T>
  query?: JsonApiRequestQuery
  url: string
}
