import { useAsyncFn } from 'react-use'
import { useSetRecoilState } from 'recoil'

import { getSetAuthors, getSetAuthorsLoading } from './authors.recoil'
import { authorsService } from './authors.service'

export const useAuthorsApi = (userId: string) => {
  const setAuthors = useSetRecoilState(getSetAuthors)
  const setAuthorsLoading = useSetRecoilState(getSetAuthorsLoading)

  const [fetchAuthorsState, fetchAuthors] = useAsyncFn(async () => {
    setAuthorsLoading(true)

    try {
      const result = await authorsService.fetchAuthorsByOwner(userId)
      setAuthors(result)
    } catch (err) {
      //  TODO: log error
    } finally {
      setAuthorsLoading(false)
    }
  }, [setAuthors, setAuthorsLoading, userId])

  return {
    fetchAuthors,
    fetchAuthorsState,
  }
}