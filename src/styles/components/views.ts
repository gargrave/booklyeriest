import styled from '@emotion/styled'

export const ListView = styled.div`
  min-height: 256px;
  padding-bottom: 2rem;
  position: relative;
`

export const ListViewBucketContainer = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`

export const ListViewBucketKey = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`
