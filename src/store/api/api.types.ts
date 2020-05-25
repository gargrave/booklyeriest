export type GqlQueryWrapper<VarsType> = {
  name: string
  query: string
  variables: VarsType
}
