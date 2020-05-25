export const parseGqlPayload = (name) => (payload) =>
  payload.data?.[name].items || payload.data?.[name]
