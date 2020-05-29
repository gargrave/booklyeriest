/* eslint-disable no-console */
const env = process.env.NODE_ENV
const isDev = env === 'development'

export type LoggingContext = {
  data?: {}
  fn: string
  msg?: string
}

export const logInfo = (ctx: LoggingContext) => {
  if (isDev) {
    const { data, fn, msg = '(No message provided)' } = ctx
    console.info(`${fn} :: ${msg}`)
    if (data) {
      console.log(data)
    }
  }
}

export const logWarning = (ctx: LoggingContext) => {
  if (isDev) {
    const { data, fn, msg = '(No message provided)' } = ctx
    console.warn(`${fn} :: ${msg}`)
    if (data) {
      console.log(data)
    }
  }
}

export const logError = (ctx: LoggingContext, err: Error) => {
  if (isDev) {
    const { data = {}, fn } = ctx
    console.error(`${fn} :: ${err.message}`)
    console.log({ ...data, err })
  }
}
