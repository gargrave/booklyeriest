import styled from '@emotion/styled'

import { PageTitle } from './text'

export const FormContainer = styled.form`
  position: relative;
`

export const FormInputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1.25rem;
`

export const FormTitle = styled(PageTitle)`
  margin-bottom: 1rem;
`

export const FormButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button {
    flex: 1 0;
  }
`
